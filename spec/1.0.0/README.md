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
  "about": {},
  "owners": {},
  "contacts": {},
  "schedule": {},
  "references": {},
  "environments": {}
}
```

name               | type     | required | default | description                                
------------------ | -------- | -------- | ------- | -------------------------------------------
**version**        | `String` | 🗸        | `-`     | Spec version. Format must follow [semver][]
**about**          | `Object` | 🗸        | `-`     | [About Object](#about)            
**owners**         | `Object` | 🗸        | `-`     | [Owners Object](#owners)            
**contacts**       | `Object` | ✗        | `-`     | [Contacts Object](#contacts)            
**schedule**       | `Object` | ✗        | `-`     | [Schedule Object](#schedule)            
**references**     | `Object` | ✗        | `-`     | [References Object](#references)            
**environments**   | `Object` | ✗        | `-`     | [Environments Object](#environments)            

### `about`

```json
{
  "id": "123456",
  "title": "semi",
  "description": "Extra semicolon"
}
```

name            | type     | required | default | description                                                                                                
--------------- | -------- | -------- | ------- | -------------------------------------------------------
**id**          | `String` | ✗        | `-`     | A unique, deterministic identifier for your application 
**title**       | `String` | 🗸        | `-`     | Unique title representing the application                                                 
**description** | `String` | ✗        | `-`     | Snippet describing the application in detail                                         

### `contact`

```json
{
  "departments": "digital",
  "teams": {},
  "humans": {}
}
```

name            | type           | required | default | description                                                         
--------------- | -------------- | -------- | ------- | ----------------------------------
**departments** | `String or Array` | ✗        | `-`     | individual or array of departments                                    
**teams**       | `String or Array` | ✗        | `-`     | individual or array of teams
**humans**      | `String or Array` | ✗        | `-`     | individual or array of humans  

All owner values can either be strings or array of strings that follow the [RFC 6854](https://tools.ietf.org/html/rfc6854) `Sender:` format, e.g.

Individual: `Ahmad Nassri <ahmad@acme.com>` or Teams `Website Team <contact@acme.com>`

###### JSON Example

> ```json
> {
>   "version": "1.0.0",
>   "about": {
>     "id": "awesome-2018",
>     "title": "my-awesome-app",
>     "description": "app that makes everything awesome!"
>   },
>   "owners": {
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
>   "contacts": {},
>   "schedule": {},
>   "references": {},
>   "environments": {}
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
> owners:
>   departments: Awesome Department <awesome@acme.com>
>   teams:
>     - app development <app-dev@acme.com>
>     - app qa <app-qa@acme.com>
>
>   humans:
>     - Lead Developer <ahmad@acme.com>
>     - Lead Designer <alex@acme.com>
>
> ```

[json]: https://www.json.org/

[semver]: https://semver.org

[yaml]: http://www.yaml.org/
