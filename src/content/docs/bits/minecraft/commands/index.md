---
title: Commands
description: The Bits annotation-driven Brigadier command framework.
sidebar:
  order: 1
---

Bits provides an annotation-driven wrapper around Mojang's [Brigadier](https://github.com/Mojang/brigadier) library.
Rather than constructing node trees by hand, you annotate a `BitsCommand` subclass and the framework builds the equivalent Brigadier structure at startup via reflection.

## Defining a command
Extend `BitsCommand` and annotate it with `@Command`.
Nested inner classes also extending `BitsCommand` become sub-command branches automatically.
```java
@Command(value = "teleport", aliases = {"teleporting", "tp2"}, description = "Teleport a player.")
public class TeleportCommand extends BitsCommand {
    
    /**
     * Teleport to spawn. (/teleport spawn)
     */
    @Command("spawn")
    public void teleportToSpawn(CustomCommandContext ctx) {
        targetPlayer.teleport(spawnLocation);
        ctx.respond(Text.of("Teleported " + targetPlayer.getName() + " to spawn"), CommandReturnType.SUCCESS);
    }

    /**
     * Player-specific teleport commands. (/teleport <player> ...)
     */
    @Command
    public final static class PlayerCommands extends BitsCommand {
        private final Player targetPlayer;

        public PlayerCommands(Player targetPlayer) {
            this.targetPlayer = targetPlayer;
        }
        
        // Teleport to the target player. (/teleport <player>)
        @Requirement(PlayerSenderRequirement.class)
        @Command
        public void teleportToEntity(CustomCommandContext ctx) {
            ...
        }
        
        // Teleport the target player to another player. (/teleport <player> <otherPlayer>)
        @Command
        public void teleportToEntity(CustomCommandContext ctx, Player entity) {
            ...
        }
    }
}
```

The first parameter of every executor method must be a `BitsCommandContext` subtype.
All subsequent parameters are resolved as typed command arguments via `BitsArgumentRegistry`.

## Default Annotations
| Annotation                              | Effect                                                   |
|-----------------------------------------|----------------------------------------------------------|
| `@Command(value, aliases, description)` | Names the command node and its aliases                   |
| `@Requirement({...})`                   | Gates the node behind one or more requirement predicates |

### Requirements
COMING SOON...

## Returning
Every executor method should return a `CommandReturnType`.
This is not a Brigadier integer return code.
Instead, it is passed to the context's respond method so your `BitsCommandContext` subclass can format the response accordingly.

| Value     | Meaning                               |
|-----------|---------------------------------------|
| `SUCCESS` | Command completed as intended         |
| `INFO`    | Informational output; no state change |
| `ERROR`   | Command could not complete            |

## The `CommandManager`
See the platform pages for the concrete implementations:
- [Paper `PaperBitsCommandManager`](/bits/minecraft/paper)
- [Velocity `VelocityBitsCommandManager`](/bits/minecraft/velocity)
- [Fabric `FabricBitsCommandManager<?>`](/bits/minecraft/fabric)