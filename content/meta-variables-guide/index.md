# {{ meta.title }}

There are two ways to two ways to have variables defined in Abell, `globalMeta` object in `abell.config.js`, and `meta.json`. 

## globalMeta

globalMeta variables are defined in `abell.config.js` and are accessible from any `.abell` file in theme and `.md` file in content with `\{{ globalMeta.<variable_name> }}` (e.g. `\{{ globalMeta.foo }}`).

So example `abell.config.js` would look like,
```js
// abell.config.js

module.exports = {
  // ...
  globalMeta: {
    siteTitle: "Abell Documentation",
    greet: "Hello, World!"
  }
}
```

and this value can be accessed from any `.abell` file as 

```html
<html>
  <head>
    <title>\{{ globalMeta.siteTitle }}</title>
  </head>
  <body>
    \{{ globalMeta.greet }}
  </body>
</html>
```

## Meta.json

`meta.json` file can be used to define content specific variables. So values defined in `./content/my-cool-blog/meta.json` will only be limited to `my-cool-blog`.

These values can be accessed from `index.md` in content and `[$path]/index.abell` files with `\{{ meta.<variable_name> }}` or `\{{ meta.foo }}`

Another use-case of `meta.json` is to dynamically set title, and og:image in content template. 

### Example

In this example, we will add two values `title` and `ogImage` in meta.json and assign different values in different content

```json
// ./content/my-cool-blog/meta.json
{
  "title": "My cool blog",
  "ogImage": "https://cdn.example.com/my-blog-og-cover.png"
}
```

```json
// ./content/another-blog/meta.json
{
  "title": "Another blog",
  "ogImage": "https://cdn.example.com/different-blog-og-cover.png"
}
```

Then in template, we can use `\{{ meta.ogImage }}` and `\{{ meta.title }}` to refer to respective values.
```html
<!-- ./theme/[$path]/index.abell -->
<html>
  <head>
    <meta name="og:image" content="\{{ meta.ogImage }}"/>
    <title>\{{ globalMeta.siteTitle }} - \{{ meta.title }}</title>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

Which will output,

`./dist/my-cool-blog/index.html`
```html
<!-- ./dist/my-cool-blog/index.html -->
<html>
  <head>
    <meta name="og:image" content="https://cdn.example.com/my-blog-og-cover.png"/>
    <title>Abell Documentation - My cool blog</title>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

and

`./dist/another-blog/index.html`
```html
<!-- ./dist/another-blog/index.html -->
<html>
  <head>
    <meta name="og:image" content="https://cdn.example.com/different-blog-og-cover.png"/>
    <title>Abell Documentation - Another blog</title>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

In addition to your custom variables, there are some predefined variables provided by Abell, We will talk about them in next section [Predefined variables](#predefined-variables)

## Predefined Variables

There are some variables provided by abell they all start with `$` and can help you get idea of the content and customize the theme according to your needs.

### List of predefined variables,
- **meta.$createdAt** *(Type: JavaScript Date Object)* <br/>By default it is set to time to folder creation, you can overwrite that time by adding `$createdAt` value in `meta.json`. The new value should be added in `Jun 5 2020` format. On build time, it will turn that string to JavaScripe date object.

- **meta.$modifiedAt** *(Type: JavaScript Date Object)* <br/>Same as `$createdAt`, defaults to modified datetime of folder and can be overwritten from meta.json.
- **meta.$path** *(Type: String)* <br/>Path to content's folder. e.g. `webperf-blog/my-webperf-blog`
- **meta.$root** *(Type: String)* <br/>Prefix to go to root. If user is two level deep in content, meta.$root will be `../..`. This in combination with `meta.$path` can be used for accurate navigations throughout different levels of nested folders, `\{{ meta.$root }}/\{{ meta.$path }}`
- **$contentArray** *(Type: Meta[])* <br/>This lets you access meta information of content from `./theme/index.abell` and other `.abell` files. This can be used to create navigation menus. Example of using `$contentArray` would look like,
```html
\{{
  $contentArray
    .map(meta => `
      <article class="shadow">
        <a href="${meta.$path}/">
          <h2>${meta.title}</h2>
          <div class="article-date"><small>${meta.$createdAt.toDateString()}</small></div>
          <p class="article-description">${meta.description}</p>
        </a>
      </article>
    `)
    .join('')
}}
```