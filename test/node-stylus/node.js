var fs = require('fs');
var stylus = require('stylus');
var jeet = require('../../index');

var fileIn = fs.readFileSync('test/node-stylus/style.styl', 'utf8');

stylus(fileIn)
  .use(jeet())
  .render(function (err, css) {
    if (err) throw err;
    console.log(css)
  });
