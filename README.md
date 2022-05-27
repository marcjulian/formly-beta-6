```bash
npm i

ng s
```

Results in following error:

```
ng s
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.97 MB | 
polyfills.js          | polyfills     | 294.80 kB | 
styles.css, styles.js | styles        | 251.85 kB | 
main.js               | main          |  10.49 kB | 
runtime.js            | runtime       |   6.52 kB | 

                      | Initial Total |   3.52 MB

Build at: 2022-05-27T12:37:37.820Z - Hash: 72edc508cc6b48bf - Time: 3495ms

Error: node_modules/@ngx-formly/core/lib/services/formly.config.d.ts:37:52 - error TS2339: Property '0' does not exist on type '(string | Type<FieldWrapper<FormlyFieldConfig<FormlyFieldProps & { [additionalProperties: string]: any; }>>>)[] | undefined'.

37     getWrapper(name: FormlyFieldConfig['wrappers'][0]): WrapperOption;
                                                      ~




** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✖ Failed to compile.
```