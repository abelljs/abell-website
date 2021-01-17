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
- [Abell.$root `<string>`](#abellroot-ltstringgt)
- [Abell.$path `<string>`](#abellpath-ltstringgt)
- [Abell.globalMeta `<any>`](#abellglobalmeta-ltanygt)
- [Abell.importContent `<function(pathToMarkdown<string>): htmlString<string>>`](#abellimportcontent-ltfunctiongt)
- [Abell.meta `<MetaInfo>`](#abellmeta-ltmetainfogt) (Only defined in `theme/[path]/*.abell`)
  - [User Defined Meta](#user-defined-meta-properties)
  - [Abell.meta.$root `<string>`](#abellmetaroot-ltstringgt)
  - [Abell.meta.$path `<string>`](#abellmetapath-ltstringgt)
  - [Abell.meta.$createdAt `<Date>`](#abellmetacreatedat-ltdategt)
  - [Abell.meta.$modifiedAt `<Date>`](#abellmetamodifiedat-ltdategt)
- [Abell.contentArray `<MetaInfo[]>`](#abellcontentarray-ltmetainfo9193gt)
- [Abell.contentObj `{Object.<string, MetaInfo>}`](#abellcontentobj-objectltstring-metainfogt)
- [Abell.programInfo `{Object}`](#abellprograminfo-ltobjectgt)

---

## Abell.$root &lt;string&gt;

`Abell.$root` variable is there to make sure the path is relative to root of the website. 

So In build, if output path is `foo/bar/index.html`, `Abell.$root` will be `../..`. For `foo/index.html`, It will be `..`.


### UseCases

It is a good practice to use it when you are sourcing links in images, stylesheets, or scripts.

- `<img src="\{{ Abell.$root }}/images/doggo.gif"/>`
- `<link rel="stylesheet" href="\{{ Abell.$root }}/styles/index.css" />`
- `<script src="\{{ Abell.$root }}/js/main.js"></script>`

## Abell.$path &lt;string&gt;

`Abell.$path` has value to the current path.

In `theme/foobar/example.abell`, `Abell.$path` will have value `foobar/example.html`.

In `theme/[path]/index.abell`, `Abell.$path` is equal to the `Abell.meta.$path` which we will see in [Abell.meta.$path section](#abellmetapath-ltstringgt)

## Abell.globalMeta &lt;any&gt;

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

## Abell.importContent &lt;function&gt;

This function, on giving path to markdown file relative to `content` directory, returns the content in HTML format.

**Usage:** 
```ts
Abell.importContent(pathToMD:string): string
```

pathToMD should be path to markdown file relative to your `content` directory. For Example, if we want to read `content/home/about.md`, we will add
```abell
\{{ Abell.importContent('home/about.md') }}`
```


You would see this being used in starter templates in `theme/[path]/index.abell` file to dynamically read content of the blog with 

```abell
\{{
  const { importContent } = Abell;
}}
<html>
  <body>
    <main>
    \{{ importContent(`${meta.$path}/index.md`) }}
    </main>
  </body>
</html>
```

For now, you only have to know that `Abell.meta.$path` variable changes for each iteration and has value of the path of the content.

E.g. In content, if we have, `content/hello-world/index.md`, `content/foobar.index.md`, `meta.$path` will have value `hello-world` in one iteration and `foobar` in other iteration.

We will learn more about `Abell.meta.$path` properties in [Abell.meta.$path Section](#abellmetapath-`<string>`) 


## Abell.meta &lt;MetaInfo&gt;

**important!** This property is only defined in abell pages that are defined inside `[path]` directory. (E.g. `theme/[path]/index.abell`, `theme/[path]/example.abell`, etc.)

This property has different values in each iteration of `[path]`. 

### User Defined Meta Properties

We can add values to `Abell.meta` by defining them in `content/<blog-name>/meta.json`.

*Example*

Say we have `content/hello-world/meta.json` with value
```json
{
  // other properties ...
  "foo": "bar"
}
```

We can access this value from `theme/[path]/index.abell` with,

```abell
\{{ Abell.meta.foo }} <!-- Outputs: bar -->
```

### Abell.meta.$root &lt;string&gt;

This is an alias to [Abell.$root](#abellroot-ltstringgt). 

### Abell.meta.$path &lt;string&gt;

Holds the path of the content. 

*Example*

If we have `content/hello-world/index.md`, `content/foobar/index.md`. Then in first iteration the value will be `hello-world`, In second iteration the value will be `foobar`.

### Abell.meta.$createdAt &lt;date&gt;

This holds the value of the datetime of creation of the content. 

The default value is the date of the creation of the folder. But it can have unexpected changes due to git histories so it is recommended to define a value in [User Defined Meta Properties](#user-defined-meta-properties) with,

`content/hello-world/meta.json`
```json
{
  "title": "Hello World Blog",
  "$createdAt": "13 May 2020"
}
```

*The date can be any format that `new Date()` accepts as a parameter. Throughout documentation and in starter themes, we use `13 May 2020` format*

Since `$createdAt` is of the JavaScript Date Object type, we can use date properties with
```abell
\{{ Abell.meta.$createdAt.toDateString() }}
```

### Abell.meta.$modifiedAt &lt;date&gt;

This is exactly same as [Abell.meta.$createdAt](#abellmetacreatedat-ltdategt), except it represents date of modification of content. 

## Abell.contentArray &lt;MetaInfo&#91;&#93;&gt;

`Abell.contentArray` is an array of all the `Abell.meta` values.

This property is accessible from any Abell Page.

In starter templates, You would see this being used to list blogs on the index page with,

```abell
\{{ const { contentArray } = Abell; }}

<section>
  <h2>Blogs</h2>
  \{{
    contentArray.map(meta => /* html */ `
      <div>
        <h3>${meta.title}</h3>
        <p>${meta.description}</p>
      </div>
    `)
  }}
</section>
```


If `content/hello-world/meta.json` has,
```json
{
  "title": "Hello, World!",
  "$createdAt": "22 Apr 2020"
}
```

and `content/foobar/meta.json` has,
```json
{
  "title": "Foobar",
  "$createdAt": "20 Apr 2020",
  "foo": "bar"
}
```

Then `Abell.contentArray` will have value,
```js
[
  {
    title: "Hello, World!",
    "$createdAt": 22-04-2020 <Date>,
    "$modifiedAt": 13-05-2020 <Date>,
    "$root": "..",
    "$path": "hello-world",
    "$slug": "hello-world"
  },
  {
    title: "Foobar",
    foo: "bar",
    "$createdAt": 20-04-2020 <Date>,
    "$modifiedAt": 12-05-2020 <Date>,
    "$root": "..",
    "$path": "foobar",
    "$slug": "foobar"
  }
]
```

As you can see, it got values of `title`, and `foo` from respective meta.json file, It changed the value of `$createdAt`, and added additional values that we talked about in [Abell.meta Section](#abellmeta-ltmetainfogt)


## Abell.contentObj {Object.&lt;string, MetaInfo&gt;}

This is similar to `Abell.contentArray` but instead of array this values holds the object with slugs of blog as keys and Abell.meta values as values.

```abell
\{{ Abell.contentObj['hello-world'].title }} <!-- Prints title of hello-world blog -->
```

## Abell.programInfo {&lt;Object&gt;}

Newly added in v0.8.0, Abell.programInfo contains information about the running Abell process. It has following object-
```js
{
  contentPath: 'content',
  themePath: 'theme',
  outputPath: 'dist', // '.debug' during `abell serve`
  task: 'build' // or 'serve'
}
```