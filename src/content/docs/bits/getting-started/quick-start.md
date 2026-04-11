---
title: Quick Start
description: Build your first multi-platform plugin with Bits
---

import ComingSoon from '../../../../components/ComingSoon.astro';
import PlatformBadge from '../../../../components/PlatformBadge.astro';

# Quick Start Guide

<PlatformBadge platforms={['all']} />

Get up and running with Bits in just a few minutes. This guide will walk you through creating a simple "Hello World" plugin that works across all supported platforms.

## Prerequisites

Before you begin, make sure you have:

- Java 17 or higher
- Gradle or Maven
- A basic understanding of Minecraft plugin development

## Step 1: Add Bits to Your Project

First, add Bits as a dependency to your project. See the [Installation guide](/bits/getting-started/installation/) for detailed instructions.

## Step 2: Create Your First Command

<ComingSoon message="Detailed tutorial coming soon" />

Create a simple command class:

```java
package com.example.plugin;

import xyz.bitsquidd.bits.api.command.annotation.Command;
import xyz.bitsquidd.bits.api.command.annotation.Permission;

@Command(name = "hello")
@Permission("example.hello")
public class HelloCommand {
    
    public void execute(@Sender CommandSender sender) {
        sender.sendMessage("Hello from Bits!");
    }
}
```

## Step 3: Register Your Command

<ComingSoon type="wip" message="Registration details being finalized" />

Details on command registration will be added here.

## Step 4: Test Your Plugin

Build and test your plugin on your chosen platform!

## Next Steps

- Learn about [Core Concepts](/bits/getting-started/core-concepts/)
- Explore the [Commands Framework](/bits/minecraft/commands/)
- Check out [Best Practices](/bits/guides/best-practices/)
