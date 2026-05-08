# Doc Context

This file stores the current shared context for Phant documentation work.

Use it as the working memory for future docs sessions so tone, product facts, structure, and documentation decisions stay consistent.

## Purpose

- keep a stable memory of current documentation decisions
- record product wording rules
- track docs structure decisions in the Starlight site
- note source-of-truth files in the main app repo
- reduce repeated discussion in future documentation sessions

## Repositories

There are two repositories involved in documentation work.

### Main app repo

- path: `/home/ronald/code/phant`
- role: source of truth for product behavior, UI labels, setup flow, and licensing files

### Docs repo

- path: `/home/ronald/code/phant-app.github.io`
- role: Starlight documentation site where user docs are written

## Product Context

Phant is a desktop application for local PHP development on Linux.

Current documented feature areas:

- PHP management
- local sites with Valet Linux
- services status
- dump capture
- settings, updates, diagnostics, and licensing

Phant is currently documented as Linux-first.

Do not describe the product as broadly cross-platform in user docs unless confirmed and intentionally documented later.

## Packaging Context

Current documented Linux distribution format:

- ZIP package

Current documented ZIP contents:

- Phant AppImage
- `install.sh`
- `uninstall.sh`
- application icon

Current documented installation behavior:

1. extract the ZIP
2. run `chmod +x ./install.sh ./uninstall.sh`
3. run `./install.sh`
4. after `./install.sh` completes, Phant is installed for the current user
5. open Phant from the applications menu

Current documented uninstall commands:

```bash
./uninstall.sh --dry-run
./uninstall.sh
./uninstall.sh --purge-data --yes
```

## Onboarding Context

Current onboarding flow in the app:

1. Welcome
2. PHP Hooks
3. License

Current onboarding guidance in docs:

- install PHP CLI hook
- install PHP-FPM hook for Valet Linux if applicable
- save license key

Current documented post-onboarding destination:

- the app opens the main interface and lands on the dumps view

## Documentation Rules

These rules were explicitly decided during docs work.

### Wording rules

- do not use wording like `customers`, `paying customers`, `buying customers`, or `Phant customers`
- keep wording neutral and product-focused
- avoid saying `source free`
- prefer `source-available` when discussing licensing
- avoid over-promising platform support

### Scope rules

- user docs should be user-manual first, not architecture first
- prioritize practical usage over implementation details
- explain what users do in the app before discussing lower-level behavior
- keep Linux as the primary platform scope for now

### Tone rules

- practical
- direct
- calm
- concise
- avoid legal-heavy language outside the licensing page

### Screenshot rules

- add screenshots only when truly useful
- keep screenshots minimal because the product is still an MVP
- current approved Getting Started screenshot placeholder:
  - onboarding screen
- current approved Guides screenshot placeholders:
  - PHP page
  - Sites page
  - Services page
  - Dumps page
  - Settings page is optional
- Reference pages should remain text-only for now

## Current Docs Structure

Docs live in:

- `/home/ronald/code/phant-app.github.io/src/content/docs`

Current main sections:

- `getting-started`
- `guides`
- `reference`
- `community`

Current sidebar configuration source:

- `/home/ronald/code/phant-app.github.io/astro.config.mjs`

Sidebar currently autogenerates these directories:

- `getting-started`
- `guides`
- `reference`
- `community`

## Current Getting Started Decisions

The standalone `What Is Phant?` page was removed.

Its product-overview content was intentionally merged into:

- `src/content/docs/getting-started/index.md`

Current Getting Started pages:

- `src/content/docs/getting-started/index.md`
- `src/content/docs/getting-started/install-on-linux.md`
- `src/content/docs/getting-started/first-launch.md`

Current content decisions for Getting Started:

- explain what Phant is on the Getting Started landing page
- document the Linux ZIP install flow directly
- make `chmod +x ./install.sh ./uninstall.sh` part of the primary install steps
- clearly state that after `./install.sh`, Phant is already installed
- do not mention customers in user docs

## Current Guides Decisions

Guides are written task-first.

Current guide pages:

- `src/content/docs/guides/php-management.md`
- `src/content/docs/guides/sites-and-valet.md`
- `src/content/docs/guides/services.md`
- `src/content/docs/guides/dumps.md`
- `src/content/docs/guides/settings.md`

Current content decisions for Guides:

- each guide should include a short troubleshooting section
- guides should focus on real usage, not internal architecture
- `Dumps` should be the strongest and most detailed guide in the section
- `Settings` should cover the full page, not just a subset of settings

### PHP Management guide decisions

- cover full day-to-day usage
- mention underlying Linux package-manager behavior lightly
- keep the page app-focused
- do not add a heavy platform warning block

### Sites and Valet guide decisions

- explain that Valet Linux must already be installed
- link to the Valet Linux project: `https://github.com/cpriego/valet-linux`
- keep `Sites` and `Valet` in one combined guide for now
- emphasize site discovery and verification more than deep remediation detail

### Services guide decisions

