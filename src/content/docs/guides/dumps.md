---
title: Dumps
description: Capture and inspect dump events from your PHP applications with Phant.
sidebar:
  order: 4
---

Use the `Dumps` page to monitor `dump()` and `dd()` output in real time while you work on PHP projects.

This is one of the core Phant workflows. Instead of depending only on terminal output or browser responses, you can inspect dump activity from a dedicated interface inside the app.

## What it does

Phant captures dump events and displays them in a live stream.

The current experience includes:

- real-time dump event list
- callsite context for the latest dump when available
- expandable payload rendering for arrays, objects, maps, and scalar values
- clipboard copy for dump payloads
- runtime information for the collector channel

You can use this in both:

- CLI workflows
- Laravel projects served through Valet Linux when HTTP capture is configured correctly

## Setup

Before relying on dump capture, make sure the required hooks are installed.

### Required setup

For the best results:

1. complete the onboarding flow in Phant
2. install the PHP CLI hook
3. install the PHP-FPM hook if you use Valet Linux and want HTTP request capture
4. confirm your environment from `Settings` or `Valet` if something looks incomplete

If you skipped onboarding earlier, you can still return to the relevant setup areas later:

- `Settings` for diagnostics and CLI hook setup
- `Valet` for PHP-FPM verification and remediation

## Open the Dumps page

Open `Dumps` from the main navigation.

What you will see:

- a live event stream
- current dump count
- latest callsite information when available
- `Runtime` details
- `Clear Events`

> Screenshot placeholder: Dumps page showing several captured events.

## Use dump capture in CLI workflows

After the CLI hook is installed, you can trigger dump output from command-line PHP execution.

Examples:

```php
dump(['source' => 'cli', 'status' => 'ok']);
```

In a Laravel command or any PHP CLI execution context, Phant should receive the event and show it in the `Dumps` view.

## Use dump capture in Laravel projects

If you use Laravel with Valet Linux, Phant can also capture dump output from HTTP requests when the PHP-FPM hook is configured correctly.

Example route:

```php
Route::get('/phant-check', function () {
    dump([
        'source' => 'http',
        'feature' => 'dumps',
        'status' => 'ok',
    ]);

    return 'Check Phant';
});
```

After visiting the route in your browser, the dump should appear in Phant.

## Use `dump()` and `dd()`

Phant is designed to monitor both `dump()` and `dd()` calls in the dumps interface.

Example:

```php
dump($user);
dd(['done' => true]);
```

Use these examples only in development environments.

## Read the dump stream

Each dump item can help you inspect:

- when it happened
- the rendered payload
- the latest known callsite context
- the copied payload for sharing or follow-up debugging

This is most useful when you are stepping through a problem and want to keep the debugging signal in one dedicated place.

## Use the Runtime panel

Open `Runtime` when you need collector details.

This can show:

- channel name
- collector state
- dropped packet count
- socket path
- last error when available

Use this when you suspect the dump transport itself is not behaving as expected.

## Daily usage

This is a practical workflow for daily development:

1. Open `Dumps` before testing a change.
2. Trigger `dump()` or `dd()` from your project.
3. Watch for the event in the live stream.
4. Inspect the payload directly in Phant.
5. Copy the payload if you need to share it or compare it elsewhere.
6. Clear events when you want a fresh debugging session.

## Important notes

- Dump capture depends on the relevant hook setup being correct.
- CLI dump capture and HTTP dump capture are related, but not the same setup path.
- HTTP capture usually depends on correct Valet Linux and PHP-FPM wiring.
- If the collector is not running correctly, the Runtime panel is the first place to check.

## Troubleshooting

### No dumps appear from CLI commands

Check whether:

- the PHP CLI hook is installed
- PHP is available in the expected environment
- the Runtime panel shows the collector as running

### No dumps appear from Laravel HTTP requests

Check whether:

- the PHP-FPM hook is installed
- Valet Linux is working correctly
- the `Valet` page shows recommendations or mismatches
- the related PHP-FPM service is active

### The payload looks incomplete or unusual

Check whether:

- you are testing the exact code path you expect
- the dump contains nested objects or recursion markers
- the latest callsite matches the place you intended to inspect

### The Runtime panel shows errors or dropped packets

Check whether:

- the collector is running
- the socket path is available
- repeated dump volume is overwhelming the current session
