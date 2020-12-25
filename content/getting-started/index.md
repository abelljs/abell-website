{{
  const { meta, globalMeta, $root } = Abell;
}}

# Getting Started

This section is an overview of Abell Documentation and will help you navigate to the page you need.

<h2 class="text-m">Different Ways to Learn Abell</h2>

<div class="row row-responsive">
<a class="docs-tile" href="{{ $root }}/tutorial/create-portfolio/">Learn by doing with <strong>Tutorial</strong></a>
<a class="docs-tile" href="{{ $root }}/guide/syntax-guide/">Start with Concepts from <strong>Syntax Guide</strong></a>
<a class="docs-tile" target="_blank" href="https://codesandbox.io/s/abell-playground-wcdq2?file=/theme/index.abell">Play around on <strong>CodeSandbox <i class="i-external-link text-xs"></i></strong></a>
<a class="docs-tile" href="{{ $root }}/starters">Get going with <strong>Starter Themes</strong></a>
</div>

<br/>

---


## Requirements

- Abell requires [Node.js 8 or higher](https://nodejs.org) installed.
- Though it is not "required", if you're using VSCode, it is recommended to have [Abell Language Features Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=saurabh.abell-language-features) for syntax highlighting of `.abell` files.

## Stuck?

- If you're stuck anywhere in the documentation, you can ask question at [Abell's GitHub Discussions](https://github.com/abelljs/abell/discussions/categories/q-a)
- If you have any suggestion or feedback that can help us in improving documentation, do create an issue at [The GitHub Repository of This Site](https://github.com/abelljs/abell-website)


## Terms used in Documentation

- **Abell Components** - Abell Components are the `.abell` files with content wrapped inside `<AbellComponent>` tag. Check out [Abell Components Guide](../guide/syntax-guide/#abell-components) for more information. (Usually named as `CamelCased.abell`)
- **Abell Pages** - Abell Pages are close to HTML, they have `<html>` tag and these files eventually become `.html` page in output. (Follow `lowercase.abell` format)
- In documentation, you will find reference of `npx` command which comes along with the Node.js and NPM. It executes the scripts directly.


## Plugins and Libraries

We got some plugins and libraries to make the job even easier! 

Check out [List of Plugins and Libraries of Abell &#x2192;]({{$root}}/plugins/)

- Want to build your own plugin? Check out our blog on [How to Build Abell Plugins]({{$root}}/blog/how-to-build-plugins/)
- Already built a plugin? Add it to the list at [abelljs/abell-website/tree/main/content/plugins/index.md](https://github.com/abelljs/abell-website/tree/main/content/plugins/index.md)

## Changelog

From v0.4.0, we follow [Semantic-Versioning](https://semver.org/) which means, there will not be any breaking change until v1.0.0.

Check out [Changelog of Abell]({{$root}}/changelog/).

## Contributing

We are an open-source project and completely depend on open-source community for contribution, check out our [Contributing to Abell Guide]({{$root}}/contributing/) for more information on how to contribute.