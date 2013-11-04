### 4.0.1

- Bug Fixes
    - bp(w = 705px) to bp(w = breakpoint) to inherit settings.styl breakpoint setting
    - Remove align() block duplication in utilities.styl

### 4.0.0

- Core
    - Remove watcher (use [Roots](http://roots.cx))
    - Remove template (use [jeet-roots](https://github.com/mojotech/jeet-roots)) which included [these files](https://github.com/mojotech/jeet/commit/153560d04b7eac25f4afe71ca2e233a54988823b)
    - Convert to Stylus library only
    - Update package.json to reflect npm distribution of Jeet
- Enhancements
    - Make center() padding default to 0
    - Add colons to separate prop: val
    - Prefix private functions with hyphens
- Breaking Changes
    - Jeet 3's npm package (`jeet create`, `jeet watch`) will no longer work with this version. For that kind of functionality, it's recommended you use [Roots](http://roots.cx) in combination with our polyfilled [jeet-roots](https://github.com/mojotech/jeet-roots) template. Visit [the repo](https://github.com/mojotech/jeet-roots) for installation/usage instructions.
- Migration Strategy
    - Since most of the Stylus is identical to 3.5.0, functions won't change (for instance `col(1/3)` won't suddenly do something weird). After upgrading your npm package (`npm install -g jeet`) you can navigate to your Jeet 3 projects, `cd` to your `css/` dir, and run `stylus -u jeet -w` to use the same Jeet library and edit away. Effectively 4.0.0 drops support for `jeet create`/`jeet watch` in favor of making Jeet a more modular Stylus library you can plug into almost any project.
    - If you really enjoyed the `watch` command, LiveReload, and all that nice stuff, you should really install [Roots](http://roots.cx) (`npm install -g roots`), add our [jeet-roots](https://github.com/mojotech/jeet-roots) repo as a [Roots template](roots.cx/docs/#templates) (it's easy), and run `roots watch`. Boom! All kinds of language support/compilation, LiveReload, and some amazing deployment methods to Heroku or Nodejitsu.
