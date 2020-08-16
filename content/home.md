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
<div style="flex: 1">

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
</div>
<div style="flex: 1">

**Output (.html)**

`index.html`
```html
<html>
  <body>
    I can render JavaScript! Look: Hello, WORLD 🌻
  </body>
</html>
```


**View on CodeSandbox**

[![Edit abell-hello-world](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/abell-hello-world-zit90?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.abell&theme=dark)

</div>
</div>

### Output What is Needed

Abell builds a static website for you on `abell build` so if your website does not need any client-side JavaScript, Abell will not add any JavaScript in your project!

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

    /* Other critical CSS */
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

If you have a portfolio and you're bored of writing code to add new project, you can have all the info of your projects 

<div class="row row-responsive">
  <div style="flex: 1">

  `./site.json`
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
  <div style="flex: 1">

  `./projects.abell`
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
</div>

**Output**

`./projects.html`
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
[![Edit read-json](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/read-json-obfmw?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.abell&theme=dark)
<br/><br/>

### Build Markdown based websites 📖

With abell, you can import markdown content using `Abell.importContent('path/to/mardown.md')`. Even this text that you're reading right now is coming from [https://github.com/abelljs/abell-website/blob/main/content/index.md](https://github.com/abelljs/abell-website/blob/main/content/index.md)

<div class="row row-responsive">
  <div style="flex: 1">

  `./content/index.md`
  ```md
  # Abell's Intro Blog!

  I loveeee writing markdown!

  Star [Abell on GitHub](https://github.com/abelljs/abell)
  ```
  </div>
  <div style="flex: 1">

  `./theme/index.abell`
  ```html
  <body>
    <section class="blog-contaier"> 
      \{{ Abell.importContent('./index.md')  }}
    </section>
  </body>
  ```
  </div>
</div>

*Note: As you can see in the example, the path in Abell.importContent is relative to `./content` directory*

**Output**

`./dist/index.html`

```html
<body>
  <section class="blog-contaier">
    <h1 id="abell-s-intro-blog-">Abell's Intro Blog!</h1>
    <p>I loveeee writing markdown!</p>
    <p>Star <a href="https://github.com/abelljs/abell">Abell on GitHub</a></p>
  </section>
</body>
```
[![Edit read-markdown](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/read-markdown-f6cet?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.abell&theme=dark)

<br/><br/>

### And a lot more!!

[Get started with Abell](getting-started/) for complete documentation 🐨🎉

<br/><br/>
