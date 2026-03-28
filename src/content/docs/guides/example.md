---
title: Quickstart on Linux
description: Install Phant, connect a Laravel project, and verify your local stack in minutes.
---

This guide gets you from zero to a working local workflow with Phant on Linux.

## What you will do

1. Download a Phant binary.
2. Launch Phant and connect your first project.
3. Confirm site routing, PHP version, and service state.
4. Verify dump output capture in the app UI.

## Before you start

- Linux desktop environment (X11 or Wayland).
- A local PHP/Laravel project.
- Sudo access if your distro needs package setup for PHP or services.

## 1. Download and run Phant

Get the latest release from the project releases page:

- https://github.com/phant-app/phant/releases

After download:

1. Extract the archive.
2. Make it executable.
3. Run the binary.

```bash
chmod +x ./phant
./phant
```

## 2. Connect your first project

In Phant:

1. Open the **Sites** area.
2. Add or detect your project path.
3. Assign the local domain (for example, `myapp.test`).
4. Set the PHP runtime version required by your app.

Expected result:

- Your project appears in the site list.
- Domain and PHP version are visible in one place.

## 3. Verify local services

Open the **Services** view and check current status for the tools you use, for example:

- MariaDB or MySQL
- Postgres
- Redis or Valkey

Expected result:

- You can immediately tell what is running and what is not.
- No need to cross-check multiple terminal windows.

## 4. Verify dump capture

Open your Laravel app and trigger a debug call:

```php
dump(['status' => 'ok', 'source' => 'quickstart']);
```

Then confirm the payload appears in Phant's dumps panel.

Expected result:

- Dump output is visible in Phant.
- Browser/network debugging noise is reduced.

## Troubleshooting

### Domain does not resolve

1. Confirm the site entry exists in Phant.
2. Re-apply linking/parking action in the Sites section.
3. Restart browser and retry.

### Service status looks wrong

1. Restart the service from your distro tools.
2. Re-open the Services view.
3. Ensure no other local manager is competing for the same port.

### Dumps are not appearing

1. Verify your project has dump hooks enabled as documented by Phant.
2. Retry with a simple `dump()` call on a route hit.
3. Check that the app is running under the expected PHP version.

## Next steps

- Continue with the reference docs for command and option details.
- Follow releases for new capabilities and fixes:
	https://github.com/phant-app/phant/releases

