---
title: Installation
description: How to add Bits to your Gradle or Maven project.
sidebar:
  order: 1
---

Bits is distributed via [JitPack](https://jitpack.io/#ImBit/Bits).
You only need to depend on the module for your target platform — each platform artifact already bundles the core API via shadow.

## Gradle (Kotlin DSL)
```kotlin
repositories {
    mavenCentral()
    maven { url = uri("https://jitpack.io") }
}

dependencies {
    // Pick the module(s) for your platform:
    implementation("com.github.ImBit.Bits:Paper:0.0.8")
    implementation("com.github.ImBit.Bits:Velocity:0.0.8")

    // Only needed if you are working directly against the
    // platform-agnostic API without a platform implementation:
    implementation("com.github.ImBit.Bits:API:0.0.8")
}
```

## Gradle (Groovy DSL)
```groovy
repositories {
    mavenCentral()
    maven { url 'https://jitpack.io' }
}

dependencies {
    implementation 'com.github.ImBit.Bits:Paper:0.0.8'
}
```

## Maven
```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.github.ImBit.Bits</groupId>
        <artifactId>Paper</artifactId>
        <version>0.0.8</version>
    </dependency>
</dependencies>
```

## Compiler flag

The command framework uses reflection to read method parameter names at runtime.
You must pass `-parameters` to `javac`, otherwise argument names will not be available and commands will fail to register.
```kotlin
// build.gradle.kts
tasks.withType<JavaCompile> {
    options.compilerArgs.add("-parameters")
}
```

## Which module do I need?

| You are building… | Depend on |
|---|---|
| A Paper plugin | `:Paper` |
| A Velocity plugin | `:Velocity` |
| A Fabric mod | `:Fabric` |
| A platform-agnostic library that others consume | `:API` |

You do not need to depend on `:API` separately when using a platform module — it is already shadowed in.