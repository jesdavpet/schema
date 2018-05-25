# Colophon [![version][npm-version]][npm-url] [![License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

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
version: 1.0.0

id: colophon-schema

about:
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
