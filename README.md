![alt text](https://raw.github.com/corysimmons/jeetframework.com/master/img/jeet_logo_sm.png "Jeet CSS Framework")

####Installation
`npm install -g stylus jeet`

####Standalone Usage
`stylus -u jeet -w -c`

####Node Usage Example

```js
var connect = require('connect')
    , stylus = require('stylus')
    , jeet = require('jeet');

var server = connect();

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(jeet());
}

server.use(stylus.middleware({
    src: __dirname
    , compile: compile
}));
```

In the example above, Jeet will be [implicitly included](https://github.com/mojotech/jeet/blob/master/jeet.js#L4) in your project's Stylus files. This means you don't have to declare `@import 'jeet'` anywhere and you'll still get Jeet functionality everywhere. If, for some reason, this doesn't suit your fancy, and you like `@import`ing stuff, you can explicitly disable this functionality by modifying the above line:

```js
.use(jeet({ implicit: false }));
```

####Syntax Quick Reference
[https://github.com/mojotech/jeet/blob/master/jeet/index.styl](https://github.com/mojotech/jeet/blob/master/jeet/index.styl)

####HTML Boilerplate
[https://github.com/mojotech/jeet-html](https://github.com/mojotech/jeet-html)

####Roots Integration
[https://github.com/mojotech/jeet-roots](https://github.com/mojotech/jeet-roots)

####Help! npm is throwing permission errors!
You're probably trying to `sudo` everything aren't you? That's bad juju! `sudo chown -R $USER /usr/local` will fix this. You might be interested in reinstalling all your global npm packages without sudo as well. Don't believe us? Here's a [blog post](http://howtonode.org/introduction-to-npm) on the subject by the maintainer of npm himself.

####License
Jeet is licensed under [GPL Version 3](http://opensource.org/licenses/GPL-3.0)
