# Colophon Schema

[![License][license-image]][license-url] [![version][npm-image]][npm-url] [![Build Status][circle-image]][circle-url]

> Schema & Validator for [Colophon][colophon-id]

## Schema Specification

### Versions

| \#                   | status        |
| -------------------- | ------------- |
| [`2.0`](schema/2.0/) | **stable**    |
|                      |               |
| [`1.1`](schema/1.1/) | _deprecated_  |
| [`1.0`](schema/1.0/) | _deprecated_  |

> _see an example of this repo's own [`.colophon.yml`](./.colophon.yml)..._

## Install

Available as an `npm` package for validation purposes, exposes validation helper, and the schema itself _(compatible with any [JSON Schema][] validation tool)_

```bash
npm install @colophon/schema
```

## Usage

```js
const parser = require('@colophon/schema')
const { schema, regex } = require('@colophon/schema/versions/latest')
```

### Referencing older versions

```js
const schemas = require('@colophon/schema/versions')

const { schema, regex } = schemas['1.0']
```

## API

### _`parser(colophon: String | Object): Promise<Object>`_

> Resolves with `content` as a valid JavaScript Colophon Object
> Rejects with [`ColophonError`](./error.js) on invalid schema test

###### Example: Valid Colophon

```js
const parser = require('@colophon/schema')

const valid = { ... } // supply an Object or YAML String

const colophon = await parser(valid)
// colophon is a JavaScript Object (parsed from YAML string, or returned as is)
```

###### Example: Invalid Colophon

```js
const parser = require('@colophon/schema')

// invalid
const invalid = `
version: 2.0

id: my-app
`

parser(invalid)
  .then(colophon)
  .catch(err => console.error(err.message, err.errors))
    // invalid colophon content
    // "err.errors" object contains schema errors
    // e.g. "err.errors": [ { message: "should have required property 'contacts'" } ]
    // see https://github.com/epoberezkin/ajv#validation-errors for details
}
```

## Credits

- Original Idea: _[@crimeminister](https://github.com/crimeminister)_
- Name: _[@andrewkumar](https://github.com/andrewkumar)_

---
> Author: [Ahmad Nassri](https://www.ahmadnassri.com) &bull; 
> Github: [@project-colophon](https://github.com/project-colophon) &bull; 
> Twitter: [@ColophonID](https://twitter.com/ColophonID)

[license-url]: LICENSE
[license-image]: https://img.shields.io/github/license/project-colophon/schema.svg?style=for-the-badge&logo=circleci

[circle-url]: https://circleci.com/gh/project-colophon/schema
[circle-image]: https://img.shields.io/circleci/project/github/project-colophon/schema/master.svg?style=for-the-badge&logo=circleci

[npm-url]: https://www.npmjs.com/package/@colophon/schema
[npm-image]: https://img.shields.io/npm/v/@colophon/schema.svg?style=for-the-badge&logo=npm

[json schema]: http://json-schema.org
[colophon-id]: https://colophon.id