- present `Services` as a status and inspection page, not a service manager
- explicitly name the currently documented service set

Current documented service list:

- PostgreSQL
- MySQL
- MariaDB
- Redis
- Valkey
- Mailpit

### Dumps guide decisions

- include code examples in the first draft
- mention both CLI workflows and Laravel projects
- repeat essential setup steps inside the guide so it stands on its own
- do not heavily emphasize the behavioral difference between `dump()` and `dd()`

### Settings guide decisions

- cover appearance, license, updates, diagnostics, and embedded Valet verification/remediation
- describe the license key as related to auto-update eligibility and support for development
- describe updates as available with a valid license

## Current Reference Decisions

Reference pages should be balanced: factual first, but still clear for normal users.

Current reference pages:

- `src/content/docs/reference/index.md`
- `src/content/docs/reference/system-requirements.md`
- `src/content/docs/reference/faq.md`
- `src/content/docs/reference/troubleshooting.md`
- `src/content/docs/reference/licensing.md`

Current content decisions for Reference:

- keep the section factual and easy to scan
- avoid screenshots in Reference for now
- use deeper symptom-based troubleshooting here instead of only repeating guide troubleshooting

### System Requirements decisions

- document confirmed requirements plus practical advice
- describe Linux support as Linux-first with a desktop environment expected
- keep the page practical and not over-specified beyond confirmed behavior

### FAQ decisions

- answer common questions briefly and link to fuller pages when needed
- keep licensing-related answers short and point to the Licensing page

Current FAQ questions included in the first draft:

- Is Phant free to use?
- How do I install Phant?
- Can I build from source?
- Does Phant replace Valet?
- What does Phant change on my system?
- Where is my data stored?

### Troubleshooting decisions

- organize the page by symptoms instead of by product area alone
- cover these first-draft problem groups:
  - install and launcher
  - onboarding and hooks
  - Valet and HTTP dumps
  - PHP switching and settings
  - updates and license
  - services status

### Licensing decisions

- keep the page cautious and minimal
- summarize in plain language, but rely on the canonical license text for exact meaning
- include these points in the first draft:
  - BSL 1.1 summary
  - Additional Use Grant summary
  - MIT change date note
  - official Linux packaged build note
  - source access and build note

## Current Community Decisions

Community pages should stay very small and action-oriented.

Current community pages:

- `src/content/docs/community/index.md`
- `src/content/docs/community/support.md`
- `src/content/docs/community/contributing.md`

Current content decisions for Community:

- keep the section lightweight
- prefer direct links and short guidance over longer prose

### Support page decisions

- explicitly mention these support paths:
  - docs
  - GitHub Issues
  - GitHub Discussions
  - official website
- include a very short bug-report checklist

### Contributing page decisions

- keep it short and link to the main repository contribution guide
- explicitly mention these contribution paths:
  - bug reports
  - feature requests
  - pull requests
  - documentation improvements

## Source Of Truth In Main App Repo

Use these files to verify behavior before documenting features.

### Product overview and licensing

- `/home/ronald/code/phant/README.md`
- `/home/ronald/code/phant/LICENSE.md`

### Architecture and feature boundaries

- `/home/ronald/code/phant/docs/architecture/overview.md`

### App routing and onboarding flow

- `/home/ronald/code/phant/frontend/src/App.tsx`
- `/home/ronald/code/phant/frontend/src/pages/OnboardingPage.tsx`

### Feature pages

- `/home/ronald/code/phant/frontend/src/pages/PhpManagerPage.tsx`
- `/home/ronald/code/phant/frontend/src/pages/ValetSitesPage.tsx`
- `/home/ronald/code/phant/frontend/src/pages/ValetPage.tsx`
- `/home/ronald/code/phant/frontend/src/pages/ServicesPage.tsx`
- `/home/ronald/code/phant/frontend/src/pages/DumpsPage.tsx`
- `/home/ronald/code/phant/frontend/src/pages/SettingsPage.tsx`

### Backend service boundaries

- `/home/ronald/code/phant/internal/services/php_service.go`
- `/home/ronald/code/phant/internal/services/setup_service.go`
- `/home/ronald/code/phant/internal/services/services_status_service.go`
- `/home/ronald/code/phant/internal/services/dump_service.go`
- `/home/ronald/code/phant/internal/services/license_service.go`

## Known Product Nuances To Revisit

These areas may need cleanup or explicit alignment later.

- in-app wording around license key usage and free use should stay aligned with the licensing docs
- README wording in the main app repo may still describe broader platform support than the current user docs
- example starter docs still exist in the docs repo and may be removed later if no longer needed
- updates wording in docs should stay aligned with the real update and license behavior in the app

## Current Placeholder Content

The docs scaffold still has sections that need full content:

- community

These should be refined section by section instead of rewritten all at once.

## Working Principle For Future Sessions

Before documenting a feature:

1. verify the current behavior in the main app repo
2. prefer user-facing language over implementation detail
3. keep terminology aligned with the actual UI labels
4. update this file if a documentation rule or product decision changes
