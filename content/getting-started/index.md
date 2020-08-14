{{
  const { meta, globalMeta, $root } = Abell;
}}

# {{ meta.title }}

{{ meta.description }}

**Abell** is a JavaScript based static-site-generator to help you build fast and secure websites from static data like JSON, Markdown, or CMS.  Check out [Why Abell](https://abelljs.org/#why-abell) section on our Home Page for more info.


## Approaching Documentation

If you want to **quickly get blog running**, check out [Creating Blog from Starter Themes]({{$root}}/starters/)

To learn Abell, you can approach this documentation in various ways
- If you prefer to **learn by doing**, check out [Tutorial to Create Your Portfolio from Scratch]({{$root}}/tutorial/create-portfolio/)
- If you prefer to **learn from concepts**, try [A Conceptual Guide of Abell]({{$root}}/guide/).
- If you prefer to **learn by playing around the code**, you would like our [Abell Playground on CodeSandbox &#x2197;](https://codesandbox.io/s/abell-playground-wcdq2?file=/theme/index.abell) .

---


## Requirements

- Abell requires [Node.js 8 or higher](https://nodejs.org) installed.

Though it is not "required", if you're using VSCode, it is recommended to have [Abell Language Features Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=saurabh.abell-language-features) for syntax highlighting of `.abell` files.


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

From v0.4.0, we'll be following [Semantic-Versioning](https://semver.org/) which means, now there will not be any breaking change until v1.0.0.

Check out [Changelog of Abell]({{$root}}/changelog/).

## Contributing

We are an open-source project and completely depend on open-source community for contribution, check out our [Contributing to Abell Guide]({{$root}}/contributing/) for more information on how to contribute.