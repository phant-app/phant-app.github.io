---
title: FAQ
description: Common questions about using Phant.
---

This page answers common questions briefly and points to the right place for more detail.

## Is Phant free to use?

Phant is licensed under the Business Source License 1.1 with an Additional Use Grant.

See the full details on the [Licensing](./licensing/) page.

## How do I install Phant?

Use the Linux ZIP package, make the scripts executable, then run `./install.sh`.

See [Install on Linux](../getting-started/install-on-linux/).

## Can I build from source?

Yes. The source is available to inspect and build.

For licensing context, see [Licensing](./licensing/).

## Does Phant replace Valet?

No.

Phant works alongside Valet Linux. It can inspect sites, verify Valet-related setup, and help with PHP-FPM wiring for HTTP dump capture, but it is not a replacement for Valet Linux itself.

See [Sites and Valet](../guides/sites-and-valet/).

## What does Phant change on my system?

That depends on which features you use.

Examples include:

- desktop installation files from the install script
- local settings storage
- PHP hook files for CLI and, when used, PHP-FPM integration
- managed PHP settings files when you change PHP settings in the app

See:

- [Install on Linux](../getting-started/install-on-linux/)
- [Dumps](../guides/dumps/)
- [Settings](../guides/settings/)

## Where is my data stored?

One important documented settings path is:

- `~/.config/phant/settings.json`

See [Settings](../guides/settings/).

## Next links

- [Troubleshooting](./troubleshooting/)
- [Licensing](./licensing/)
