# {{ meta.title }}

## "Hello, World!" in Abell

To execute `.abell` files, we need to have following files in directory

```md
src/
  |- index.abell
abell.config.js
```
<br/>

In `./abell.config.js`,
```js
module.exports = {
  sourcePath: 'src'
}
```
This will tell Abell to look into `src` directory for `index.abell`.
<br/><br/>

Then in `./src/index.abell`,
```html
\{{ const greet = 'Hello, World!' }}
<html>
  \{{ greet }}
</html>
```

And that's it 🎉 This is the minimal setup needed to execute abell. Now you can install `abell` and run the server. 
<br/><br/>

Running this will run the abell live server,
```sh
npx abell serve
```
<br/>
or you can, `npm install --save-dev abell` and add `abell serve` script to `package.json`

```json
{
  // ...
  "scripts": {
    "dev": "abell serve",
    "build": "abell build"
  }
}
```

With this, you can run `npm run dev` to run dev-server and `npm run build` to build for production.

<br/>