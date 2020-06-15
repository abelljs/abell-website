# {{ meta.title }}

## "Hello, World!" in Abell

To execute `.abell` files, we need to have following files in directory

```md
src/
  |- index.abell
abell.config.js
```
<br/>

In `./abell.config.js`,
```js
module.exports = {
  sourcePath: 'src'
}
```
This will tell Abell to look into `src` directory for `index.abell`.
<br/><br/>

Then in `./src/index.abell`,
```html
\{{ const greet = 'Hello, World!' }}
<html>
  \{{ greet }}
</html>
```

And that's it 🎉 This is the minimal setup needed to execute abell. Now you can install `abell` and run the server. 
<br/><br/>

Running this will run the abell live server,
```sh
npx abell serve
```
<br/>
or you can, `npm install --save-dev abell` and add `abell serve` script to `package.json`

```json
{
  // ...
  "scripts": {
    "dev": "abell serve",
    "build": "abell build"
  }
}
```

With this, you can run `npm run dev` to run dev-server and `npm run build` to build for production.

<br/>

## Loops, Conditions, and Variables

In Abell files, you can use JavaScript inside HTML files by writing it inside `\{{` curly brackets `}}`. This JavaScript code is executed on build time and thus you get vanilla `.html` file as output. 
<br/><br/>
Few examples are given below to give an idea of the syntax

### Example 1
```js
\{{ 
  const projects = [
    {
      title: 'Cool Blog',
      slug: 'my-cool-blog'
    },
    {
      title: 'Nice blog',
      slug: 'nice-blog-69'
    }
  ];
}}
<section class="projects-container">
\{{
  projects
    .map(meta => `
      <div>
        <a href="${meta.slug}"><h2>${meta.title.toUpperCase()}</h2></a>
      </div>
    `).join('')
}}
</section>
```

**outputs:**

```html
<section class="projects-container">
  <div>
    <a href="my-cool-blog"><h2>COOL BLOG</h2></a>
  </div>
  <div>
    <a href="nice-blog-69"><h2>NICE BLOG</h2></a>
  </div>
</section>
```
<br/>

### Example 2

```html
\{{
  const foodItems = ['apple', 'mango', 'potatoes']
}}
<div>
  <h2>Fruits</h2>
  \{{
    foodItems
      .filter(item => item !== 'potatoes')
      .map(item => `<b>${item}<b>`)
      .join('')
  }}
</div>
```

**outputs:**

```html
<div>
  <h2>Fruits</h2>
  <b>apple</b>
  <b>mango</b>
</div>
```


