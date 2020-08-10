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
- [Hello World in Abell](#hello-world-in-abell)

---

## Prerequisites

- Abell requires basic knowledge of HTML, CSS, and JavaScript to edit layout of the page.

## Setting up project

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

## "Hello, World!" in Abell
