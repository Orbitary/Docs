---
title: Event System
description: Working with events in Bits
---

import ComingSoon from '../../../../../components/ComingSoon.astro';
import PlatformBadge from '../../../../../components/PlatformBadge.astro';

# Event System

<PlatformBadge platforms={['paper', 'velocity', 'fabric']} />
<ComingSoon type="wip" message="Event system documentation in development" />

The Bits event system provides a unified way to handle events across different platforms.

## Features

- Cross-platform event handling
- Annotation-based listeners
- Priority support
- Event cancellation

## Basic Usage

```java
@EventListener
public class MyListener {
    
    @Listen
    public void onPlayerJoin(PlayerJoinEvent event) {
        event.getPlayer().sendMessage("Welcome!");
    }
}
```

## Documentation Coming Soon

Detailed documentation including:
- Event registration
- Priority handling
- Custom events
- Platform-specific events
