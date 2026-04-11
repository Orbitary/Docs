---
title: Multi-Platform Development
description: Writing code that works across all platforms
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import PlatformBadge from '../../../../components/PlatformBadge.astro';

# Multi-Platform Development

<PlatformBadge platforms={['all']} />
<ComingSoon message="Multi-platform guide in development" />

Learn strategies for writing code that works seamlessly across Paper, Velocity, and Fabric.

## Platform Abstraction

Bits provides a unified API that abstracts platform differences:

```java
// This code works on all platforms
public void healPlayer(Player player) {
    player.setHealth(player.getMaxHealth());
    player.sendMessage("&aHealed!");
}
```

## Platform-Specific Code

When you need platform-specific features:

```java
if (Platform.isPaper()) {
    // Paper-specific code
} else if (Platform.isVelocity()) {
    // Velocity-specific code
}
```

## Best Practices

<ComingSoon type="wip" />

- Use Bits interfaces whenever possible
- Keep platform-specific code isolated
- Test on all target platforms
- Document platform requirements

## More Coming Soon

- Detailed platform comparison
- Migration guides
- Platform-specific tips
- Common pitfalls
