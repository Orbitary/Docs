---
title: Filtering
description: Filter packets to focus on what matters
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import ExperimentalBadge from '../../../../components/ExperimentalBadge.astro';

# Packet Filtering

<ExperimentalBadge />
<ComingSoon message="Filtering system documentation in development" />

PacketNinja's filtering system helps you focus on specific packets and reduce noise.

## Filter Types

### By Packet Type

Filter to show only specific packet types:

```
filter.include=ServerboundInteractPacket,ClientboundAddEntityPacket
```

### By Direction

Show only clientbound or serverbound packets:

```
filter.direction=clientbound
# or
filter.direction=serverbound
```

### By Pattern

<ComingSoon type="experimental" />

Use patterns to match packet names:

```
filter.pattern=.*Entity.*
```

## Configuration

<ComingSoon type="wip" message="Configuration UI in development" />

Filters can be configured through:
- Configuration file
- In-game commands
- Runtime API

## Common Filter Patterns

### Entity-Related Packets

```
filter.pattern=.*Entity.*
```

### Player Actions

```
filter.include=ServerboundPlayerActionPacket,ServerboundInteractPacket
```

### Network Sync

```
filter.include=ClientboundSetEntityDataPacket,ClientboundUpdateAttributesPacket
```

## Performance

Filtering is applied early in the packet pipeline to minimize performance impact.

## Examples

<ComingSoon type="wip" />

Practical examples of useful filter configurations will be added here.

## Next Steps

- Learn about [Packet Logging](/packetninja/features/packet-logging/)
- Explore [Formatting Options](/packetninja/features/formatting/)
- Read the [Debugging Guide](/packetninja/guides/debugging-packets/)
