---
title: Documentation Style Guide
description: Guidelines for writing Orbitary documentation
---

import ComingSoon from '../../../components/ComingSoon.astro';

# Documentation Style Guide

Follow these guidelines to maintain consistency across all documentation.

## Writing Style

### Be Clear and Concise

- Use simple, direct language
- Avoid jargon when possible
- Explain technical terms when first introduced
- Keep sentences short and focused

### Write for Your Audience

Our audience is Java developers building Minecraft plugins/mods:

- Assume familiarity with Java
- Assume basic Minecraft knowledge
- Explain Bits-specific concepts clearly
- Link to external resources for prerequisites

### Use Active Voice

```markdown
<!-- Good -->
Bits provides a unified API for commands.

<!-- Avoid -->
A unified API for commands is provided by Bits.
```

## Structure

### Page Structure

Every documentation page should follow this structure:

1. **Frontmatter** - Title and description
2. **Introduction** - Brief overview (1-2 paragraphs)
3. **Main Content** - Detailed information
4. **Examples** - Practical code examples
5. **Next Steps** - Links to related pages

### Headings

- Use sentence case: "Creating commands" not "Creating Commands"
- Keep headings descriptive and scannable
- Use a clear hierarchy (H2 → H3 → H4)
- Don't skip heading levels

### Code Examples

Always include complete, working code examples:

```java
// Good - Complete and contextual
@Command(name = "heal")
@Permission("server.heal")
public class HealCommand {
    public void execute(@Sender Player player) {
        player.setHealth(player.getMaxHealth());
        player.sendMessage("&aYou have been healed!");
    }
}

// Avoid - Incomplete fragments
public void execute(@Sender Player player) {
    // ...
}
```

## Formatting

### Code Blocks

Always specify the language:

````markdown
```java
// Java code here
```

```gradle
// Gradle configuration
```

```bash
# Shell commands
```
````

### Inline Code

Use inline code for:
- Class names: `CommandSender`
- Method names: `execute()`
- Variable names: `player`
- File names: `config.yml`
- Short code snippets

### Links

- Use descriptive link text: "[Installation guide](/bits/installation/)" not "[click here](/bits/installation/)"
- Link to related pages liberally
- Use relative links for internal pages
- Include external links when referencing APIs or tools

### Lists

Use lists for scannable content:

- **Unordered lists** for non-sequential items
- **Ordered lists** for sequential steps
- **Keep items parallel** in structure and length

## Components

### Status Badges

Use the custom components to indicate feature status:

```mdx
import ComingSoon from '../../../components/ComingSoon.astro';
import ExperimentalBadge from '../../../components/ExperimentalBadge.astro';

<ComingSoon message="Full guide coming soon" />
<ComingSoon type="wip" message="Work in progress" />
<ExperimentalBadge feature="Filtering" />
```

### Platform Badges

Indicate platform support:

```mdx
import PlatformBadge from '../../../components/PlatformBadge.astro';

<PlatformBadge platforms={['paper']} />
<PlatformBadge platforms={['paper', 'velocity']} />
<PlatformBadge platforms={['all']} />
```

### Admonitions

Use Starlight's built-in admonitions:

```markdown
:::note
This is a note with useful information.
:::

:::tip
This is a helpful tip for users.
:::

:::caution
This warns about potential issues.
:::

:::danger
This warns about serious problems.
:::
```

## File Organization

### File Names

- Use kebab-case: `creating-commands.md`
- Be descriptive: `multi-platform-development.md` not `multi.md`
- Use `.md` for markdown, `.mdx` for pages with components

### Directory Structure

Organize files logically:

```
docs/
├── bits/
│   ├── getting-started/
│   ├── core/
│   ├── minecraft/
│   ├── api-reference/
│   └── guides/
└── packetninja/
    ├── getting-started/
    ├── features/
    └── guides/
```

## Grammar and Mechanics

### Capitalization

- Use sentence case for headings
- Capitalize proper nouns: Bits, PacketNinja, Paper, Velocity, Fabric
- Don't capitalize common terms: command, plugin, server

### Punctuation

- Use periods for complete sentences
- Don't use periods in headings
- Use serial commas: "Paper, Velocity, and Fabric"

### Tense

- Use present tense: "The command executes" not "The command will execute"
- Use imperative for instructions: "Create a file" not "You should create a file"

## Best Practices

### Start with Examples

Show code first, explain after:

```java
// Show this first
@Command(name = "heal")
public class HealCommand { }
```

Then explain what it does.

### Progressive Disclosure

- Start simple, add complexity gradually
- Link to advanced topics rather than explaining everything upfront
- Use "Coming Soon" badges for incomplete sections

### Keep it Updated

- Mark outdated content with warnings
- Update version numbers
- Review and refresh old pages

### Test Your Examples

- Verify all code examples work
- Test on all applicable platforms
- Include compiler/build requirements if needed

## Questions?

If you're unsure about any style guidelines, look at existing documentation or ask in a GitHub issue.
