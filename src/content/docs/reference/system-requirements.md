---
title: System Requirements
description: Supported environment expectations for running Phant.
---

This page describes the current practical environment expectations for Phant.

Phant is currently documented as Linux-first, with a desktop environment expected.

## Requirements

Confirmed requirements and expectations:

- Linux environment
- desktop session expected
- ability to run the packaged Linux app and bundled scripts
- permission to run local shell scripts from the extracted ZIP

## Recommended environment

For the smoothest experience, use:

- a Linux desktop environment such as GNOME or KDE
- a normal user account with access to launch desktop applications
- a development machine where PHP and related tooling can be installed locally

## Practical expectations

Phant is designed around local PHP development workflows.

You will get the most value from it if your setup includes one or more of the following:

- PHP installed locally
- Laravel or another PHP project
- Valet Linux for local site routing
- local development services such as a database, Redis, Valkey, or Mailpit

## Installation package expectation

The current Linux package is distributed as a ZIP that includes:

- the Phant AppImage
- `install.sh`
- `uninstall.sh`
- the application icon

## Notes

- A desktop environment is expected because the current packaged experience is a desktop app workflow.
- Some features depend on what is available in your local machine configuration.
- Some actions may require elevated privileges depending on your Linux setup.

## Next links

- [Install on Linux](../getting-started/install-on-linux/)
- [Troubleshooting](./troubleshooting/)
