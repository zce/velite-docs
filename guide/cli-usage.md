# CLI Usage

::: code-group

```sh [npm]
$ npx velite --config velite.config.js --clean --watch --verbose --debug
```

```sh [pnpm]
$ pnpm velite --config velite.config.js --clean --watch --verbose --debug
```

```sh [yarn]
$ yarn velite --config velite.config.js --clean --watch --verbose --debug
```

```sh [bun]
$ bun velite --config velite.config.js --clean --watch --verbose --debug
```

:::

## Options

### `-c, --config <path>`

Use specified config file

### `--clean`

Clean output directory before build

### `--watch`

Watch for changes and rebuild

### `--verbose`

Print additional information

### `--debug`

Print debug information

### `-v, --version`

Display version number

### `-h, --help`

Display CLI help message

## CLI Help

```sh
$ npx velite --help
velite/0.1.0

Usage:
  $ velite

Commands:
    Build contents for production

Options:
  -c, --config <path>  Use specified config file
  --clean              Clean output directory before build
  --watch              Watch for changes and rebuild
  --verbose            Print additional information
  --debug              Print debug information
  -v, --version        Display version number
  -h, --help           Display this message
```
