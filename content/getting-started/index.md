{{
  const { Themes } = meta.components
}}

# {{ meta.title }}

This section will help you setup the initial blog and get started with Abell.

Abell requires [Node.js 8 or higher](https://nodejs.org) installed.

<pre>
<code class="hljs language-md shadow" style="word-spacing: 4px;line-height: 40px;">npx create-abell-app my-cool-blog<br/>cd my-cool-blog<br/>npm run dev</code>
</pre>

## Select Starter Template

*Note: We'll be adding more starters when Abell gets stable.*

{{ Themes(globalMeta.themes) }}

### - Local Setup
```md
git clone https://github.com/:github-username/:project-slug

cd {project-slug}

npm install

npm run dev
```

Once Installtion is done, you can edit content from `content/` directory in the root folder. Check out [Editing Content Guide]({{ meta.$root }}/editing-content/)
<br/><br/>