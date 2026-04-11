---
title: Sound API
description: Playing sounds across platforms
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import PlatformBadge from '../../../../components/PlatformBadge.astro';

# Sound API

<PlatformBadge platforms={['all']} />
<ComingSoon message="Sound API documentation in development" />

The Sound API provides a unified way to play sounds across different Minecraft platforms.

## Features

- Cross-platform sound support
- Volume and pitch control
- Sound categories
- Positional audio

## Basic Usage

```java
// Play a sound to a player
Sound.play(player, SoundType.ENTITY_EXPERIENCE_ORB_PICKUP);

// Play with custom volume and pitch
Sound.play(player, SoundType.BLOCK_NOTE_BLOCK_PLING, 1.0f, 2.0f);
```

## Documentation Coming Soon

Full API documentation with examples and platform-specific notes will be added here.
