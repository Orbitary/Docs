---
title: Installation
description: How to add Bits to your Gradle or Maven project.
sidebar:
  order: 1
---

## Gradle (Kotlin DSL)
```kotlin
repositories {
    mavenCentral()
    maven { url = uri("https://repo.bitsquidd.xyz/repository/bit/") }
}

dependencies {
    // Core API (required)
    implementation("xyz.bitsquidd:api:0.0.11")

    // Platform implementation (optional)
    implementation("xyz.bitsquidd:paper:0.0.11")
    implementation("xyz.bitsquidd:velocity:0.0.11")
    implementation("xyz.bitsquidd:fabric:0.0.11")
}
```

## Maven
```xml
<repositories>
    <repository>
        <id>repo.bitsquidd.xyz</id>
        <url>https://repo.bitsquidd.xyz/repository/bit/</url>
    </repository>
</repositories>

<dependencies>
<!-- Core API (required) -->
<dependency>
    <groupId>xyz.bitsquidd</groupId>
    <artifactId>api</artifactId>
    <version>0.0.11</version>
</dependency>

<!-- Platform implementation (optional) -->
<dependency>
    <groupId>xyz.bitsquidd</groupId>
    <artifactId>paper/velocity/fabric</artifactId>
    <version>0.0.11</version>
</dependency>
</dependencies>
```


## Compiler flag
The command framework uses reflection to read method parameter names at runtime.
You may want to consider passing `-parameters` to `javac`, otherwise argument names will not be available automatically.
```kotlin
// build.gradle.kts
tasks.withType<JavaCompile> {
    options.compilerArgs.add("-parameters")
}
```

## Which module do I need?
| You are building...                             | Depend on   |
|-------------------------------------------------|-------------|
| A Paper plugin                                  | `:Paper`    |
| A Velocity plugin                               | `:Velocity` |
| A Fabric mod                                    | `:Fabric`   |
| A platform-agnostic library that others consume | `:API`      |
