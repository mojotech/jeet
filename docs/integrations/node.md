### Node.js

- https://nodejs.org/en/docs/
- http://stylus-lang.com/docs/js.html

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
