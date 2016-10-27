<img width="200px" src="http://jeet.gs/dist/img/jeet-logo-color.svg" title="Jeet Grid System">

<a href="https://gitter.im/mojotech/jeet"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=flat-square"></a>
<img src="https://img.shields.io/npm/v/jeet.svg">
<img src="http://img.shields.io/npm/dm/jeet.svg">

# Jeet 7.0.0 is here!

> 7.0.0 breaks a lot of stuff. Be sure to read [the migration guide](https://github.com/mojotech/jeet/wiki/Migrating-from-6-to-7)!

[Jeet](http://jeet.gs) is a simple fractional grid system for **[Sass](scss)** and **[Stylus](styl)**.

Learn the [API](docs) in minutes and begin tossing together grids.

Check this out:

```fish
npm install -D jeet
```

```scss
@import 'node_modules/jeet/scss/index';

.container {
  @include center();
}

.container div {
  @include column(1/3);
}
```

Jeet functions accept fractions (or float numbers) and generates a percentage width and gutter for grids. We're able to do this while maintaining a consistently-sized, infinitely-nestable, gutter (so long as you provide the parent element's fraction as context).

The API is documented in Sass, but we've worked hard to make the API *very* similar in both preprocessors. `@include column(1/2);` in SCSS would be `column(1/2)` in Stylus, ya dig?

Explore [Official Integrations](docs/integrations) to see some community-backed plugins to your favorite frameworks and libraries.

#### Webpack Users

Please find an example of a working webpack configuration for stylus below. Make sure to **NOT** include `@import "jeet"` in your .styl-files with this setup.

```javascript
// file: example.styl
// note that you should NOT include jeet with @import "jeet"
body {
  div {
    color: tint(#000, 42%);
  }
}
```

```javascript
// file: package.json
{
  "name": "stylus-test",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "build": "webpack --progress -config webpack.config.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "jeet": "^7.0.0",
    "webpack": "^1.13.2",
    "style-loader": "^0.13.1",
    "css-loader": "^0.25.0",
    "stylus": "^0.54.5",
    "stylus-loader": "^2.3.1",
    "extract-text-webpack-plugin": "^1.0.1"
  }
}
```

```javascript
// file: webpack.config.js
var path = require('path');
var webpack = require('webpack');

// extract text into separate files
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// include the jeet stylus plugin
var jeet = require('jeet');

// define the app directory to include in compilation
var app_directory = path.resolve(__dirname);

module.exports = {
	entry: path.resolve(__dirname, 'example.styl'),
	output: {
		path: path.resolve(__dirname),
		filename: 'example.css.js'
	},
	module: {
		loaders: [{
				// parse stylus styles
				test: /\.styl$/,
				// use some stylus plugins
				use: [jeet()],
				// extract the style into separate files
				// IMPORTANT: style and css!stylus must be separated, it will not
				// work otherwise
				loader: ExtractTextPlugin.extract('style', 'css!stylus'),
				// specify with directories to include
				include: [app_directory]
			}
		]
	},
	plugins: [
    // the extract-text-webpack-plugin is used to pull the css into
    // a separate file
		new ExtractTextPlugin('example.css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	]
};
```
The files can then be processed by running `npm run build`.


#### Browser Support

- IE9+ without help. IE8+ with Selectivizr. Obviously always use Autoprefixer.
