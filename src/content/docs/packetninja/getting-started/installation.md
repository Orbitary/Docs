---
title: Installation
description: Install PacketNinja in your development environment
---

import ComingSoon from '../../../../components/ComingSoon.astro';

# Installing PacketNinja

<ComingSoon type="wip" message="Installation guide being finalized" />

PacketNinja is a Fabric mod designed for development environments. Follow these steps to install it.

## Prerequisites

- Minecraft (compatible version)
- Fabric Loader
- Fabric API

## Installation Steps

1. **Download PacketNinja**
   
   Download the latest release from [GitHub Releases](https://github.com/Orbitary/PacketNinja/releases)

2. **Install Fabric Loader**
   
   If you haven't already, install [Fabric Loader](https://fabricmc.net/use/) for your Minecraft version.

3. **Install Fabric API**
   
   Download and install [Fabric API](https://modrinth.com/mod/fabric-api) as a dependency.

4. **Add PacketNinja**
   
   Place the PacketNinja jar file in your `.minecraft/mods/` folder.

5. **Launch Minecraft**
   
   Launch Minecraft with the Fabric profile.

## Development Setup

### As a Dependency

If you're developing a mod and want to use PacketNinja:

```kotlin
repositories {
    maven { url = "https://maven.your-repo.com/" }
}

dependencies {
    modImplementation "com.orbitary:packetninja:VERSION"
}
```

<ComingSoon type="wip" message="Repository URL and versioning details coming soon" />

## Configuration

<ComingSoon message="Configuration guide in development" />

PacketNinja configuration will be available through a config file or in-game menu.

## Verification

After installation, you should see PacketNinja in your mods list and packet logging will begin automatically.

## Troubleshooting

<ComingSoon type="wip" />

Common issues and solutions will be documented here.

## Next Steps

- [Quick Start Guide](/packetninja/getting-started/quick-start/)
- [Packet Logging Features](/packetninja/features/packet-logging/)
