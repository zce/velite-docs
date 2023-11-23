# Introduction

:construction: this documentation is not yet complete, but the functionality is mostly stable, although there is still a possibility of significant changes being made.

However, I have provided a full features [example](https://github.com/zce/velite/tree/main/example) for your reference.

Velite is a tool for building typesafe content layers for applications, turn Markdown, YAML, JSON, or other files into app's data layer with Zod schema.

Inspired by [Contentlayer](https://contentlayer.dev), based on [Zod](https://zod.dev) and [Unified](https://unifiedjs.com), and powered by [ESBuild](https://esbuild.github.io).

<picture>
  <source srcset="/assets/flow-dark.svg" media="(prefers-color-scheme: dark)">
  <img src="/assets/flow.svg" alt="Velite Workflow" title="Velite Workflow">
</picture>

"Velite" comes from the English word "elite".

> "Velite" itself is the code name for Napoleon's elite army.

## Features

- Easy to use
- Light-weight & High efficiency & Still powerful
- Built-in Markdown, YAML, JSON support
- Built-in relative files & images processing
- Schema validation by [Zod](https://zod.dev)
- Less runtime dependencies
- Configurable & Extensible
- Use modern APIs & TypeScript friendly

## Try It Online

You can try Velite directly in your browser on [StackBlitz](https://stackblitz.com/github/zce/velite-next).

## Why not Contentlayer?

[Contentlayer](https://contentlayer.dev) is a great tool, but it is not suitable for my needs. Such as:

- built-in files & images processing
- programmability & extensibility
- schema validation and error reporting friendly
- etc.
