# Security

Report suspected vulnerabilities privately through [GitHub's vulnerability reporting form](https://github.com/CREATE-LA/gremlin/security/advisories/new). Please include the affected URL, browser, reproduction steps and impact. Do not put sensitive details or credentials in public issues.

Gremlin is a static client-side experience. It has no login, database, forms, payment flow or third-party runtime packages. Application scripts, images and audio load from the same site. A restrictive content policy blocks inline JavaScript, external scripts, network API connections, objects and forms. Inline styles remain necessary for the SVG animation and palette controls.

GitHub Pages provides HTTPS. Its standard hosting does not expose per-site HTTP header configuration; the HTML content policy cannot enforce `frame-ancestors`, and it does not replace server headers such as `X-Content-Type-Options`. Gremlin has no sensitive actions or account sessions to protect from framing. Reassess hosting and security controls before adding authentication, data collection, remote content or payments.

Changes to main go through a pull request, security checks and review. Administrators retain the existing emergency bypass; any use should be deliberate and documented. GitHub code scanning and secret scanning supplement manual review and do not guarantee that all vulnerabilities have been found.
