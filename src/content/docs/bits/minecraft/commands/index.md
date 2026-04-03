---
title: Commands
description: The Bits annotation-driven Brigadier command framework.
sidebar:
  order: 1
---

Bits provides an annotation-driven wrapper around Mojang's [Brigadier](https://github.com/Mojang/brigadier) library.
Rather than constructing node trees by hand, you annotate a `BitsCommand` subclass and the framework builds the equivalent Brigadier structure at startup via reflection.

## Processing pipeline

Registration goes through three sequential phases:

| Phase | Class | What it does |
|---|---|---|
| Reflection | `BitsCommandBuilder` | Reads annotations and produces an intermediate command description |
| Argument resolution | `BitsArgumentRegistry` | Maps Java types from method signatures to Brigadier `ArgumentType` instances |
| Node generation | `BrigadierTreeGenerator` | Assembles `LiteralCommandNode` trees and wires methods as executors |

## Defining a command

Extend `BitsCommand` and annotate it with `@Command`. The class represents one node in the command tree.
Nested `static` inner classes that also extend `BitsCommand` become sub-command branches automatically.
```java
@Command(value = "teleport", description = "Teleport a player.")
public class TeleportCommand extends BitsCommand {

    @Command
    public CommandReturnType execute(CustomCommandContext ctx, Player target) {
        // ...
        return CommandReturnType.SUCCESS;
    }
}
```

The first parameter of every executor method must be a `BitsCommandContext` subtype.
All subsequent parameters are resolved as typed command arguments via `BitsArgumentRegistry`.

## Annotations

| Annotation | Placement | Effect |
|---|---|---|
| `@Command(value, aliases, description)` | Class | Names the command node and its aliases |
| `@Command` or `@Command("literal")` | Method | Declares an executor; an explicit value creates a named child literal |
| `@Requirement({...})` | Class or method | Gates the node behind one or more requirement predicates |
| Method parameter of type `T` | Method parameter | Declares a typed argument resolved via `BitsArgumentRegistry` |

## `CommandReturnType`

Every executor method returns a `CommandReturnType` enum value. This is not a Brigadier integer return code —
it is passed to the context's respond method so your `BitsCommandContext` subclass can format the response accordingly.

| Value | Meaning |
|---|---|
| `SUCCESS` | Command completed as intended |
| `INFO` | Informational output; no state change |
| `ERROR` | Command could not complete |

## `BitsCommandManager`

`BitsCommandManager<S>` is the abstract orchestrator. `S` is the platform's command source type.
You subclass it per-platform to provide the argument registry, requirement registry, context factory, and registration logic.

It participates in the `CoreManager` lifecycle — call `startup()` during plugin enable and `shutdown()` during disable.

See the platform pages for the concrete implementations:
- [Paper — `PaperBitsCommandManager`](/bits/minecraft/paper)
- [Velocity — `VelocityBitsCommandManager`](/bits/minecraft/velocity)

## Platform differences

| Capability | Paper | Velocity | Fabric |
|---|---|---|---|
| Native player argument type | ✅ `Player` | ✅ `Player` | ✅ |
| Location argument type | ✅ | ❌ (proxy, no world) | ✅ |
| Thread dispatch (sync/async) | `Runnables` | `Tasks` | — |
| Registration target | `CommandDispatcher<CommandSourceStack>` | `CommandManager` | Fabric command API |