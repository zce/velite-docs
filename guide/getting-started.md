# Getting Started


## Installation

### Prerequisites

- [Node.js](https://nodejs.org) version 18 or higher.

VitePress can be used on its own, or be installed into an existing project. In both cases, you can install it with:

::: code-group

```sh [npm]
$ npm install velite -D
```

```sh [pnpm]
$ pnpm add velite -D
```

```sh [yarn]
$ yarn add velite -D
```

```sh [bun]
$ bun add velite -D
```

:::

::: details Getting missing peer deps warnings?
If using PNPM, you will notice a missing peer warning for `@docsearch/js`. This does not prevent VitePress from working. If you wish to suppress this warning, add the following to your `package.json`:
## Quick Start

Create a `velite.config.js` file in the root directory of your project:

```typescript
import { defineConfig, s } from 'velite'

export default defineConfig({
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.md',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('post'),
          date: s.isodate(),
          cover: s.image().optional(),
          metadata: s.metadata(),
          summary: s.summary(),
          excerpt: s.excerpt(),
          content: s.markdown()
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` }))
    },
    others: {
      // ...
    }
  }
})
```

> Config file supports TypeScript, so you can use the full power of TypeScript to write your config file.

Add your creative content to the `content` directory, like this:

```diff
 root
+├── content
+│   ├── posts
+│   │   ├── hello-world.md
+│   │   └── hello-world-2.md
+│   └── others
 ├── public
 ├── package.json
+└── velite.config.js
```

Run the following command:

```shell
$ npx velite
```

Then you will get the following output:

```diff
 root
+├── .velite
+│   ├── posts.json
+│   └── others.json
 ├── content
 │   ├── posts
 │   │   ├── hello-world.md
 │   │   └── hello-world-2.md
 │   └── others
 ├── public
+│   └── static
+│       └── xxx.jpg # from content reference
 ├── package.json
 └── velite.config.js
```
