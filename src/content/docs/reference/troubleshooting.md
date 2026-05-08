---
title: Troubleshooting
description: Fix common Phant setup and usage problems.
---

Use this page when something is not working and you need a symptom-based recovery path.

The guides already include short troubleshooting sections. This page goes a bit deeper and groups the most important issues by symptoms.

## Installation and launcher problems

### `./install.sh` does not run

Check whether:

- you already ran `chmod +x ./install.sh ./uninstall.sh`
- you are inside the extracted ZIP folder
- your shell can execute local scripts normally

Try again with:

```bash
chmod +x ./install.sh ./uninstall.sh
./install.sh
```

### Phant installs, but no launcher appears

Check whether:

- the install script completed successfully
- your desktop session has refreshed application entries

Try:

1. logging out and back in
2. restarting your desktop session
3. running `update-desktop-database` if your system provides it

## Onboarding and hook problems

### CLI dump capture is not working

Check whether:

- onboarding was completed
- the PHP CLI hook is enabled
- PHP is detected correctly in `Settings > Diagnostics`
- the `Dumps` Runtime panel shows the collector as running

### HTTP dump capture is not working

Check whether:

- the PHP-FPM hook was installed
- Valet Linux is installed and working
- the `Valet` page shows recommendations or mismatches
- the related PHP-FPM service is active

## Valet and HTTP dump problems

### My site appears, but HTTP dumps do not show up

Check whether:

- the site is actually served through the expected Valet setup
- the PHP-FPM service used by that site matches the expected prepend configuration
- `Apply Remediation` is still needed in the `Valet` page

### Valet verification shows warnings

Read the recommendations carefully first.

Common causes include:

- Valet not found in `PATH`
- missing PHP-FPM hook configuration
- inactive PHP-FPM service
- custom environment layout that needs manual verification

## PHP switching and settings problems

### I switched PHP, but my project still behaves the same

Check whether:

- the CLI runtime changed but the site still uses another PHP-FPM service
- Valet Linux still needs verification after the switch

### PHP settings were saved, but nothing changed

Check whether:

- the project is using the PHP runtime you edited
- the related PHP-FPM service restarted successfully
- a manual follow-up command was suggested by Phant

## Updates and license problems

### My license key is saved, but updates still do not work

Check whether:

- the key was actually saved in `Settings`
- the update section reports an error
- the current version and latest version values look correct

### The update downloads but does not install

Check whether:

- the downloaded file path is shown in `Settings`
- the install step returned an error
- the environment prevented the restart/install handoff

## Services status problems

### A service shows as stopped

Check whether:

- the service is actually running outside Phant
- your service manager reports it as active
- the project depends on that exact service and not another one

### A service shows as unavailable

Check whether:

- the service is installed
- the machine exposes it through the expected discovery path
- the service is managed in a way Phant can inspect

## When to check another page

If the issue is very feature-specific, also check:

- [PHP Management](../guides/php-management/)
- [Sites and Valet](../guides/sites-and-valet/)
- [Dumps](../guides/dumps/)
- [Settings](../guides/settings/)
