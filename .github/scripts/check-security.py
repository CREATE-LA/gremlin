"""Fail closed if static deployment boundaries are accidentally expanded."""
from html.parser import HTMLParser
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parents[2]
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.metas = {}; self.scripts = []; self.handlers = []; self.active = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'meta': self.metas[(a.get('name') or a.get('http-equiv') or '').lower()] = a.get('content', '')
        if tag == 'script': self.scripts.append(a.get('src'))
        if tag in {'form', 'iframe', 'object', 'embed', 'base'}: self.active.append(tag)
        self.handlers.extend(k for k in a if k.lower().startswith('on'))
page = Page(); page.feed((root / 'index.html').read_text())
policy = dict((parts[0], parts[1:]) for item in page.metas.get('content-security-policy', '').split(';') if (parts := item.split()))
for directive in ['default-src', 'connect-src', 'object-src', 'base-uri', 'form-action', 'frame-src', 'worker-src']:
    assert policy.get(directive) == ["'none'"], directive
assert policy.get('script-src') == ["'self'"]
assert policy.get('script-src-attr') == ["'none'"]
assert policy.get('img-src') == ["'self'"]
assert policy.get('media-src') == ["'self'"]
assert page.metas.get('referrer') == 'no-referrer'
assert not page.active and not page.handlers
assert page.scripts and all(page.scripts), 'Inline scripts are prohibited'
for src in page.scripts:
    path = src.split('?')[0]
    assert ':' not in path and not path.startswith('/') and '..' not in Path(path).parts, src
    assert (root / path).is_file(), src
# Public root is intentionally small; workflow files are hidden from Pages.
allowed = {'.nojekyll', '.gitignore', 'SECURITY.md', 'index.html', 'bootstrap.js', 'app.js', 'idle.js', 'scene.js', 'surprise.js', 'rewards.js', 'palette.js', 'story24.js', 'story27.js', 'sound.js', 'renderer.js', 'perf.js'}
files = subprocess.check_output(['git', '-C', str(root), 'ls-files'], text=True).splitlines()
for name in files:
    p = Path(name)
    assert name in allowed or (name.startswith('assets/') and p.suffix in {'.png', '.webp', '.mp3'}) or name.startswith('.github/'), name
    assert not p.name.startswith('.env') and p.suffix not in {'.pem', '.key', '.p12', '.pfx'}, name
print(f'Static security boundary passed: {len(page.scripts)} local scripts, restrictive CSP, no inline handlers/forms, {len(files)} tracked paths checked.')
