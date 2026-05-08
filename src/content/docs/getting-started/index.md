---
title: Getting Started
description: Learn what Phant is, how to install it, and what to do first.
sidebar:
  order: 1
---

Phant is a desktop application for local PHP development on Linux.

It brings together several parts of the local workflow that are usually spread across terminal commands, config files, and separate tools. Instead of switching constantly between your shell, Valet, PHP configuration, and service status checks, you can inspect the most important parts of your setup from one app.

## What Phant helps you do

- Manage PHP versions.
- Inspect and adjust PHP settings.
- Work with Valet-based local sites.
- Check local development services.
- Capture dumps from your projects.

## Who it is for

Phant is mainly built for:

- Laravel developers
- PHP developers on Linux
- developers using Valet Linux in local environments
- teams that want a simpler shared development workflow

## What makes it different

Phant is focused on practical local development operations rather than acting like a full hosting platform or deployment tool.

Its goal is to help you answer common local environment questions quickly:

- Which PHP version am I using right now?
- Are the services I need actually running?
- Is Valet configured correctly?
- Are my dump events reaching the app?
- What should I fix first when my environment is not behaving as expected?

Phant also includes a first-run onboarding flow so new users can enable the parts required for dump capture without having to manually discover every configuration step.

## What is included in the Linux package

The Linux ZIP includes:

- the Phant AppImage
- `install.sh`
- `uninstall.sh`
- the application icon

## What Phant is not

Phant does not replace your framework, package manager, or Linux distribution tooling.

It works alongside the tools you already use, such as:

- PHP packages installed on your system
- Valet Linux
- local services like MySQL, MariaDB, Redis, or Valkey
- your normal project workflow in Laravel or other PHP applications

## Pages in this section

- [Install on Linux](./install-on-linux/)
- [First Launch](./first-launch/)

## Recommended path

1. Follow [Install on Linux](./install-on-linux/) to install the desktop app.
2. Complete [First Launch](./first-launch/) to finish onboarding.

## What you will have at the end

- Phant installed for your user account
- a desktop launcher in your applications menu
- your license key saved in the app
- dump capture enabled for PHP CLI
- dump capture enabled for Valet Linux HTTP requests when applicable
