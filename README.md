![alt text](https://raw.github.com/CorySimmons/jeetframework.com/master/img/jeet_logo_sm.png "Jeet CSS Framework")

[Documentation](http://jeetframework.com) | [Demos / Screencasts](http://jeetframework.com/demos) | NPM Package: [Github](https://github.com/CorySimmons/jeet-npm), [NPM](https://npmjs.org/package/jeet)

Installation:
---

- Install [NodeJS](http://nodejs.org)
- `npm install -g jeet`
- `jeet -h`

```
Usage: jeet [options] [command]

Commands:
    watch                   watch the current path and recompile CSS on changes
    create <name>           create a new jeet project with the given name

    Options:
        -h, --help          output usage information
        -V/-v, --version    output the version number
```

**Note:** If you modify `--outpath` or `--name` you will have to reflect those changes in your `index.html` yourself.

LiveReload Installation
---

**Note:** *This only works with the Jeet NPM Package or the Roots installation. LiveReload support of various Stylus libraries is touchy at best and requires special tools.*

- If you're using Sublime Text, disable the Sublime Text LiveReload plugin
- Install a LiveReload [browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
- Once `jeet watch` is working it will notify you that LiveReload is active, open your browser and activate your LiveReload browser extension (usually just by clicking on it).

CLI Usage
---

- `jeet create foo` or `jeet create .` to dump Jeet into current dir
- `cd foo`
- `jeet watch`

`jeet create` will fetch the latest copy of Jeet from the repo. If it already has the latest copy or you don't have internet access, it will not fetch it and simply use the most recent copy of Jeet the package is equipped with. This makes project creation very fast and makes sure you have the latest/greatest version of Jeet created each time.

Jeet will watch your project for changes to `.styl` files within `/css`. It will concatenate and minify that CSS to `css/custom.css`. Jeet will also watch your `/js` automatically concatenate and minify most of your JavaScript (the ones that aren't already included as oldIE polyfills) including your `plugins.js`, `main.js`, and any new `.js` files in your `/js` dir.

Lightweight Watcher Installation and Usage
---

- Install [NodeJS](http://nodejs.org)
- `npm install -g stylus`
- `git clone https://github.com/CorySimmons/jeet.git foo`
- `cd foo`
- `./watch` or the longhand version: `stylus -w -c css/custom.styl`
- Keep in mind your JavaScript won't be automatically minified. Use the NPM package for that.

Usage with Roots
---

[Roots](http://roots.cx) is a static site compiler that cooperates nicely with Jeet. It makes creating and watching your project a smoother and less manual process, and adds loads of features you can take advantage of like precompiled templates, a variety of supported languages (Jade, Coffeescript, etc.), dynamic content for building things like blogs, and LiveReload in development. To install Roots and the Roots Jeet template follow the steps below:

- `npm install roots -g`
- `roots template add jeet https://github.com/jenius/jeet-template`

Now to create a new Roots project with the Jeet template and grid, follow these steps:

- `roots new your_project_name --jeet`
- `cd your_project_name`
- `roots watch`

Jeet 2
---

Jeet 2 is still available under the [jeet2 branch](https://github.com/CorySimmons/jeet/tree/jeet2)

Jeet 2 NPM package is under the [jeet2 branch](https://github.com/CorySimmons/jeet-npm/tree/jeet2) of the NPM repo

SCSS/SASS/LESS
---

We're dropping official support for other preprocessors but I expect someone ([@ozamorowski](https://github.com/ozamorowski)) will fork and port Jeet 3 to SCSS/SASS sooner than later. Anyone is welcome to step up and port their own, we'll link to it here.