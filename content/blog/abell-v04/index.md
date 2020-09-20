{{ const { meta } = Abell }}
# {{ meta.title }}

{{ meta.description }}

Published on **{{ meta.$createdAt.toDateString() }}** by *[{{ meta.author.name }}](https://twitter.com/{{ meta.author.twitter }})*

<br/>

I, and pretty sure a lot of us, love JavaScript! We got React, Vue, Next, Svelte, Nuxt, and so many other amazing tools to build websites. Though these are all great tools, I've always felt one thing missing, and that is control over the output. These tools are definitely useful for building highly dynamic sites but do we really need to complicate things for not-so-dynamic or almost-static sites?

"Yeah yeah Just build it in Vanilla HTML, CSS, JavaScript" but vanilla HTML, CSS, JavaScript has a very small usecase because of its limitations. Components, Ability to loop, using conditions, These are the common things today that we need in nearly every blog, documentation site, and portfolio.

I love tools like Jekyll, Hugo, Eleventy, Hexo for this reason. They are closer to HTML, CSS, JavaScript and you can guess what they are going to output from the code you write. While Abell does similar things as these tools do, it tries to make these common programming and structural patterns more familiar to our JavaScript fam. 

This allows us to build fast websites while offering a familiar syntax plus the components allow us to scale better by modularizing the HTML, CSS, JavaScript.

Here's a Hello World code of Abell,

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

This code outputs:
```html
I can render JavaScript! Look: Hello, WORLD 🌻
```

You can check out our [Syntax Guide]({{ Abell.$root }}/guide/syntax-guide/) to know more about the Syntax or [Getting Started]({{Abell.$root}}/getting-started/) to get started with Abell.

<br/><br/>

Today, we're super excited to announce Abell v0.4 🌻 This version includes some absolutely neccessary features like Abell Components, Bundling, and adds support for Source Plugins 🎉. Apart from these features, v0.4 is a complete rewrite of Abell and creates a base for us to add new features in future (lots of new things coming!).

## What's new in Abell v0.4?

### Abell Components and Bundling

Here's a sample `Footer.abell` component
```abell
<AbellComponent>
<template>
  <footer id="main-footer">
    Built with Abell, <span id="year"></span>
  </footer>
</template>

<!-- 'inlined' attribute adds the CSS content to `head` tag of the parent page -->
<style inlined>
  footer#main-footer {
    text-align: right;
    padding: 10px;
  }
</style>

<!-- bundle attribute adds the CSS/JS to given file in the output -->
<script bundle="footer.js">
  document.querySelector('footer#main-footer #year').innerText = new Date().getFullYear();
</script>
</AbellComponent>
```

Check out [Abell Components Section in Syntax Guide]({{Abell.$root}}/guide/syntax-guide#abell-components)

When `inlined` or `bundle` is not defined, the content is added into a common main bundle.


### Creating Source Plugins is now Easier than Ever 🎉

Here's an example of source plugin:
`plugin/index.js`
```js
// For Source Plugins
function beforeBuild(programInfo, { createContent }) {
  // slug, title, content, createdAt are required values
  const sourceNode = {
    slug: 'blog-from-plugin',
    title: 'Hi, This blog comes from plugin',
    content: `# Hello`,
    createdAt: new Date('13 May 2019'),
    modifiedAt: new Date('13 May 2019'),
    foo: 'bar' // can be accessed with meta.foo
  };
  
  createContent(sourceNode);
}

module.exports = { beforeBuild }
```

Now `beforeBuild` function gets a createContent function from parameters. You just have to pass `slug`, `title`, `content`, `createdAt` to the function and Abell handles everything on its own 🎉 Check out our [How to Build Abell Plugins Blog](../how-to-build-plugins) for detailed guide.

### Better Error Messages

Abell now adds line number, column name, name of the abell file to the error stack 🎉

```md
theme/index.abell:75
 hehe 
 ^

ReferenceError: hehe is not defined
    at theme/index.abell:75:2
    at Script.runInContext (vm.js:133:20)
    at execute (/home/saurabh/Desktop/projects/abellorg/abell-website/node_modules/abell-renderer/src/execute.js:23:34)
    at compile (/home/saurabh/Desktop/projects/abellorg/abell-website/node_modules/abell-renderer/src/compiler.js:30:29)
    at Object.render (/home/saurabh/Desktop/projects/abellorg/abell-website/node_modules/abell-renderer/src/index.js:73:25)
```

## Complete Changelogs

- [Changelog of abelljs/abell](https://github.com/abelljs/abell/releases/tag/v0.4.0)
- [Changelog of abelljs/abell-renderer](https://github.com/abelljs/abell-renderer/releases/tag/v0.2.0)

## Future of Abell

Every version from v0.4.0 will follow [Semantic-Versioning](https://semver.org). Which means, it will not have any breaking changes until v1.0.0 🎉 So though it may have some weird bugs since Abell is not completely ready, it will definitely not break things that are already working.

We have some issues open in [Abell's GitHub Repository](https://github.com/abelljs/abell) which will give a better idea of what we will be working on in future.

## Learn Abell

This is our documentation site. [Getting Started]({{Abell.$root}}/getting-started/) will help you get started with learning Abell. If you're not so patient, you can use `create-abell-app` to create new project and play around it.
```sh
npx create-abell-app my-abell-app
```

## Sponsor Abell 🤗

Sponsors will have name of their product logo and name in our [Index Page of Documentation]({{Abell.$root}}). You can contact at [saurabhdaware99@gmail.com](mailto:saurabhdaware99@gmail.com) and check out [Patreon Account](https://www.patreon.com/saurabhdaware).

If you are an individual or a company who would like to back us with a one-time payment, you can [Buy me a Coffee](https://www.buymeacoffee.com/saurabhdaware)



Thank you for reading! Do drop a ⭐️ in GitHub Repository of [Abell](https://github.com/abelljs/abell).

and Share this article with your friends🌻

<br/><br/>
&nbsp; &nbsp;<a href="https://twitter.com/intent/tweet?text=Abell v0.4 is Released! Check out this blog by @AbellLand at https://abelljs.org/blog/abell-v04/" class="github-contribute-button shadow" style="display: inline-block;">
  <img width="20" style="position: relative;top:4px;" alt="Twitter Logo" src="{{ Abell.$root }}/static/icons/twitter.svg"/>&nbsp; Share this Article on Twitter
</a>
<br/><br/>