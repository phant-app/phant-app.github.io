---
title: Quickstart on Linux
description: Install Phant on Linux and prepare your machine for first use.
sidebar:
  order: 2
---

Phant is currently available as a Linux desktop build distributed as a ZIP package.

The package includes everything you need to install the app for your user account:

- the Phant AppImage
- `install.sh`
- `uninstall.sh`
- the application icon

## Before you install

Make sure you have:

- a Linux desktop environment such as GNOME or KDE
- permission to run local scripts in the extracted ZIP
- the Linux ZIP from the Phant download page

Get the Linux package from the Phant download page:

- https://payhip.com/b/ygTYq

## Installation

1. Download the Linux ZIP package.
2. Extract the ZIP to a folder you can access easily.
3. Open a terminal in the extracted folder.
4. Make the scripts executable:

```bash
chmod +x ./install.sh ./uninstall.sh
```

5. Run the installer:

```bash
./install.sh
```

After `./install.sh` finishes, Phant is installed for your current user.

## What the installer does

- installs Phant for the current user
- creates a `.desktop` launcher
- installs or updates the application icon

In normal use, you do not need to run the AppImage manually after installation. Open Phant from your applications menu.

## Troubleshooting install issues

If the script does not run, confirm you already made the scripts executable and try again:

```bash
chmod +x ./install.sh ./uninstall.sh
./install.sh
```

If the launcher does not appear after installation:

1. Log out and back in, or restart your desktop session.
2. If needed, run `update-desktop-database` on your system.

If you want to inspect the exact actions before running the installer, open `install.sh` in a text editor first.

## Uninstalling Phant

You can remove Phant with the included uninstall wizard.

Preview what will be removed:

```bash
./uninstall.sh --dry-run
```

Run a normal uninstall:

```bash
./uninstall.sh
```

Remove application data as well:

```bash
./uninstall.sh --purge-data --yes
```

Use the data purge option carefully. It is intended to remove local application data and is not recoverable.

## After installation

Open Phant from your applications menu.

At this point, Phant is already installed. You do not need to run `./install.sh` again unless you are reinstalling or updating through the packaged installer.

On first launch, Phant opens its onboarding flow so you can:

1. review the environment snapshot
2. install the PHP CLI hook
3. install the PHP-FPM hook for Valet Linux if needed
4. save your license key

Continue with [First Launch](./first-launch/).
