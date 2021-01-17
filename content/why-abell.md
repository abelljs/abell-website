## Why Abell?

---
- [New Template Engine](#new-template-engine-to-flatten-the-learning-curve-and-faster-builds-💅)
- [Output What is Needed](#output-what-is-needed)
- [Control Over Bundling](#control-over-bundling)
- [Build JSON Based Websites](#build-json-based-websites--)
- [Make use of Node.js Ecosystem](#make-use-of-nodejs-ecosystem)
---

### New Template Engine to Flatten the Learning Curve and Faster Builds 💅

Abell files are HTML files which allow you to write JS inside curly brackets so you can use JavaScript to loop over data, require static data, and use conditions in the HTML. Styling, client-side scripting and almost everything else stays same as you would do in vanilla HTML.



<div class="row row-responsive">
<div class="col">

**Input (.abell)**

`index.abell`
```abell
\{{ 
  const a = 'Hello';
  const b = ', World 🌻';
}}

<html>
  <body>
    I can render JavaScript! 
    Look: \{{ a + b.toUpperCase() }}
  </body>
</html>
```
</div>
<div class="col">

**Output (.html)**

`index.html`
```html
<html>
  <body>
    I can render JavaScript! 
    Look: Hello, WORLD 🌻
  </body>
</html>
```

[![Edit abell-hello-world](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/abell-hello-world-zit90?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.abell&theme=dark)

</div>
</div>

### Output What is Needed

Abell builds a static website for you on `abell build` so if your website does not need any client-side JavaScript, Abell will not add any JavaScript in your project!

For example, if we don't have any CSS and script in the code, this is what the output will look like: 

<div class="row">
<div class="abell-li" style="flex:2">

**Input**


- index.abell
- Nav.abell 
- Footer.abell 
- Meta.abell

</div>
<div style="flex:3;">

**Output**

<div style="padding: 30px 0px">
<img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" width="15"/> index.html

</div>

</div>
</div>

### Control Over Bundling!

Have a critical CSS/JS that needs to load as soon as user visits the page? With Abell you can inline a CSS or JavaScript from component!

<div class="tabbed-editor">
  <div class="menu">
    <button class="active" data-editorid="bundling-footer">./theme/components/TestFooter.abell</button>
    <button data-editorid="bundling-index">./theme/index.abell</button>
  </div>
  <div class="tabs">
  <div class="active-tab" id="bundling-footer">

```abell
<AbellComponent>
  <template>
    <footer>© Abell <span class="year"></span></footer>
  </template>

  <!-- 
    'inlined' attribute adds CSS to <head> tag of the parent page during build. 
    Without it, styles are bundled into a new file and link is added to parent page.
   -->
  <style inlined>
    footer {
      background-color: #111;
      color: #fff;
      padding: 10px 20px;
    }
  </style>

  <!-- 
    'bundle' attribute adds the content to a separate bundle of given name 
    ('footer.js' in this case) 

    scopedSelector ensures the selected element is from same component. 
    It is replacement to document.querySelector
  -->
  <script bundle="footer.js">     
    scopedSelector('.year').innerHTML = new Date().getFullYear();
  </script>
</AbellComponent>
```

  </div>
  <div id="bundling-index">
  
```abell
\{{
  const TestFooter = require('./components/TestFooter.abell');
}}

<html>
<body>
  <footer>
    This footer will be unaffected by the styles in Footer component since they are scoped.
    <span class="year">This span will be ignored as well</span>
  </footer>

  <TestFooter />
</body>
</html>














```

  </div>
</div>
</div>


**Output**

<div class="tabbed-editor">
  <div class="menu">
    <button class="active" data-editorid="bundling-dist-1">./dist/index.html</button>
    <button data-editorid="bundling-dist-2">./dist/bundled-js/footer.js</button>
  </div>
  <div class="tabs">
  <div class="active-tab" id="bundling-dist-1">

```html
<html>
<head>
  <style>
  /* Styles are inlined because of 'inlined' attribute in component */

  footer[data-abell-hCdFua] {
    background-color:#111;
    color:#fff;
    padding:10px 20px;
  }
  </style>
</head>
<body>
  <footer>
    This footer will be unaffected by the styles in Footer component since they are scoped
    <span class="year">This span will be ignored as well</span>
  </footer>
  <footer data-abell-hCdFua>© Abell <span class="year" data-abell-hCdFua></span></footer>

  <!-- JS from component, goes into this file -->
  <script src="./bundled-js/footer.js"></script>
</body>
</html>
```

</div>
<div id="bundling-dist-2">

```js
// this line is injected by Abell
const scopedSelector = (queryString) => document.querySelector(queryString + '[data-abell-hCdFua]');const scopedSelectorAll = (queryString) => document.querySelectorAll(queryString + '[data-abell-hCdFua]'); 

// Your JavaScript
scopedSelector('.year').innerHTML = new Date().getFullYear();
  
```

</div>
</div>
</div>

### Build JSON Based Websites *{ }*

If you have a portfolio and you're bored of writing code to add new project, you can have all the info of your projects in a JSON file and render the list in Abell 🥳

<div class="row row-responsive">
<div class="col">
  <div class="tabbed-editor">
  <div class="menu">
    <button class="active" data-editorid="build-json-projects">./projects.abell</button>
    <button data-editorid="build-json-site">./site.json</button>
  </div>
  <div class="tabs">
  <div class="active-tab" id="build-json-projects">

```abell
\{{ const siteData = require('./site.json'); }}
<html>
  <head>
    <title>\{{ siteData.title }}</title>
  </head>
  <body>
    \{{
      siteData.projects
        .map(project => 
          `<div>${project.name}</div>`
        )
    }}
  </body>
</html>
```

  </div>
  <div id="build-json-site">

```json
{
  "title": "This is my Title",
  "projects": [
    {
      "name": "My cool project",
      "description": "Look at this cool project"
    },
    {
      "name": "Another project",
      "description": "This is another project"
    }
  ]
}

```

  </div>
  </div>
  </div>
</div>
<div class="col">

**Output**

`./dist/projects.html`
```html
<html>
  <head>
    <title>This is my Title</title>
  </head>
  <body>
    <div>My cool project</div>
    <div>Another project</div>
  </body>
</html>
```

</div>
</div>

[![Edit read-json](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/read-json-obfmw?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.abell&theme=dark)
<br/><br/>

### Make Use of Node.js Ecosystem

Though there is a way to create Abell Plugins, in most of the cases you can completely remove that abstraction and make use of Node.js directly from your Abell file. 


<div class="row row-responsive">
<div style="flex: 2" class="col">
  <div class="tabbed-editor">
  <div class="menu">
    <button class="active" data-editorid="node-ecosystem-index">./theme/index.abell</button>
    <button data-editorid="node-ecosystem-introduction">./theme/introduction.md</button>
  </div>
  <div class="tabs">
  <div class="active-tab" id="node-ecosystem-index">

```abell
\{{
  // Native Node.js Modules
  const fs = require('fs');
  const path = require('path');

  // NPM Library 🤯 https://npmjs.org/package/remarkable
  const { Remarkable } = require('remarkable');
  const md = new Remarkable();
}}

<html>
<body>
  \{{
    const markdownPath = path.join(__dirname, 'introduction.md');

    // Read Markdown Content and render it to HTML with Remarkable
    md.render(fs.readFileSync(markdownPath, 'utf-8'))
  }}
</body>
</html>
```

  </div>
  <div id="node-ecosystem-introduction">

```md
# Hello from Markdown

![Abell Logo](https://abelljs.org/favicon.ico)

This text is coming from 
[Markdown File](https://en.wikipedia.org/wiki/Markdown) 
in `theme/introduction.md`

Don't know how to implement something in Abell? 
Search for how to implement it in Node.js and 
most of the things will just work out of the box









```

  </div>
  </div>
  </div>
</div>
<div class="col">

**Output**

`./dist/index.html`
<iframe src="examples/markdown.html"
  loading="lazy"
  style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;background-color: #fff;"
  title="vanilla-node-markdown"
></iframe>


[![Edit vanilla-node-markdown](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vanilla-node-markdown-tnwx7?fontsize=14&hidenavigation=1&theme=dark)

</div>
</div>



<br/><br/>

### And a lot more!!

[Get Started with Abell](getting-started/) for complete documentation 🐨🎉

<br/><br/>
