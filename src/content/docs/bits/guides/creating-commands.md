---
title: Creating Commands
description: Step-by-step guide to creating commands with Bits
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import PlatformBadge from '../../../../components/PlatformBadge.astro';

# Creating Commands Tutorial

<PlatformBadge platforms={['all']} />
<ComingSoon type="wip" message="Comprehensive tutorial in development" />

Learn how to create powerful commands with Bits' annotation-driven command framework.

## What You'll Learn

- Creating basic commands
- Adding parameters
- Permission handling
- Subcommands
- Advanced features

## Basic Command

```java
@Command(name = "heal")
@Permission("server.heal")
public class HealCommand {
    
    public void execute(@Sender Player player) {
        player.setHealth(player.getMaxHealth());
        player.sendMessage("&aYou have been healed!");
    }
}
```

## Command with Parameters

<ComingSoon type="wip" />

```java
@Command(name = "teleport", aliases = {"tp"})
@Permission("server.teleport")
public class TeleportCommand {
    
    public void execute(
        @Sender Player sender,
        Player target,
        Location location
    ) {
        target.teleport(location);
        sender.sendMessage("Teleported " + target.getName());
    }
}
```

## More Content Coming Soon

- Subcommands
- Tab completion
- Error handling
- Best practices
