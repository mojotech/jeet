# Jeet - Stylus

### Installation

- Install [NodeJS](http://nodejs.org)
- `npm install -D jeet`

### Usage Example

```fish
$ stylus -w style.styl
```

```styl
// style.styl
@import 'node_modules/jeet/styl'

debug()

section
  center()

aside
  column(1/3)

article
  column(2/3)
```

```html
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <section>
      <aside>Sidebar</aside>
      <article>Content</article>
    </section>
  </body>
</html>
```

### Namespacing and Aliases

Jeet doesn't namespace or alias by default anymore (to keep the API simple/clean). If you need namespacing or aliasing, you can wrap mixins within namespace/alias mixins.

```styl
// Namespace Example
jeet-column()
  column(arguments)

// Alias Example
col()
  column(arguments)
```

### Node.js

The Stylus flavor of Jeet exposes itself to the [Stylus JS API](http://stylus-lang.com/docs/js.html).

```js
// jeet-node.js
var fs = require('fs');
var stylus = require('stylus');
var jeet = require('jeet');

var code = fs.readFileSync('style.styl', 'utf8');

stylus(code)
  .use(jeet())
  .render(function (err, css) {
    if (err) throw err;
    console.log(css)
  });
```
