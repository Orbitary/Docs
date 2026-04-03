---
title: Minecraft
description: Platform-agnostic Minecraft abstractions provided by Bits.
sidebar:
  order: 1
---

The `minecraft/` layer covers APIs that are shared across all Minecraft platforms — Paper, Velocity, and Fabric.
These live in the `:API` module and are available regardless of which platform artifact you depend on.

| Feature | Pages |
|---|---|
| Annotation-based command framework | [Commands](/bits/minecraft/commands) |
| Text & formatting utilities | [Text](/bits/minecraft/text) |

Platform-specific extensions — such as task scheduling, item utilities, or the concrete `BitsConfig` implementation — live in the platform sub-sections below.

- [Paper](/bits/minecraft/paper)
- [Velocity](/bits/minecraft/velocity)
- [Fabric](/bits/minecraft/fabric)