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
3. Tadaaaa 🎉<br/> Visit <a href="http://localhost:5000" target="_blank" rel="noopener">http://localhost:5000</a> in your browser and you should be able to see 'Hello, World!' on screen.