---
title: Text Formatting
description: Rich text formatting with MiniMessage and legacy color codes
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import PlatformBadge from '../../../../components/PlatformBadge.astro';

# Text Formatting

<PlatformBadge platforms={['all']} />
<ComingSoon type="wip" message="Full documentation in progress" />

Bits provides powerful text formatting capabilities with automatic support for MiniMessage and legacy color codes.

## MiniMessage Support

```java
player.sendMessage("<gradient:blue:green>Gradients are awesome!");
player.sendMessage("<rainbow>Rainbow text!");
player.sendMessage("<bold><red>Bold and red</red></bold>");
```

## Legacy Color Codes

```java
player.sendMessage("&aGreen text");
player.sendMessage("&l&cBold red text");
```

## Automatic Conversion

Bits automatically handles format conversion based on the platform and client capabilities.

## More Coming Soon

- Text components API
- Custom formatting rules
- Placeholder support
- Advanced examples

See the [API Reference](/bits/api-reference/interfaces/) for detailed API documentation.
