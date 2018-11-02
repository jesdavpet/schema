# Colophon Schema

[![License][license-image]][license-url] [![version][npm-image]][npm-url] [![Build Status][circle-image]][circle-url]

> Standarized project metadata to specify the components, constructs and authorship of software.

Allows teams to gain a better understanding of software, systems and human mappings (why, what, how, who, when, where) in an organization.

## Use cases

- A single source of truth for all non-technical data!
- Catalogue all your software projects
  - quickly scan through github repos for human readable and business driven information rather than code
  - create reports on project health and ownership
- Codify business & operational concerns that are typically undocumented
  - timelines and scheduled operations around the project _(e.g. sunset date)_
  - none technical references to the project _(e.g. kanban board, budget)_
- Use in CI/CD tooling to anotate your artefacts
- Correlation of application instances and source code:
  - Web pages can expose a `<meta>` tag that links to the project's `id`:

    ```html
    <meta name="colophon" content="acme-app-id"/>
    ```
  - APIs respond with a header `Colophon` that links to the project's `id`:

    ```http
    HTTP/1.1 200 OK
    Date: Fri, 25 May 2018 22:38:34 GMT
    Content-Type: application/json; charset=UTF-8
    Content-Encoding: UTF-8
    Colophon: acme-app-api

    ...
    ```

## Example

This project's own [`colophon.yml`](.colophon.yml):

```yaml
version: 1.1

id: colophon-schema

about:
  title: Colphon Schema
  description: Standarized project metadata to specify the components, constructs and authorship of software.

contacts:
  - type: author
    name: Ahmad Nassri 
    email: hi@ahmad.codes

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

| \#                   | status      |
| -------------------- | ----------- |
| [`1.0`](schema/1.0/) | deprecated  |
| [`1.1`](schema/1.1/) | stable      |

## JSON Schema

Available as an `npm` package for validation purposes, compatible with any [JSON Schema][] validation tool

```bash
npm install --production --save @colophon/schema
```

## Install

```bash
npm install @colophon/schema
```

## Usage

```js
const { schema, regex } = require('@colophon/schema')
```

## Credits

- Original Idea: [@crimeminister](https://github.com/crimeminister)
- Name: [@kumar](https://twitter.com/kumar)

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
