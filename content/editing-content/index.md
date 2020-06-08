# {{ meta.title }}

With Abell, you can create websites that are based on markdown content. This content can be created/edited/deleted from `./content/` directory.

<br/>
An example `./content/` directory will look something like,

```md
content
  |- my-cool-blog
      |- assets
          |- blog-thumbnail.png
      |- index.md 
      |- meta.json
```

**meta.json** - In this file, you can define variables that can be accessed inside `index.md` and `[$path]/index.abell` with `\{{ meta.<variableName> }}` (e.g `\{{ meta.foo }}`). [Meta Variables Guide](#meta-json-guide) gives a detailed overview of this file.

<br/>

**index.md** - This is where the main content goes, The content is written in [Markdown format](https://en.wikipedia.org/wiki/Markdown). In addition to default markdown, you can also use HTML wherever needed.

<br/>

**assets** - You can have any static file in assets directory and it will be copied into build as it is. This folder is mainly to let you have blog specific images, videos or other media. (If you have an image that you want to use throughout all blogs, it should be added to `theme/images/` directory instead)

<br/>

With the above setup, you will have your blog running at `http://localhost:5000/my-cool-blog/`

<br/>

In case you want a blog to be at, `http://localhost:5000/webperf-blogs/my-cool-blog/`

You can have a directory structure,

```md
content
  |- webperf-blogs
      |- my-cool-blog
          |- assets
              |- blog-thumbnail.png
          |- index.md 
          |- meta.json
```

So your directory structure from content is maintained in the output website.