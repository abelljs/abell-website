# {{ meta.title }}

You can change configurations, install plugins, change paths, and add variables from `abell.config.js` file in root.

## Full `abell.config.js` example

*Note: Every value is optional*

```js
module.exports = {
  sourcePath: 'theme', // Path that has .abell files. [Default: 'theme']
  contentPath: 'content', // Path that has .md files with content [Default: 'content']
  destinationPath: 'dist', // Output directory, static site will be built into this folder [Default: 'dist']
  globalMeta: { // [Default: {}]
    foo: 'bar' // Check out "Meta Variables Guide" for more info
  },
  plugins: ['abell-cool-plugin', 'plugins/my-local-plugin.js'] // Array with names of plugins, Default: []
}
```

## Changing dev-server ports

Dev server ports cannot be changed from `abell.config.js` but you can pass `--port <port>` flag to `abell serve` command.

```sh
abell serve --port 5000 --socket-port 3000
```

`--port <port>`: Changes dev-server port

`--socket-port <port>`: Abell requires another port to host a websocket server that handles the live-reload.