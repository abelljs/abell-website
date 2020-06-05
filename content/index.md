<pre>
<code class="hljs language-md shadow" style="word-spacing: 4px;line-height: 40px;">npx create-abell-app my-cool-blog<br/>cd my-cool-blog<br/>npm run dev</code>
</pre>

<br/><br/>

## Why Abell?
<br/>

### Live Dev Server for fast development 🏃

The dev-server is written from complete scratch to help you develop sites faster. 
<br/>
<br/>

### New Templating Language `.abell` 🎉

Abell is based on a completely new (yet the syntax being familiar) templating language `.abell`. Here's how hello world in `.abell` files look like,

```html
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

**Outputs**
```html
<html>
  <body>
  I can render JavaScript! Look: Hello, WORLD 🌻
  </body>
</html>
```

.abell files are just like .html files but they let you write JavaScript inside double curly braces. This JavaScript is compiled and executed during the build time of your website.

<br/><br/>

[Get started with Abell](getting-started/)