# eslint-plugin-neverblued

Sophisticated code formatting [ESLint](http://eslint.org) plugin.

## Installation

Install the plugin and the core as development dependencies,
for example with [npm](https://www.npmjs.com/),
assuming the terminal location at the project folder:

```
$ npm i eslint eslint-plugin-neverblued --save-dev
```

## Usage

Extend your project ESLint configuration (e.g. `.eslintrc.json`)
with the plugin's ```recommended``` pack:

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:neverblued/recommended"
    ]
}
```

## Supported Rules

* Space outside parentheses and brackets (space-outside)

This original rule makes JS code look more like a human text.
It provides a consistent space outside parentheses and brackets,
namely the outermost in a group
and except when the next token is a coma or a semicolon.

## License

This piece of software is provided with a ISC license.
