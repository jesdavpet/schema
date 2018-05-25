# Colophon [![version][npm-version]][npm-url] [![License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

> Standarized project metadata to specify the components, constructs and authorship of software.

Allows teams to gain a better understanding of software, systems and human mappings (why, what, how, who, when, where) in an organization.

## Use cases

- Codify business & operational concerns that are typically undocumented 
- Catalogue all your software projects
- Create reports on software health and ownership
- Use in CI/CD tooling to anotate your artefacts
- A single source of truth!

## Example

This project's own [`colophon.yml`](.colophon.yml):

```yaml
version: 1.0.0

about:
  id: colophon-schema
  title: Colphon Schema
  description: Standarized project metadata to specify the components, constructs and authorship of software.

contacts:
  humans: Ahmad Nassri <hi@ahmad.codes>

schedule:
  launch: 2018-05-24T05:00:00.000Z

environments:
  - type: git
    title: Source Code
    uri: https://github.com/ahmadnassri/colophon

references:
  - title: Documentation
    uri: https://github.com/ahmadnassri/colophon
```

## Specification

### Versions

\#                     | status     
---------------------- | -----------
[`1.0.0`](spec/1.0.0/) | development

## JSON Schema

Available as an `npm` package for validation purposes, compatible with any [JSON Schema][] validation tool

```bash
npm install --production --save @colophon/schema
```

## API

```js
const { schema, regex } = require('@colophon/schema')
```

## Credits

- Original Idea: [@crimeminister](https://github.com/crimeminister)
- Name: [@kumar](https://twitter.com/kumar)

---

> License: [ISC][license-url] • 
> Copyright: [ahmadnassri.com](https://www.ahmadnassri.com) • 
> Github: [@AhmadNassri](https://github.com/ahmadnassri) • 
> Twitter: [@AhmadNassri](https://twitter.com/ahmadnassri)

[json schema]: http://json-schema.org

[license-image]: https://img.shields.io/github/license/ahmadnassri/colophon.svg?style=flat-square

[license-url]: http://choosealicense.com/licenses/isc/

[npm-url]: https://www.npmjs.com/package/@colophon/schema

[npm-version]: https://img.shields.io/npm/v/@colophon/schema.svg?style=flat-square

[travis-image]: https://img.shields.io/travis/ahmadnassri/colophon.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/colophon
