---
title: Formatting
description: Packet formatting options and customization
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import ExperimentalBadge from '../../../../components/ExperimentalBadge.astro';

# Packet Formatting

<ExperimentalBadge />
<ComingSoon message="Formatting documentation in development" />

PacketNinja provides beautiful, structured packet formatting to make debugging easier.

## Default Formatting

Packets are formatted in a tree structure with clear hierarchy:

```
[Direction] PacketName
├─ Field1: Value1
├─ Field2: Value2
│  ├─ NestedField1: NestedValue1
│  └─ NestedField2: NestedValue2
└─ Field3: Value3
```

## Color Coding

<ComingSoon type="wip" />

Different packet types and fields use color coding for easy identification.

## Custom Formatters

<ComingSoon type="experimental" />

Create custom formatters for specific packet types or fields.

## Format Options

<ComingSoon message="Configuration options coming soon" />

Customize formatting through configuration:
- Compact vs expanded mode
- Color schemes
- Field visibility
- Custom templates

## Examples

### Entity Spawn Packet

```
[S→C] ClientboundAddEntityPacket
├─ Entity ID: 12345
├─ UUID: 550e8400-e29b-41d4-a716-446655440000
├─ Type: ZOMBIE
├─ Position: Vec3{x=100.5, y=64.0, z=200.5}
├─ Velocity: Vec3{x=0.0, y=0.0, z=0.0}
├─ Pitch: 0.0
└─ Yaw: 90.0
```

### Player Action Packet

```
[C→S] ServerboundPlayerActionPacket
├─ Position: BlockPos{x=100, y=64, z=200}
├─ Direction: UP
├─ Action: START_DESTROY_BLOCK
└─ Sequence: 42
```

## Next Steps

- Learn about [Packet Logging](/packetninja/features/packet-logging/)
- Explore [Filtering](/packetninja/features/filtering/)
