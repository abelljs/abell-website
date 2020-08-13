# Abell API Reference

This section is a Reference point for all variables that Abell object provides. This includes guide on how to read content data, and get meta data of blogs.


All `.abell` pages have an access to `Abell` object. They can be accessed with `Abell.<method>`. 

For Example, the `$root` variable can be accessed from abell pages with 

```abell
<html>
  <body>
    \{{ Abell.$root }}
  </body>
</html>
```

To know what all is there in your `Abell` variable, you can also console log the variable with `\{{ console.log(Abell) }}` This will print all the values in your terminal.


*Note that `Abell` object is not accessible from Abell Components. if you want to use it inside component, you have to pass it on as a prop. Check out [Passing values to Component Guide](#passing-values-to-component)*

---
## Table of Content
- [Abell.$root `<string>`](api-reference)
- Abell.$path `<string>`
- Abell.globalMeta `<any>`
- Abell.importContent `{Function (pathToMarkdown<string>): htmlString<string>}`
- Abell.meta `<MetaInfo>` (Only defined in `theme/[path]/*.abell`)
  - Abell.meta.$root `<string>`
  - Abell.meta.$path `<string>`
  - Abell.meta.$createdAt `<Date>`
  - Abell.meta.$modifiedAt `<Date>`
- Abell.contentArray `<MetaInfo[]>`
- Abell.contentObj `{Object.<string, MetaInfo>}`
---

## Abell.$root

`Abell.$root` variable is there to make sure the path is relative to root of the website. 

So In build, if output path is `foo/bar/index.html`, `Abell.$root` will be `../..`. For `foo/index.html`, It will be `..`.


### UseCases

It is a good practice to use it when you are sourcing links in images, stylesheets, or scripts.

- `<img src="\{{ Abell.$root }}/images/doggo.gif"/>`
- `<link rel="stylesheet" href="\{{ Abell.$root }}/styles/index.css" />`
- `<script src="\{{ Abell.$root }}/js/main.js"></script>`

## Abell.$path

`Abell.$path` has value to the current path. This is specially helpful in `theme/[path]/index.abell`. Since from template we can't tell what `[path]` is going to be, we can use `{{ Abell.$path }}` instead to know it's output path.

If you have `hello-world` blog in content (`content/hello-world/index.md`), and `theme/[path]/example.abell`, then `Abell.$path` will have value `hello-world/example.html`. 


## Abell.globalMeta

This is one of the most used Abell property. Abell lets us define a global object in `abell.config.js` file which can be accessed with `Abell.globalMeta`. We can use this to define title, author, and other global properties for our website.

if we have these properties defined in `abell.config.js`,
```
// abell.config.js
module.exports = {
  globalMeta: {
    foo: 'bar',
    siteTitle: 'Abell Docs'
  }
}
```

we can access them in `theme/index.abell` (and other Abell pages) with `\{{ Abell.globalMeta.siteTitle }}`

Use Case:
`theme/index.abell`
```
\{{
  const { globalMeta } = Abell;
}}

<html>
  <head>
    <title>\{{ globalMeta.siteTitle }}</title>
  </head>
  <body>
    \{{ globalMeta.foo }}
  </body>
</html>
```
Outputs:
```html
<html>
  <head>
    <title>Abell Docs</title>
  </head>
  <body>
    bar
  </body>
</html>
```