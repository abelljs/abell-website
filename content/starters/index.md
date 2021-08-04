{{
  const { meta, globalMeta, $root } = Abell;
}}

# {{ meta.title }}

{{ meta.description }}


## Starters
{{ meta.components.Themes(globalMeta.themes) }}


- If you **Deploy with Netlify**, a new repository will be created on your GitHub account and it will be deployed to [Netlify](https://www.netlify.com/). Later you can make changes in the deployed website by  [Committing to the New Repository](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line). (This method is recommended to quickly get a blog running and deployed).
- If you **Create Project Locally** with `create-abell-app`, You'll get a website running locally. Later, you can deploy to the platform of your choice.

---
## Table of Contents

- [Setting Up Project Locally](#setting-up-project-locally)
- [Folder Structure](#folder-structure)
- [Edit/Create/Update Post](#editcreateupdate-post)
---

## Setting Up a Project Locally

- `git clone <new-repository-url>` (You can skip this if you've created project locally with `create-abell-app`)
- `cd <project-name>` 
- `npm install` # to install dependencies (`create-abell-app` executes this by default)
- `npm run dev`  # to run a development server.

Now you can make changes in the website and development server will reload itself.

## Folder Structure

<pre>
<code class="hljs hljs-shell language file-system" style="line-height: 1.5;">
abell-starter-minima/
|
|- 📂 content/
|  |- 📂 hello-world/  # Slug of blog
|     |- 📄 index.md    # Content of blog
|     |- 📄 meta.json    # Meta information of blog
|  |- 📂 another-blog/
|     |- 📂 assets/      # Assets directory which can have images, videos related to blog
|       |- 📄 doggo.png
|     |- 📄 index.md
|     |- 📄 meta.json
|  
|- 📂 theme/
|  |- 📂 components/
|     |- 📄 Nav.abell  # component
|  |- 📂 [path]/
|     |- 📄 index.abell  # Layout of blog
|  |- 📄 index.abell     # index.html
|
|- ⚙️ abell.config.js    # Configurations of Abell
</code>
</pre>

With this structure, you will get a following files generated on `npm run build`.

<pre>
<code class="hljs hljs-shell language-sh file-system" style="line-height: 1.5;">
abell-starter-minima/
|
|- 📂 dist/
|  |- 📂 hello-world/         
|     |- 📄 index.html  # [path]/index.abell + hello-world/index.md
|  |- 📂 another-blog/         
|     |- 📂 assets/     # assets is copied as it is
|       |- 📄 doggo.png
|     |- 📄 index.html 
|  |- 📄 index.html     # index.abell
|
</code>
</pre>

Apart from these, you will find some more files and folders which are copied as it is. Also, some starters may not be dependent on markdown content so they may not have content directory and `theme/[path]/` directory at all.

## Edit/Create/Update Post

### index.md

To create a new post, you can create a folder with an `index.md` file in it, inside of the `content` directory. The name of the folder becomes the path to that post. (E.g. `content/hello-world/index.md` becomes `dist/hello-world/index.html` in the output)

### meta.json

The directory of the post can also have a `meta.json` (e.g. `content/hello-world/meta.json`) file.

```json
// content/hello-world/meta.json

{
  "$createdAt": "3 May 2020",
  "foo": "bar"
}
```

This meta information can be accessed from `index.md` and `theme/[path]/index.abell` using the `Abell.meta.foo` variable

```abell
<!-- theme/[path]/index.abell -->

<div>\{{ Abell.meta.foo }}</div> <!-- Prints `<div>bar</div>` -->
```

<br/><br/><br/>
This will get you started with your blog. If you want to know more about editing the theme, We suggest going through our [Tutorial to Create Your Portfolio from Scratch]({{$root}}/tutorial/)
