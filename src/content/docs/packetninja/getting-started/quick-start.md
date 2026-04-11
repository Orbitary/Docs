---
title: Quick Start
description: Start debugging packets with PacketNinja
---

import ComingSoon from '../../../../components/ComingSoon.astro';

# Quick Start Guide

<ComingSoon type="wip" message="Quick start guide in development" />

Get started with PacketNinja and begin debugging packets in minutes.

## Basic Usage

Once installed, PacketNinja will automatically start logging packets. The output will appear in your game log or console.

## Viewing Packet Logs

<ComingSoon message="Log viewing guide coming soon" />

Packets are logged with structured formatting:

```
[C→S] ServerboundPlayerActionPacket
├─ Position: BlockPos{x=100, y=64, z=200}
├─ Direction: UP
└─ Action: START_DESTROY_BLOCK
```

## Filtering Packets

<ComingSoon type="experimental" />

You can filter packets to focus on specific types or directions.

## Common Workflows

### Debugging Plugin Interactions

1. Start your test server
2. Enable PacketNinja logging
3. Perform the action you're testing
4. Review the packet flow

### Understanding Protocol

1. Enable specific packet type filters
2. Perform game actions
3. Observe the resulting packets
4. Learn the protocol behavior

## Tips for Effective Debugging

- Focus on specific packet types to reduce noise
- Compare expected vs actual packet behavior
- Use timestamps to track packet timing
- Document interesting patterns

## Next Steps

- Learn about [Packet Logging](/packetninja/features/packet-logging/)
- Explore [Filtering Options](/packetninja/features/filtering/)
- Read the [Debugging Guide](/packetninja/guides/debugging-packets/)
