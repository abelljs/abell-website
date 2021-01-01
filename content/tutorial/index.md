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

We have two important files that we need to care about-
```md
- theme/
  |- index.abell

- abell.config.js
```

Let's start by changing **Abell Example** with your name.

<div class="tabbed-editor">
<div class="menu">
  <button class="active" data-editorid="setting-up-abellconfig">./abell.config.js</button>
  <button data-editorid="setting-up-index-1">./theme/index.abell</button>
</div>

<div class="tabs">
<div class="active-tab" id="setting-up-abellconfig">

```js
module.exports = {
  // ..
  globalMeta: {
    siteTitle: 'Saurabh', // replace with your name
  }
  //...
}
```

</div>
<div id="setting-up-index-1">

```abell
\{{
  const { globalMeta } = Abell;
}}

<body>
  <h1>Hello, \{{ globalMeta.siteTitle }}</h1>
</body>
```

</div>
</div>
</div>

This will change the text on our website to **Hello, Saurabh!** 🥳

All values defined inside globalMeta in `./abell.config.js` are accessible from any `.abell` file with `Abell.globalMeta.<key>`. 

Thus `siteTitle` variable defined in `abell.config.js` can be used in `.abell` files with `\{{ Abell.globalMeta.siteTitle }}`

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


## Require JSON to Abell Files

Next we will add Projects to our Portfolio.

Normally in Plain HTML Website, we have to edit the whole HTML to add/remove/edit the project. 

With Abell, we can create a `projects.json` and define our projects there and render it in our website. 

1. Create `theme/data/projects.json`
2. Require this JSON file in `theme/index.abell` with `require('./data/projects.json')`
3. We can use [JavaScript's `.map` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to loop over our projects

<div class="tabbed-editor">
<div class="menu">
  <button class="active" data-editorid="require-json-index-1">theme/index.abell</button>
  <button data-editorid="require-json-projects">theme/data/projects.json</button>
</div>
<div class="tabs">
<div class="active-tab" id="require-json-index-1">

```abell
\{{
  // ...
  const projects = require('./data/projects.json');
}}

<!-- ... -->
<section class="projects">
\{{
  projects.map(project => /* html */ `
    <div class="project">
      <h3><a href="${project.url}">${project.title}</a></h3>
      <p>${project.description}</p>
    </div>
  `)
}}
</section>
```

</div>
<div id="require-json-projects">

```
[
  {
    "title": "My cool project",
    "description": "Here's my sample project that is built with Abell",
    "url": "https://abelljs.org"
  },
  {
    "title": "My Random Library",
    "description": "I made this NPM library to learn Mewtwo Programming Language",
    "url": "https://github.com/abelljs/abell"
  }
]




```

</div>
</div>
</div>

*Fun fact: We can use `require` to require NPM packages, Node Modules and everything that can be required from Node.js!*

## Building Your First Abell Component!

---
- [Let's Build a Footer for Our Portfolio](TODO)
- [Passing Props to Components](TODO)
- [Add JavaScript to Components](TODO)
---

Components allow you to group markup, styles, scripts that can be reused across pages (even across projects).

This is how a syntax of Abell Components looks like-

```
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

Let's build a component for our portfolio

### Let's Build a Footer for Our Portfolio!

This will be a simple Footer with year and your name on it.

1. Create `theme/components/Footer.abell`. This will hold our Footer Component.
2. We will add HTML and CSS for our component. 
3. Require Footer in our index.abell and use the Footer element.

<div class="tabbed-editor">
<div class="menu">
  <button data-editorid="build-footer-index-1">theme/index.abell</button>
  <button class="active" data-editorid="build-footer-component">theme/components/Footer.abell</button>
</div>
<div class="tabs">
<div class="active-tab" id="build-footer-component">

```abell
<AbellComponent>
<template>
  <footer>&#169; Saurabh Daware.</footer>
</template>

<style>
  footer {
    padding: 10px 20px;
    background-color: #111;
    color: #ffff;
    text-align: right;
  }
</style>
</AbellComponent>
```

</div>
<div id="build-footer-index-1">

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

</div>
</div>
</div>

Wohooo we will now see `© Saurabh Daware` at the bottom of our page.

The styles we wrote in Footer.abell are scoped for the component so they won't be applied to the elements outside our Footer component.

### Passing Props to Components

Currently we have our name statically mentioned inside the Footer component. Let's pass it from `theme/index.abell` instead.

<div class="tabbed-editor">
<div class="menu">
  <button data-editorid="build-footer-index-1">theme/index.abell</button>
  <button class="active" data-editorid="build-footer-component">theme/components/Footer.abell</button>
</div>
<div class="tabs">
<div class="active-tab" id="build-footer-component">

```abell
<AbellComponent>
<template>
  <footer>&#169; \{{ props.footerText }}.</footer>
</template>

<!-- ... -->
</AbellComponent>
```

</div>
<div id="build-footer-index-1">

```abell
\{{
  // ...
  const Footer = require('./components/Footer.abell');
}}
<body>
  <!-- ... -->
  <Footer props={footerText: 'Saurabh Daware'} />
</body>




```

</div>
</div>
</div>

*Note that `props` is the only possible attribute for Components. Any value that you want to pass, has to be inside the props attribute object.*

### Add JavaScript to Components

Now we will add year to our Footer!

```
<AbellComponent>
<template>
  <footer>&#169; \{{ new Date().getFullYear() }} \{{ props.footerText }}.</footer>
</template>

<!-- ... -->
</AbellComponent>
```

Tadaaaa 🎉 Easy Right? NO!

The JavaScript that we write inside curly bracket is executed on build. Which means every year, we will have to trigger a build to reload the footer year.

Orrr.. we can write client-side JavaScript to always get the latest year.

**Adding Client-Side JavaScript-**

```abell
<AbellComponent>
<template>
  <footer>&#169; <span class="year"></span> \{{ props.footerText }}.</footer>
</template>

<!-- css... -->

<script>
  document.querySelector('.year').innerHTML = new Date().getFullYear();
</script>
</AbellComponent>
```

We can write our Frontend JavaScript inside `<script>` tag in our Component. This will now be executed on Client-side and it will make sure that it always fetches the latest year irrespective of build.

All problems solved right? Nope...

Here we are using `document.querySelector('.year')` which will look for element with `class="year"` in entire website (even outside our component) and return the top-most element.

Though this will work in this case, but we need a way to make sure we don't end up selecting elements outside Component to maintain the scalability.

Thus in Abell Component scripts, it is recommended to use `scopedSelector()` and `scopedSelectorAll()` instead of `document.querySelector()` or `document.querySelectorAll()`


```abell
<AbellComponent>
<template>
  <footer>&#169; <span class="year"></span> \{{ props.footerText }}.</footer>
</template>

<!-- css... -->

<script>
  scopedSelector('.year').innerHTML = new Date().getFullYear();
</script>
</AbellComponent>
```

This maintains the scope of the Component which will help you in maintaining scalability.

## Dynamic Page Generation

Next up, we will be adding blogs to our portfolio. 

For blogs in our portfolio, we can't go on creating an Abell Page for every blog. So what we do instead is create one Abell Page as a layout to hold our blog content, and pass it in the markdown content of blog.

We will be writing blogs in Markdown and that content should reflect in our website.

1. Create `./content/hello-world/index.md` and add sample Blog Content
2. Create `./theme/[path]/index.abell` file to hold layout for all our blogs.
3. Add list of blogs in `./theme/index.abell`


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