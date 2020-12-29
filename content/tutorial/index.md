# Tutorial

This tutorial is intended to explain the concepts of Abell while building a simple portfolio.

## What is Abell?

Abell is a JavaScript-based Static-Site-Generator to help you build fast and scalable static websites. It is similar to tools like Jekyll, Eleventy, Hugo, and Hexo.

Abell files are just like HTML files except you can write JavaScript in double curly brackets which is executed to build you a static page.

**Input - `index.abell`**
```abell
\{{ 
  const a = 'Hello';
  const b = ', World 🌻';
}}

<html>
  <body>
    I can render JavaScript! Look: \{{ a + b.toUpperCase() }}
  </body>
</html>
```
**Output - `index.html`**
```html
<!-- Output - index.html -->
<html>
  <body>
    I can render JavaScript! Look: Hello, WORLD 🌻
  </body>
</html>
```

## Installation and Setup

if you want to play around online, you can skip this installation section and [Start on CodeSandbox with Example Project](TODO)

*Make sure you have [Node.js v10+](https://nodejs.org) Installed*

Let's start by creating a new abell project. We're naming it `my-cool-portfolio` you can replace it with any name you want.

1. Run this command in your terminal-
```sh
npx create-abell-app my-cool-portfolio --template minimal --installer npm
```

2. Change directory and run the dev server
```sh
cd my-cool-portfolio
npm run dev
```
3. Tadaaaa 🎉<br/> Visit <a href="http://localhost:5000" target="_blank" rel="noopener">http://localhost:5000</a> in your browser and you should be able to see 'Hello, Abell Example!' on screen.


## Setting Up Our Portfolio

Let's start by changing **Abell Example** with your name.

In `./abell.config.js`-
```js
module.exports = {
  // ..
  globalMeta: {
    siteTitle: 'Saurabh'
  }
  //...
}
```

This will change the text on our website to **Hello, Saurabh!** 🥳

Replace `Saurabh` with your name.

### Using `globalMeta` in Abell Files

Now if you open `theme/index.abell`, you will see code not same but similar to this-
```abell
<!-- theme/index.abell --> 
\{{
  const { globalMeta } = Abell;
}}

<body>
  <h1>Hello, \{{ globalMeta.siteTitle }}</h1>
</body>
```

All values defined inside globalMeta in `./abell.config.js` are accessible from any `.abell` file with `Abell.globalMeta.<key>`.

## Adding CSS to Our Project

Fun fact! It's literally just same as you do with HTML. 

1. Create `theme/index.css`
2. Add `<link>` to our `theme/index.abell` file.
```abell
<head>
  <link rel="stylesheet" href="./index.css" />
</head>
```
Though for this case it will work perfectly, It is recommended to use `Abell.$root` to make sure the path always points from root. 
3. Add `\{{ Abell.$root }}` to href.
```html
<head>
  <link rel="stylesheet" href="\{{ Abell.$root }}/index.css" />
</head>
```

Abell.$root always points to the `theme` directory irrespective of which abell file it is built from. This is to avoid confusion of linking files from components or dynamic paths (we will learn these things later in this tutorial)

## Building Your First Abell Component!

---
- [Let's Build a Footer for Our Portfolio](TODO)
- [Passing Props to Components](TODO)
---

Components allow you to group markup, styles, scripts that can be reused across pages (even across projects).

### Let's Build a Footer for Our Portfolio!

This will be a simple Footer with year and your name on it.

1. Create `theme/components/Footer.abell` with following content 
```abell
<AbellComponent>
<template>
  <footer>&#169; Saurabh Daware.</footer>
</template>
</AbellComponent>
```
(Replace 'Saurabh Daware' with your name)
2. Add following lines in `theme/index.abell` to add Footer to our index page.
```abell
\{{
  // ...
  const Footer = require('./components/Footer.abell');
}}
<body>
  <!-- ... -->
  <Footer />
</body>
```

Wohooo we will now see `© Saurabh Daware` at the bottom of our page.

### Passing Props to Components

Currently we have our name statically mentioned inside the Footer component. Let's pass it from `theme/index.abell` instead.

1. Change `<Footer />` in `theme/index.abell` with, 
```abell
<!-- ... -->
<Footer props={footerText: 'Saurabh Daware'} />
```
All props that we want to pass to component go through props attribute.
2. To use this prop in Components, add `\{{ props.footerText }}` in `theme/components/Footer.abell`
```abell
<AbellComponent>
<template>
  <footer>&#169; \{{ props.footerText }}</footer>
</template>
</AbellComponent>
```

## Trash

```
 <span class="year"></span> 
<style>
  footer {
    padding: 10px 20px;
    background-color: #ddd;
  }
</style>

<script>
  document.querySelector('.year').innerHTML = new Date().getFullYear();
</script>
```


Sample Component Syntax-
```abell
<AbellComponent>
<template>
  <!-- HTML/Abell -->
</template>

<style>
  /* CSS (Scoped for Component By Default) */
</style>

<script>
  // FrontEnd JavaScript
</script>
</AbellComponent>
```