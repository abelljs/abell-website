# Blog

Offical Blog from Abell Team

{{
  Abell.contentArray
    .filter(meta => meta.$path.includes('blog/'))
    .map(meta => `
      <article class="blog-list-item">
        <a href="${meta.$root}/${meta.$path}/">
          <h2>${meta.title}</h2>
        </a>
        <p class="date">
          ${meta.$createdAt.toDateString()} by <a target="_blank" rel="noopener" href="https://twitter.com/${meta.author.twitter}">${meta.author.name}</a>
        </p>
        <p class="description">${meta.description}</p>
      </article>`)
}}