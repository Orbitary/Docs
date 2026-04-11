---
title: Contributing
description: How to contribute to Orbitary documentation
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Contributing to Orbitary Documentation

We welcome contributions to improve the documentation! Whether you're fixing a typo, adding examples, or writing entirely new pages, your help is appreciated.

## Ways to Contribute

<CardGrid>
  <Card title="Fix Typos" icon="pencil">
    Found a typo or grammatical error? Submit a quick fix!
  </Card>
  
  <Card title="Improve Clarity" icon="open-book">
    Make explanations clearer or add missing context.
  </Card>
  
  <Card title="Add Examples" icon="rocket">
    Practical examples help everyone learn faster.
  </Card>
  
  <Card title="Write New Content" icon="document">
    Help document undocumented features or create tutorials.
  </Card>
</CardGrid>

## Getting Started

1. **Fork the Repository**
   
   Fork [Bits-wiki](https://github.com/ImBit/Bits-wiki) on GitHub.

2. **Clone Your Fork**
   
   ```bash
   git clone https://github.com/YOUR-USERNAME/Bits-wiki.git
   cd Bits-wiki
   ```

3. **Install Dependencies**
   
   ```bash
   pnpm install
   ```

4. **Create a Branch**
   
   ```bash
   git checkout -b fix/typo-in-commands-page
   # or
   git checkout -b docs/add-event-examples
   ```

5. **Make Your Changes**
   
   Edit the documentation files in `src/content/docs/`.

6. **Test Locally**
   
   ```bash
   pnpm run dev
   ```
   
   Visit `http://localhost:4321` to preview your changes.

7. **Commit and Push**
   
   ```bash
   git add .
   git commit -m "Fix typo in commands documentation"
   git push origin your-branch-name
   ```

8. **Open a Pull Request**
   
   Go to GitHub and open a pull request from your branch.

## What to Contribute

### High Priority

- Complete "Coming Soon" sections
- Add code examples to existing pages
- Document undocumented features
- Create beginner-friendly tutorials

### Always Welcome

- Fixing typos and grammar
- Improving code examples
- Adding platform-specific notes
- Creating diagrams or visual aids

## Style Guide

See the [Style Guide](/contributing/style-guide/) for detailed writing guidelines.

## Review Process

1. A maintainer will review your pull request
2. They may request changes or ask questions
3. Once approved, your PR will be merged
4. Your contribution will be deployed automatically

## Questions?

If you have questions about contributing:

- Open an issue on GitHub
- Ask in discussions
- Review existing documentation

## Recognition

All contributors are recognized in the project. Thank you for helping make Orbitary documentation better!
