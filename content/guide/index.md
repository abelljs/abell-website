# Detailed Guide for Abell

This section takes you through all the concepts of Abell and the API reference.

*Note: This section is an API reference. If you are looking for a step-by-step method to learn Abell, [Tutorial]({{Abell.$root}}/tutorial/create-portfolio) is the section you would want to check out.*


---
## Table of Content

- [Syntax Guide](#syntax-guide)
  - [Basic Syntax](#basic-syntax)
  - [Abell Components](#abell-components)
- Abell API Reference
  - Abell.$root `<string>`
  - Abell.$path `<string>`
  - Abell.importContent `{Function (pathToMarkdown<string>): htmlString<string>}`
  - Abell.meta `<MetaInfo>`
    - Abell.meta.$root `<string>`
    - Abell.meta.$path `<string>`
    - Abell.meta.$createdAt `<Date>`
    - Abell.meta.$modifiedAt `<Date>`
  - Abell.contentArray `<MetaInfo[]>`
  - Abell.contentObj `{Object.<string, MetaInfo>}`
- Dynamic Page Generation
- How to Create Abell Starter
- How to Build Abell Plugins
- Best Practices
---

## Syntax Guide

### Basic Syntax

#### 1. Hello World in Abell

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

#### 2. Execute Maths

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

#### 3. Conditions in Abell

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

<details open>
  <summary>Why `/* html */` before the strings?</summary>

  Adding /* html */ before the string, highlights the block as HTML content in our [Abell Language Features VSCode Extension]()

</details>

#### 4. Loops in Abell

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

#### 5. Escape Double Curly Brackets

If you want something to be printed as it is, You can escape double curly brackets by adding forward slash before curly brackets.


#### 5. 


### Abell Components



