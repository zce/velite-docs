# Introduction

::: warning
🚧 🚧 🚧 this documentation is not yet complete currently. but the functionality is mostly stable, although there is still a possibility of significant changes being made.

However, I have provided some [examples](https://github.com/zce/velite/tree/main/examples) for your consideration.
:::

## What is Velite?

Velite is a tool for building type-safe content layers for applications, turn Markdown, YAML, JSON, or other files into app's data layer with Zod schema.

Inspired by [Contentlayer](https://contentlayer.dev), based on [Zod](https://zod.dev) and [Unified](https://unifiedjs.com), and powered by [ESBuild](https://esbuild.github.io).

<picture>
  <source srcset="/assets/flow-dark.svg" media="(prefers-color-scheme: dark)">
  <img src="/assets/flow.svg" alt="Velite Workflow" title="Velite Workflow">
</picture>

### Naming Origin

"Velite" comes from the English word "elite".

> "Velite" itself is the code name for Napoleon's elite army.

## Key Features

- **Easy to use**: Move your contents into `content` folder, define collections config, run `velite` command, and get the data layer.
- **Type-safe**: Contents schema validation by [Zod](https://zod.dev), and type inference for TypeScript.
- **Framework Agnostic**: JSON & Entry & DTS output, out of the box support for React, Vue, Svelte, Solid, etc.
- **Light-weight**: Choose more native APIs instead of bloated NPM modules, less runtime dependencies, so it is fast and efficiently.
- **Still powerful**: Built-in Markdown, YAML, JSON support, relative files & images processing, schema validation, etc.
- **Configurable**: Both input and output directories can be customized, and support for custom loaders, hooks, etc.
- **Extensible**: Support any file types by custom loaders, Custom field validation and transform by custom schema, and any output formats by hooks

Check out our detailed [Why Velite](#why-velite) to learn more about what makes Velite special. ✨

## Try Velite Online

You can try Velite directly in your browser on [StackBlitz](https://stackblitz.com/velite-next).

## Why not Contentlayer?

[Contentlayer](https://contentlayer.dev) is a great tool, but it is not suitable for my needs. Such as:

- built-in files & images processing
- programmability & extensibility
- schema validation and error reporting friendly
- etc.

## Why Velite?
