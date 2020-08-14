{{ const { meta } = Abell }}

# How to Build Plugins

A tutorial on how to build Abell Plugins

Published on **{{ meta.$createdAt.toDateString() }}** by *[{{ meta.author.name }}](https://twitter.com/{{ meta.author.twitter }})*

Hey there! Abell v0.4 adds some super cool things to help you build plugins but before that, lets see how you can setup a new plugin.

---
- [Setup new Plugin](#setup-new-plugin)
- [Exploring Code](#exploring-code)
- [Creating Source Plugin](#creating-source-plugin)
- [Deploy your Plugin](#deploy-your-plugin)
---

## Setup new Plugin

You can use plugin-starter repository as a starter for your plugin. [https://github.com/saurabhdaware/abell-plugin-starter](https://github.com/saurabhdaware/abell-plugin-starter).

**Step 1.** Clone Starter
```sh
git clone https://github.com/saurabhdaware/abell-plugin-starter
```

**Step 2.** Delete `.git` folder to remove git history.

**Step 3.** Run Abell Build
```sh
npm run build
```

<br/>

You will see these logs in your terminal.

```sh
abell-plugin-starter$ npm run build

> abell-plugin-starter@1.0.0 build /home/saurabh/Desktop/projects/abellorg/abell-plugin-starter
> abell build

>> Plugin BeforeBuild: Executing plugin/index.js
I am executed before the build starts.
I can also add new blog, look!

>> Abell Build Started

...Built blog-from-plugin/index.html
...Built index.html
>> Plugin AfterBuild: Executing plugin/index.js
I am executed after the build

>>> Build Success (Built in 25ms) 🌻
```

## Exploring Code

In `plugin/index.js` file, you will see that two functions are exported from the file.

```js
function beforeBuild(programInfo, { createContent }) {
  // do something before the build
}

function afterBuild(programInfo) {
  // do something after build
}

module.exports = { beforeBuild, afterBuild }
```

Either of these functions are optional so you can export the one that you want to use and remove the other.

### When do you need `beforeBuild`?

- Source Plugins. `createContent` function in beforeBuild, allows us to create new blog from plugin.

### When do you need `afterBuild`?

- In plugins like sitemap, rss feed, anything that creates a file based on information. It is ideal to go for `afterBuild`.
- When you don't know what to use, use `afterBuild`.


## Creating Source Plugin

In our starter, if you open `plugin/index.js`, you will see something like:

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

- `slug` - slug of the blog. In given example, blog can be accessed from [https://localhost:5000/blog-from-plugin/](https://localhost:5000/blog-from-plugin/)
- `title` - Title of the blog
- `contentType` (optional) - Type format of the given content. `html` or `md`. When not defined, it considers content to be markdown content. 
- `content` - Content of the blog. (Markdown or HTML)
- `createdAt` - Date of creation of the blog. (Overrides `$createdAt` property of `Abell.meta.$createdAt`).
- `modifiedAt` - Date of modification of the blog. (Overrides `$modifiedAt` property of `Abell.meta.$modifiedAt`).

Apart from these properties, you can add any other values in the object. For example `foo: 'bar'` from our example can be accessed from `Abell.meta.foo` variable in the `theme/[path]/index.abell`


As an example, you can refer to [abell-source-devto](https://github.com/abelljs/official-plugins/blob/main/abell-source-devto/plugin/index.js)'s code.

## Deploy your Plugin

You can check if your plugin is working correctly by running `npm run build`. If everything works well, we can go ahead to deploying this plugin as an NPM package.

### Deploy Checklist
- In `package.json`, "main" points to the entry file of plugin. which is `plugin/index.js` in given starter.
- In `package.json`, "name" value has the name of your plugin. See [Naming Conventions](#naming-conventions)
- Make sure, `theme`, `content`, `abell.config.js` are present in `.npmignore`. We only need plugin in NPM, other files are there to check if plugin is working.
- Run `npm publish --dry-run` and check if package only has `package.json`, `README.md`, `LICENSE`, and files related to your plugin.

### Deployment

- `npm login` if you are not already logged in.
- `npm publish` to publish over NPM.

Now to use your plugin, user can `npm install --save-dev <your-plugin-name>` and add your plugin name to `plugins` array in their `abell.config.js` file.