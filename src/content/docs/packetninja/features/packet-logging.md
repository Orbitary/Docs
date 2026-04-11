---
title: Packet Logging
description: Understanding PacketNinja's packet logging capabilities
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import ExperimentalBadge from '../../../../components/ExperimentalBadge.astro';

# Packet Logging

<ComingSoon type="wip" message="Comprehensive logging documentation in development" />

PacketNinja provides detailed packet logging with beautiful formatting to help you understand packet flow.

## Features

### Automatic Logging

PacketNinja automatically intercepts and logs packets as they flow between client and server.

### Direction Indicators

Packets are marked with clear direction indicators:
- `[C→S]` - Clientbound to Serverbound
- `[S→C]` - Serverbound to Clientbound

### Structured Output

Packets are formatted in a tree structure showing all fields and values:

```
[C→S] ServerboundInteractPacket
├─ Entity ID: 12345
├─ Action: ATTACK
├─ Hand: MAIN_HAND
└─ Sneaking: false
```

## Supported Packets

### Fully Supported

These packets have complete pretty-printing:

**Clientbound:**
- ClientboundAddEntityPacket
- ClientboundCustomPayloadPacket
- ClientboundRemoveEntitiesPacket
- SetPassengersHandler

**Serverbound:**
- ServerboundInteractPacket
- ServerboundPlayerActionPacket
- ServerboundSwingPacket

### Partial Support

<ExperimentalBadge />

Other packets are logged with basic formatting. Full support is being added progressively.

## Log Levels

<ComingSoon message="Log level configuration coming soon" />

Control verbosity with different log levels:
- **TRACE** - All packets
- **DEBUG** - Important packets only
- **INFO** - Summary information

## Performance Impact

PacketNinja is designed to have minimal performance impact during development, but it should **not** be used in production environments.

## Next Steps

- Learn about [Filtering](/packetninja/features/filtering/)
- Explore [Formatting Options](/packetninja/features/formatting/)
- Read the [Debugging Guide](/packetninja/guides/debugging-packets/)
