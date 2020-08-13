# Syntax Guide

This section covers some common concepts of Abell's syntax including examples of Loops, Conditions, and Abell Components.

---
## Table of Content

- [Basic Syntax](#basic-syntax)
  - [1. Hello World in Abell](#1-hello-world-in-abell)
  - [2. Execute Maths](#2-execute-maths)
  - [3. Conditions in Abell](#3-conditions-in-abell)
  - [4. Loops in Abell](#4-loops-in-abell)
  - [5. Escape Double Curly Brackets](#5-escape-double-curly-brackets)
  - [6. Require JavaScipt, NPM Packages, and JSON files](#6-require-javascript-npm-packages-and-json-files)
- [Debugging in Abell](#debugging-in-abell)
- [Abell Components](#abell-components)
  - [Passing Values to Component](#passing-values-to-component)
- [Bundling in Abell](#bundling-in-abell)
  - [1. Making CSS inlined and Adding JS to 'bundled-js/footer.js'](#1-making-css-inlined-and-adding-js-to-`bundledjsfooterjs`)
  - [2. Making JS inlined and Adding CSS to 'bundled-css/footer.css'](#2-making-js-inlined-and-adding-css-to-`bundledcssfootercss`)
---

## Basic Syntax

### 1. Hello World in Abell

Abell files are like HTML files but you can write JavaScript inside double curly brackets. This JavaScript code is executed and outputs a plain HTML file.

**Input (.abell)**

`index.abell`
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

**Output (.html)**

`index.html`
```html
<html>
  <body>
    I can render JavaScript! Look: Hello, WORLD 🌻
  </body>
</html>
```

[![Edit abell-hello-world](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/abell-hello-world-zit90?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.abell&theme=dark)



Notice how `.toUpperCase()` (which is a native Node.js function) upper cased the "WORLD". Thus, you can use any Native Node.js functions inside double curly brackets.

### 2. Execute Maths

As we mentioned, you can write any Node.js code inside curly brackets including a code to add two variables!

```abell
\{{
  const a = 3;
  const b = 9;
}}

<body>
  \{{ a + b }} <!-- Outputs: 12 -->
</body>
```

### 3. Conditions in Abell

```abell
\{{
  const isLink = true;
}}

<main>
  \{{
    isLink 
    ? /* html */ `<a href="https://google.com">Google</a>`
    : /* html */ `<button>Do something!</button>`
  }}
</main>
```

if the conditions are nested writing ternary operator is not ideal, it is recommended to create a separate function, return the value from function and call that function inside double curly brackets.


**Why `/* html */` before the strings?**

Ans: Adding `/* html */` before the string, highlights the block as HTML content in our [Abell Language Features VSCode Extension]()

### 4. Loops in Abell

You can loop over content with Native JavaScript methods such as [.map()](TODO). You can also use `sort`, `filter` and other array methods to customize the loop.

```abell
\{{
  const projects = [
    {
      title: 'Project 1',
      desc: 'This is project 1'
    },
    {
      title: 'Project 2',
      desc: 'This is project 2'
    }
  ]
}}

<main>
  <section>
    <h2>Projects</h2>
    \{{
      projects.map(project => /* html */ `
        <div>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
        </div>
      `)
    }}
  </section>
</main>
```

### 5. Escape Double Curly Brackets

If you want something to be printed as it is, You can escape double curly brackets by adding forward slash before curly brackets.


### 6. Require JavaScript, NPM Packages, and JSON files

With Abell, you can `require()` whatever you can require with Node.js! So you can use JavaScript files, JSON files, and NPM Packages from `.abell` files.

```abell
\{{
  const moment = require('moment'); // NPM Package
  const projects = require('./projects.json'); // JSON file
  const calculate = require('./calculate.js'); // JS file
}}
```

It is a good practice to have all your requires on top before the `<html>` tag.

## Debugging in Abell

In Abell, you can log a variable with `\{{ console.log("Hi, I am printed on terminal") }}`. This message appears in your terminal (the one which is running the dev server).

```abell
\{{ const a = 3; }}
<html>
  <body>
    \{{ console.log(a) }} <!-- Printed on terminal -->
  </body>
</html>
```

This will not effect your output HTML so in output it is rendered as a blank string.

Abell Pages have access to a special variable called `Abell`. You can also print this variables to see what all functions and methods it has. (we will learn more about `Abell` variable in [API Reference](api-reference))

`theme/index.abell`
```abell
<html>
  \{{ console.log(Abell) }}
</html>
```

## Abell Components

Components are latest addition to Abell v0.4 🎉 Abell Components lets us wrap HTML, CSS, JavaScript which can be reused between Abell Pages.

Also since they are `.abell` files as well, they can have double curly bracket blocks too! So everything we've seen so far in this section, is applicable for components as well.

Abell Components wrap `<template>`, `<style>`, and `<script>` in `<AbellComponent>` tag. 
```abell
<AbellComponent>
<template>
  <!-- HTML Content... -->
</template>

<style>
  /* CSS for that HTML */
</style>

<script>
  // Client-side JavaScript for the HTML
</script>
</AbellComponent>
```

**Important: `<AbellComponent>` should always be in the first line. Everything else comes after it.**

### Example

It is a good practice to have components inside `components` directory and their names to be in format `TitleCased.abell` to differentiate them from Abell pages.

So a component for Footer would look like,

`theme/components/Footer.abell`

```abell
<AbellComponent>
<template>
  <footer id="main-footer">
    Built with Abell, <span id="year"></span>
  </footer>
</template>

<style>
  footer#main-footer {
    text-align: right;
    padding: 10px;
  }
</style>

<script>
  document.querySelector('footer#main-footer #year').innerText = new Date().getFullYear();
</script>
</AbellComponent>
```

***Note:** Styles and Scripts are not currently scoped but it is a good practice to scope them by adding id to your HTML element and refering to the element with respect to the id in styles and scripts.*

*We do have plans to scope the styles and scripts in future.*

Lets use this component in Abell Page (index.abell)

`theme/index.abell`
```abell
\{{
  const Footer = require('./components/Footer.abell');
}}
<html>
  <body>
    <!-- ... -->
    <Footer/>
  </body>
</html>
```

*Imp: `<Footer></Footer>` is not currently valid! Self-closing tags (`<Footer/>`) are the only way to write components right now.*

### Passing values to component

We can pass values to component using `props` attribute over component.

`theme/index.abell`
```abell
<body>
  <!-- ... -->
  <Footer props={builtWith: 'Abell'} />
</body>
```

And we can access this value with `\{{ props.builtWith }}` in Footer Component.


`theme/components/Footer.abell`
```abell
<!-- ... -->
<template>
  <footer id="main-footer">
    Built with \{{ props.builtWith }}, <span id="year"></span>
  </footer>
</template>
<!-- ... -->
```

Note that this is only valid for `props` attribute so you cannot `<Footer foo={builtWith:  'Abell'} />` 🙅

## Bundling in Abell

Abell supports inlining styles and scripts to main page, as well as bundling it to separate CSS file and defining which file to bundle into.

On `<script>` and `<style>` tag inside Abell Component, you can use attribute 
- `inlined` to inline the content to the main page.
- `bundle="something.css"` to bundle inside `bundled-css/something.css` file on build.

When not defined, it is bundled into a common `bundled-css/main.abell.css` and `bundled-js/main.abell.js` file.

### Example

#### 1. Making CSS inlined and Adding JS to `bundled-js/footer.js`

`theme/components/Footer.abell`

```abell
<AbellComponent>
<template>
  <footer id="main-footer">
    Built with Abell, <span id="year"></span>
  </footer>
</template>

<!-- this CSS will be added to <head> tag in parent page -->
<style inlined>
  footer#main-footer {
    text-align: right;
    padding: 10px;
  }
</style>

<!-- This JavaScript will go into `bundled-js/footer.js` and <script src="bundled-js/footer.js"> will be added before end of <body>  -->
<script bundle="footer.js">
  document.querySelector('footer#main-footer #year').innerText = new Date().getFullYear();
</script>
</AbellComponent>
```


#### 2. Making JS inlined and Adding CSS to `bundled-css/footer.css`

`theme/components/Footer.abell`

```abell
<AbellComponent>
<template>
  <footer id="main-footer">
    Built with Abell, <span id="year"></span>
  </footer>
</template>

<!-- this CSS will be added to bundled-css/footer.css and link rel will be added to parent page. -->
<style bundle="footer.css">
  footer#main-footer {
    text-align: right;
    padding: 10px;
  }
</style>

<!-- This JavaScript will be added to <script> tag before </body> -->
<script inlined>
  document.querySelector('footer#main-footer #year').innerText = new Date().getFullYear();
</script>
</AbellComponent>
```

