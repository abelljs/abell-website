{{
  const { meta, globalMeta, $root } = Abell;
  const { Themes } = meta.components
}}

# {{ meta.title }}

{{ meta.description }}

**Abell** is a JavaScript based static-site-generator to help you build fast and secure websites from static data like JSON, Markdown, or CMS. 

To know more about what Abell is, check out [Why Abell](https://abelljs.org/#why-abell) section on our Home Page.

There are various ways you can approach this documentation,
- If you prefer to **learn by doing**, check out 
  - [Create Your Blog with Abell in 5 mins]({{$root}}/tutorial/create-blog)
  - [Building Twitter Clone with Abell]({{$root}}/tutorial/create-twitter-clone).
- If you prefer to **learn from concepts**, try [A Conceptual Guide of Abell]({{$root}}/docs/concepts).
- If you prefer to **learn by playing around the code**, you would like our [Abell Playground on CodeSandbox &#x2197;]() .

---

or If you pref- JUST GIVE ME A DAMN CODE! Copy paste the following lines in your terminal to get an Abell blog running locally.

Requires [Node.js 10 or higher](https://nodejs.org) installed (`npx` comes along with Node.js).

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

Once Installtion is done, you can edit content from `content/` directory in the root folder. Check out [Editing Content Guide]({{ meta.$root }}/docs/editing-content/)
<br/><br/>
