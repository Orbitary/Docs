---
title: Best Practices
description: Recommended practices for using Bits
---

import ComingSoon from '../../../../components/ComingSoon.astro';

# Best Practices

<ComingSoon message="Best practices guide in development" />

Follow these best practices to get the most out of Bits and write maintainable, efficient code.

## Command Design

### Keep Commands Simple

Each command class should have a single responsibility:

```java
// Good
@Command(name = "heal")
public class HealCommand { }

// Avoid
@Command(name = "admin")
public class AdminCommand { 
    // Handles heal, fly, gamemode, etc.
}
```

### Use Descriptive Names

Choose clear, descriptive names for commands and parameters.

## Code Organization

### Structure Your Project

```
src/
├── commands/
│   ├── admin/
│   ├── player/
│   └── utility/
├── listeners/
└── util/
```

### Dependency Injection

<ComingSoon type="wip" />

Use dependency injection for better testability and modularity.

## Performance

### Avoid Synchronous I/O

Always use async operations for I/O:

```java
CompletableFuture.runAsync(() -> {
    // Database or file operations
});
```

## More Coming Soon

- Error handling strategies
- Testing approaches
- Documentation practices
- Common patterns
