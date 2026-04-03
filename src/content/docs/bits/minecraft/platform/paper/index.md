---
title: Paper
description: Paper-specific Bits implementation — config, commands, scheduling, and item utilities.
sidebar:
  order: 1
  badge: { text: 'Paper', variant: 'note' }
---

The `:Paper` module provides the Paper/Bukkit implementation of all `:API` abstractions.
The Paper artifact bundles `:API` via shadow — you only need to depend on `:Paper`.

## `PaperBitsConfig`

`PaperBitsConfig` is the concrete singleton that satisfies the `BitsConfig` contract for Paper.
Initialise it once during plugin enable before calling any other Bits API:
```java
public final class MyPlugin extends JavaPlugin {

    @Override
    public void onEnable() {
        new PaperBitsConfig(this);
        // ...
    }
}
```

Access it anywhere via `PaperBitsConfig.get()`.

It provides:
- **Permission checking** — `hasPermission(Audience, Permission)` delegates to Bukkit's permission system
- **Player collection** — `getAll()` returns an `Audience` of all online players
- **Locale resolution** — `getLocale(Audience)` reads the player's client locale
- **Logger** — constructs a `PaperBitsLogger`, which extends `BasicLogger` with staff-notification support via the `bits.log.<type>.notify` permission

## Commands on Paper

Extend `PaperBitsCommandManager` and implement `getAllCommands()`:
```java
public class MyCommandManager extends PaperBitsCommandManager {

    public MyCommandManager(MyPlugin plugin) {
        super(plugin);
    }

    @Override
    public List<BitsCommand> getAllCommands() {
        return List.of(new TeleportCommand());
    }
}
```

`PaperBitsCommandManager` handles:
- Argument registry — includes Paper-native types such as `Player` and `Location`
- Thread dispatch — sync via `Bukkit.getScheduler().runTask(...)`, async via `runTaskAsynchronously(...)`
- Registration — obtains the live `CommandDispatcher<CommandSourceStack>` from `MinecraftServer`, removes any pre-existing node with the same name, then inserts the generated node

See [Commands](/bits/minecraft/commands) for the full annotation reference.

## Task scheduling

Paper's scheduler is wrapped by the `Runnables` utility and the `Sequence` builder.
```java
// One-shot sync task
Runnables.sync(plugin, () -> player.sendMessage("Hello!"));

// One-shot async task
Runnables.async(plugin, () -> database.save(data));

// Ordered chain of tasks
new Sequence(plugin)
    .sync(() -> stage1())
    .async(() -> stage2())
    .sync(() -> stage3())
    .run();
```

For components that should persist across reinitialisation cycles, register them as `PermanentListener` or `PermanentRunnableStorage` via `PaperManagerContainer` — they will be excluded from the `cleanup` phase.

## `PaperManagerContainer`

`PaperManagerContainer` extends `ManagerContainer` with Bukkit `Listener` support.
It registers and unregisters listeners automatically during the `initialise` and `cleanup` lifecycle phases.
```java
PaperManagerContainer container = new PaperManagerContainer(plugin);
container.add(new MyManager());
container.startup();
```

## Item utilities

### `SkullBuilder`

`SkullBuilder` creates `ItemStack` instances with custom player-head textures from a Base64-encoded skin texture URL.
```java
ItemStack head = new SkullBuilder()
    .texture("eyJ0ZXh0dXJlcy...")
    .build();
```