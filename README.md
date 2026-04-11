# Orbitary Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentation for all projects under the Orbitary organization, including Bits and PacketNinja.

## Projects

- **[Bits](https://github.com/Orbitary/Bits)** - 💾 Multi-platform Minecraft utility library for Paper, Velocity, and Fabric
- **[PacketNinja](https://github.com/Orbitary/PacketNinja)** - 🥷 Packet interception and logging mod for Minecraft development

## Getting Started

These instructions will help you get the documentation site running on your local machine for development purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) 22 or higher
- [pnpm](https://pnpm.io/installation)

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/ImBit/Bits-wiki.git
cd Bits-wiki
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

The site will be available at `http://localhost:4321`. Most changes will be reflected live without needing to restart the server.

### Building

To build the site for production:

```bash
pnpm run build
```

This will generate static files in the `dist/` directory ready to be deployed.

### Preview Production Build

To preview the production build locally:

```bash
pnpm run preview
```

## Project Structure

```
.
├── public/             # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Custom Astro components
│   │   ├── ApiCard.astro
│   │   ├── ComingSoon.astro
│   │   ├── ExperimentalBadge.astro
│   │   ├── Footer.astro
│   │   └── PlatformBadge.astro
│   ├── content/
│   │   └── docs/       # Documentation pages (Markdown/MDX)
│   └── content.config.ts
├── astro.config.mjs    # Astro & Starlight configuration
├── package.json
└── tsconfig.json
```

## Contributing

We welcome contributions! Here's how you can help:

1. **Fix typos or improve clarity** - Small improvements matter
2. **Add missing documentation** - Help document features
3. **Create examples** - Show practical use cases
4. **Report issues** - Found something wrong? Let us know

### Contributing Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Test your changes locally before submitting
- Follow the existing documentation structure
- Add badges for platform support and feature status

## Available Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`          | Build your production site to `./dist/`          |
| `pnpm run preview`        | Preview your build locally, before deploying     |
| `pnpm run astro ...`      | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help`| Get help using the Astro CLI                     |

## Custom Components

This documentation includes custom reusable components:

- **ComingSoon** - Display status badges for features (Coming Soon, WIP, Experimental, Deprecated)
- **ExperimentalBadge** - Highlight experimental features
- **PlatformBadge** - Show platform support (Paper, Velocity, Fabric)
- **ApiCard** - Create styled cards for API documentation
- **Footer** - Custom footer with copyright and links

## Technology Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Starlight](https://starlight.astro.build/)** - Documentation theme
- **[MDX](https://mdxjs.com/)** - Markdown with components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

## License

Documentation content is licensed under CC-BY-SA-4.0.

## Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

---

Made with 🦑 by [Orbitary](https://github.com/Orbitary)
