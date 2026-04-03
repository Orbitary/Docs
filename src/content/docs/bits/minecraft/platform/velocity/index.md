---
title: Velocity
description: Velocity-specific Bits implementation — config, commands, and task scheduling.
sidebar:
  order: 1
  badge: { text: 'Velocity', variant: 'tip' }
---

The `:Velocity` module provides the Velocity proxy implementation of all `:API` abstractions.
The Velocity artifact bundles `:API` via shadow — you only need to depend on `:Velocity`.

## `VelocityBitsConfig`

`VelocityBitsConfig` is the concrete singleton for Velocity. Initialise it in your plugin's `onProxyInitialization`:
```java
@Plugin(id = "myplugin")
public final class MyPlugin {

    @Subscribe
    public void onProxyInitialization(ProxyInitializeEvent event) {
        new VelocityBitsConfig(server, logger);
        // ...
    }
}
```

Access it anywhere via `VelocityBitsConfig.get()`.

It provides:
- **Permission checking** — delegates to Velocity's native permission system
- **Player collection** — `getAll()` returns all connected players as an `Audience`
- **Logger** — constructs a `VelocityBitsLogger` that delegates to SLF4J

## Commands on Velocity

Commands follow the same annotation model as Paper. Extend `VelocityBitsCommandManager` and implement `getAllCommands()`.

Note that Velocity is a proxy — it has no world context, so argument types like `Location` are not available.
See [Commands — platform differences](/bits/minecraft/commands#platform-differences) for the full comparison.

## Task scheduling

Velocity's scheduler is wrapped by the `Tasks` utility and the `Sequence` builder.
```java
// One-shot async task (Velocity tasks are always off the main thread)
Tasks.async(plugin, server, () -> doWork());

// Ordered chain
new Sequence(plugin, server)
    .async(() -> stage1())
    .async(() -> stage2())
    .run();
```

For persistent components across reinitialisation, register them with `PermanentTaskStorage`.