# Colophon Spec

## Data Structure & File Format

Colophon files are required to be saved in `UTF-8` encoding, other encodings are forbidden. Allowed formats are limited to [`JSON`][json] & [`YAML`][yaml].

### File Naming

Acceptable file name must match the following pattern:

```regex
^\.?colophon\.(json|ya?ml|rc){1}$
```

###### Example

- [`.colophon.json`](#json-example)
- [`.colophon.yml`](#yaml-example)

---

### `colophon.json`

```json
{
  "version": "1.0.0",
  "id": "my-awesome-app",
  "about": {},
  "contacts": {},
  "schedule": {},
  "references": {},
  "environments": {}
}
```

name             | type     | required | default | description                                            
---------------- | -------- | -------- | ------- | -------------------------------------------------------
**version**      | `String` | 🗸       | `-`     | Spec version. Format must follow [semver][]            
**id**           | `String` | ✗        | `-`     | A unique, deterministic identifier for your application
**about**        | `Object` | 🗸       | `-`     | [About Object](#about)                                 
**contacts**     | `Object` | 🗸       | `-`     | [Contacts Object](#contacts)                           
**schedule**     | `Object` | ✗        | `-`     | [Schedule Object](#schedule)                           
**environments** | `Array`  | 🗸       | `-`     | [Environments Array](#environments)                    
**references**   | `Object` | ✗        | `-`     | [References Object](#references)                       

### `about`

> defines the context of "What" this application is

```json
{
  "title": "semi",
  "description": "Extra semicolon"
}
```

name            | type     | required | default | description                                 
--------------- | -------- | -------- | ------- | --------------------------------------------
**title**       | `String` | 🗸       | `-`     | Unique title representing the application   
**description** | `String` | ✗        | `-`     | Snippet describing the application in detail

### `contact`

> defines the context of "Who" is responsible for this application

```json
{
  "humans": ["Lead Developer <ahmad@acme.com>", "Lead Designer <alex@acme.com>"],
  "teams": ["dope jackalope <dopej@acme.com>"],
  "departments": "digital office"
}
```

name            | type               | required | default | description                              
--------------- | ------------------ | -------- | ------- | -----------------------------------------
**humans**      | `Contact or Array` | ✗        | `-`     | human(s) this application belongs to     
**teams**       | `Contact or Array` | ✗        | `-`     | team(s) this application belongs to      
**departments** | `Contact or Array` | ✗        | `-`     | department(s) this application belongs to

**Note**: at least one property is required to be present.

All contact values must use one of the following formats:

#### Object Format

```json
{
  "humans": [
    { "name": "Lead Developer", "email": "ahmad@acme.com" },
    { "name": "Lead Designer", "email": "alex@acme.com>" }
  ],
  "teams": [
    { "name": "dope jackalope", "email": "dope@acme.com" }
  ],
  "departments": [
    { "name": "digital office" }
  ]
}
```

#### String Format

> String that follows the [RFC 5322, section 3.4.1][rfc5322] format:

```json
{
  "humans": ["Lead Developer <ahmad@acme.com>", "Lead Designer <alex@acme.com>"],
  "teams": ["dope jackalope <dopej@acme.com>"],
  "departments": "digital office <digital@acme.com>"
}
```

### `schedule`

> defines the context of "When" activities around this application are planned

```json
{
  "launch": "2018-05-24T03:35:40.968Z",
  "sunset": "2020-01-31T03:35:40.968Z",
  ...
}
```

name         | type        | required | default | description                                                                  
------------ | ----------- | -------- | ------- | -----------------------------------------------------------------------------
**launch**   | `date-time` | ✗        | `-`     | Launch Date, with values defined in [`date-time`][rfc3339] format            
**sunset**   | `date-time` | ✗        | `-`     | Sunset Date, with values defined in [`date-time`][rfc3339] format            
**(custom)** | `date-time` | ✗        | `-`     | any date representation, with values defined in [`date-time`][rfc3339] format

`date-time` format as defined in [RFC 3339, section 5.6][rfc3339]

### `environments`

> defines the context of "Where" this application is

```json
[
  {
    "type": "production",
    "title": "URL",
    "description": "Web Application URL",
    "uri": "https://www.acme.com"
  },
  {
    "type": "test",
    "title": "URL",
    "description": "Web Application URL",
    "uri": "http://test.acme.com"
  },
  {
    "type": "production",
    "title": "Database",
    "description": "Application Database",
    "uri": "mongodb://prod.db.acme.com:27017/acme"
  }
  ...
]
```

Each item under `environments` represents an "Environment Object", you can have as many as you want to describe your application environments:

name            | type     | required | default | description                                                  
--------------- | -------- | -------- | ------- | -------------------------------------------------------------
**type**        | `String` | ✗        | `-`     | Environment Type _(freeform identifier, useful for grouping)_
**title**       | `String` | 🗸       | `-`     | Environment Title                                            
**description** | `String` | ✗        | `-`     | Description of this Environment                              
**uri**         | `URI`    | 🗸       | `-`     | Environment URI                                              

### `references`

> defines additional context about application through external sources

```json
[
  {
    "title": "JIRA",
    "description": "application backlog & issues",
    "uri": "https://acme.atlassian.net/projects/APP/issues/"
  },
  {
    "title": "Wiki",
    "description": "application technical wiki",
    "uri": "https://github.com/acme/app/wiki"
  },
  ...
]
```

you add as many references as you want for your application:

name            | type     | required | default | description                    
--------------- | -------- | -------- | ------- | -------------------------------
**title**       | `String` | 🗸       | `-`     | Environment Title              
**description** | `String` | ✗        | `-`     | Description of this Environment
**uri**         | `URI`    | 🗸       | `-`     | Environment URI                

###### JSON Example

> ```json
> {
>   "version": "1.0.0",
>   "about": {
>     "id": "awesome-2018",
>     "title": "my-awesome-app",
>     "description": "app that makes everything awesome!"
>   },
>   "contacts": {
>     "departments": "Awesome Department <awesome@acme.com>",
>     "teams": [
>       "app development <app-dev@acme.com>",
>       "app qa <app-qa@acme.com>"
>     ],
>     "humans": [
>       "Lead Developer <ahmad@acme.com>",
>       "Lead Designer <alex@acme.com>"
>     ]
>   },
>   "schedule": {
>     "launch": "2018-05-24T03:35:40.968Z",
>     "sunset": "2020-01-31T03:35:40.968Z"
>   },
>   "environments": [
>     {
>       "type": "production",
>       "title": "URL",
>       "description": "Web Application URL",
>       "uri": "https://www.acme.com"
>     },
>     {
>       "type": "test",
>       "title": "URL",
>       "description": "Web Application URL",
>       "uri": "http://test.acme.com"
>     },
>     {
>       "type": "production",
>       "title": "Database",
>       "description": "Application Database",
>       "uri": "mongodb://prod.db.acme.com:27017/acme"
>     }
>   ],
>   "references": [
>     {
>       "title": "JIRA",
>       "description": "application backlog & issues",
>       "uri": "https://acme.atlassian.net/projects/APP/issues/"
>     },
>     {
>       "title": "Wiki",
>       "description": "application technical wiki",
>       "uri": "https://github.com/acme/app/wiki"
>     }
>   ]
> }
> ```

###### YAML Example

> ```yaml
> version: 1.0.0
> about:
>   id: awesome-2018
>   title: My Awesome App
>   description: app that makes everything awesome!
>
> contacts:
>   departments: Awesome Department <awesome@acme.com>
>   teams:
>     - app development <app-dev@acme.com>
>     - app qa <app-qa@acme.com>
>
>   humans:
>     - Lead Developer <ahmad@acme.com>
>     - Lead Designer <alex@acme.com>
>
> schedule:
>   launch: 2018-05-24T03:35:40.968Z
>   sunset: 2020-01-31T03:35:40.968Z
>
> environments:
>   - type: production
>     title: URL
>     description: Web Application URL
>     uri: https://www.acme.com
>
>   - type: test
>     title: URL
>     description: Web Application URL
>     uri: http://test.acme.com
>
>   - type: production
>     title: Database"
>     description: Application Database
>     uri: mongodb://prod.db.acme.com:27017/acme
>
> references:
>   - title: JIRA
>     description: application backlog & issues
>     uri: https://acme.atlassian.net/projects/APP/issues/
>
>   - title: Wiki
>     description: application technical wiki
>     uri: https://github.com/acme/app/wiki
> ```

[json]: https://www.json.org/

[semver]: https://semver.org

[yaml]: http://www.yaml.org/

[rfc3339]: https://tools.ietf.org/html/rfc3339#section-5.6

[rfc5322]: https://tools.ietf.org/html/rfc5322#section-3.4.1
