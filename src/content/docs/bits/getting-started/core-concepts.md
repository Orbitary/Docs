---
title: Core Concepts
description: Understanding the architecture and design principles of Bits
---

import ComingSoon from '../../../../components/ComingSoon.astro';

# Core Concepts

<ComingSoon message="Comprehensive architecture guide in development" />

Understanding these core concepts will help you make the most of Bits and write better multi-platform code.

## Architecture Overview

Bits is built with a layered architecture:

1. **API Layer** - Platform-agnostic interfaces and contracts
2. **Implementation Layer** - Platform-specific implementations
3. **Utility Layer** - Common helpers and tools

## Design Principles

### Platform Abstraction

Bits abstracts platform differences, allowing you to write code once and deploy everywhere. The API layer defines common interfaces that work across all platforms.

### Convention over Configuration

Bits favors sensible defaults and annotation-driven development. Less boilerplate means more time building features.

### Type Safety

Strong typing and compile-time validation help catch errors early and provide better IDE support.

## Key Components

### Command System

<ComingSoon type="wip" />

The command system uses annotations to define commands that compile to efficient Brigadier commands.

### Text System

<ComingSoon type="wip" />

Automatic text formatting with support for multiple formats and color systems.

### Platform Bridge

<ComingSoon type="wip" />

The bridge layer handles platform-specific implementations transparently.

## Next Steps

- Explore the [API Reference](/bits/api-reference/annotations/)
- Learn about [Multi-Platform Development](/bits/guides/multi-platform/)
- Review [Best Practices](/bits/guides/best-practices/)
