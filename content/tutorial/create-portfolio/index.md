{{ const { meta, globalMeta } = Abell }}
# Tutorial

{{ meta.description }}

*Note that this section covers building Abell app from scratch and is intended to teaching the concepts rather than building. If you want to get something running quickly, you can check out [Abell Starters](../../starters/)*

## What are we building?

In this tutorial, we will be building **a Portfolio** with a projects, about, and blogs section. The data of projects will come from a JSON file, the information of about will come from a Markdown file, and blogs will come from markdown file as well. 

Even if you don't want a portfolio, It is still recommended to go through this Tutorial as it covers most of the Abell's features and will help you understand Abell better.

### What we will focus in this tutorial

- Reading from JSON
- Reading from Markdown
- Looping over `content` directory to dynamically create blog pages

### What we will NOT focus in this tutorial

- CSS and styling

---
## Table of Content

- [Prerequisites](#prerequisites)
- [Setting Up Project](#setting-up-project)
- ["Hello, World!" in Abell](#hello-world-in-abell)

---

## Prerequisites

- Abell requires basic knowledge of HTML, CSS, and JavaScript to edit layout of the page.

## Setting Up Project

**Step 1.** Execute `npx create-abell-app my-portfolio --template minimal` in your terminal. <br/>This will create a minimal abell project and will install all the dependencies (including abell itself). 

Now your project will have `./abell.config.js`, and `./theme/index.abell`

```sh
📂 theme/
|   |- 📄 index.abell
|- ⚙️ abell.config.js
|- ⚙️ package.json
```

And other files such as `package-lock.json`, `.gitignore` which we won't care about much in this tutorial.


<details>
    <summary>Wait, but what did `create-abell-app` do?</summary>
      
`npx create-abell-app my-portfolio --template minimal` is equivalent to following steps:

- Create `./theme/index.abell`, `./abell.config.js`
- Execute `npm install --save-dev abell` to install abell
- In "scripts" key inside `package.json`, add `"dev": "abell serve"` and `"build": "abell build"`.
- Add following code to `abell.config.js` 
```js
module.exports = {
  themePath: 'theme'
}
```
- Add following code to `./theme/index.abell`
```abell
\{{
  const a = 3;
  const b = 9;
}}
<html>
  <body>
    \{{ a + b }}
  </body>
</html>
```
    
</details>

**Step 2.** Run `npm run dev` to start a dev-server. This will run a live-reload server on <a target="_blank" href="http://localhost:5000">http://localhost:5000</a>


## "Hello, World!" in Abell

Abell files are pretty much like HTML files but you can write JavaScript inside double curly brackets. This JavaScript code is executed and outputs a plain HTML file.

- In `./theme/index.abell`, add the following code

<iframe 
  src="https://codesandbox.io/embed/abell-hello-world-zit90?fontsize=14&module=%2Fsrc%2Findex.abell&moduleview=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="abell-hello-world"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>


Notice how `.toUpperCase()` (which is a native Node.js function) upper cased the "WORLD". Thus, you can use any Native Node.js functions inside double curly brackets.


## Getting Started with Portfolio

### Setting up title and required variables

Our portfolio needs a title that can be added into `<title>` tag and that can also be reused in other places.

Abell allows you to define global variables inside `abell.config.js` with a `globalMeta` object.

In `./abell.config.js`, Add
```js
// abell.config.js

module.exports = {
  themePath: 'theme',
  globalMeta: {
    siteTitle: 'My Supercool Portfolio'
  }
}
```

Now, `siteTitle` can be accessed from index.abell with `Abell.globalMeta.siteTitle` variable.

In `./theme/index.abell`, Add
```abell
<!-- theme/index.abell -->

\{{
  const { globalMeta } = Abell; // JavaScript Destructuring
}}
<html>
  <head>
    <title>\{{ globalMeta.siteTitle }}</title>
  </head>
  <body>
    <!-- Prints globalMeta object in the terminal which is running dev-server -->
    \{{ console.log(globalMeta) }} 
    <h1>\{{ globalMeta.siteTitle }}</h1>
  </body>
</html>
```

This will add 'My Supercool Portfolio' into title, and will print it inside body. 

#### Possible Questions
- **Where did `Abell` variable come from?**<br/>
`Abell` variable is by default accessible from every `.abell` file. You can `\{{ console.log(Abell) }}` to see its content. The data will be printed on your terminal which is running dev-server.
- **What is `const { globalMeta } = Abell;`** ?<br/>
It is called as "Destructuring" in JavaScript. It is equivalent to `const globalMeta = Abell.globalMeta`. <br/><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Read more about JavaScript Destructuring</a>


## Draft! (Not Ready yet)
We need three major sections and we will learn 3 different things while building them.

- **Projects Section** - We will read data from `projects.json` file and build a list of projects.
- **About Section** - Reading about information from `.md` file.
- **Blogs Section** - We will have multiple `.md` files with content of our blog but a single layout `.abell` file and Abell will generate multiple HTML pages for each blog.