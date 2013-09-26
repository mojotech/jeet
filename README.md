Jeet 3
---

Refer to http://jeetframework.com for usage docs.

Installation
---

1. Install [NodeJS](http://nodejs.org)
2. `npm install -g stylus axis-css`
3. `cd ~/your_empty_project_directory`
4. `git clone https://github.com/CorySimmons/jeet.git .`
5. `./watch`
6. Hack away at `index.html` and `css/custom.styl`

Usage with Roots
---

[Roots](http://roots.cx) is a static site compiler that cooperates nicely with Jeet. It makes creating and watching your project a smoother and less manual process, and adds loads of features you can take advantage of like precompiled templates, a variety of supported languages (Jade, Coffeescript, etc.), dynamic content for building things like blogs, and LiveReload in development. To install Roots and the Roots Jeet template follow the steps below:

- `npm install roots -g`
- `roots template add jeet https://github.com/jenius/jeet-template`

Now to create a new Roots project with the Jeet template and grid, follow these steps:

- `roots new your_project_name --jeet`
- `cd your_project_name`
- `roots watch`

Note
---

We're currently working on another npm package and will be expanding on the doc with screencasts and such. Jeet 2 is still available under the [Jeet2 branch](https://github.com/CorySimmons/jeet/tree/jeet2) so you can download it and use `jeet watch` in those project directories.

Also, we're dropping official support for SCSS but I expect someone (*cough* [@ozamorowski](https://github.com/ozamorowski) *cough*) will fork/port Jeet 3 sooner than later.