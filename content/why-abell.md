## Why Abell?

---
- [New Template Engine](#new-template-engine-to-flatten-the-learning-curve-and-faster-builds-💅)
- [Output Only What is Needed](#output-what-is-needed)
- [Control Over Bundling](#control-over-bundling)
- [Build JSON Based Websites](#build-json-based-websites--)
- [Build Markdown Based Websites](#build-markdown-based-websites-📖)
---

### New template engine to flatten the learning curve and faster builds 💅

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

### Control over bundling!

Have a critical CSS/JS that needs to load as soon as user visits the page? With Abell you can inline a CSS or JavaScript from component!

`Nav.abell`
```abell
<AbellComponent>
  <template>
    <nav>I am an important navigation bar!</nav>
  </template>

  <!-- 'inlined' attribute adds CSS to <head> tag of the parent page during build -->
  <style inlined>
    nav {
      background-color: #111;
      color: #fff;
      padding: 10px 20px;
    }

    /*
      styles are scoped by default.
      You can use 'global' attribute on style tag to make it global.
    */
  </style>

  <!-- 
    'bundle' attribute adds the content to a new bundle of given name 
    ('nav.js' in this case) 
  -->
  <script bundle="nav.js"> /* not so important JavaScript */ </script>
</AbellComponent>
```

[![Edit abell-with-components](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/abell-with-components-7u32b?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.abell&theme=dark)

### Build JSON based websites *{ }*

If you have a portfolio and you're bored of writing code to add new project, you can have all the info of your projects in a JSON file and render the list in Abell 🥳

<div class="row">
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

### Make use of Node.js Ecosystem 📖

Though there is a way to create Abell Plugins, in most of the cases you can completely remove that abstraction and make use of Node.js directly from your Abell file. 


<div class="row">
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
    md.render(fs.readFileSync(markdownPath), 'utf-8'))
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
most of the things will just work out of the box 🕺🏻









```

  </div>
  </div>
  </div>
</div>
<div class="col">

**Output**

`./dist/index.html`
<iframe src="https://tnwx7.sse.codesandbox.io/"
  loading="lazy"
  style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;background-color: #fff;"
  title="vanilla-node-markdown"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


[![Edit vanilla-node-markdown](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vanilla-node-markdown-tnwx7?fontsize=14&hidenavigation=1&theme=dark)

</div>
</div>



<br/><br/>

### And a lot more!!

[Get Started with Abell](getting-started/) for complete documentation 🐨🎉

<br/><br/>
