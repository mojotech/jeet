### 4.1.0

- Core
    - Remove Autoprefixer integration so Jeet is primarily a collection of .styl files. While trying to port Jeet to a plethora of applications, I noticed it most of these applications that claimed to have Stylus support were expecting pure Stylus libraries - not a script that performed any other actions. Most of these applications (Roots, Grunt, Ruby) were based around integrating libraries in the [nib](https://github.com/visionmedia/nib).
    - Prefixed partials with underscore for consistency across ports. Doesn't break the API.
- Breaking Changes
    - By removing Autoprefixer integration 4.0.x projects that were relying on Autoprefixer for non-Jeet elements (e.g. `transform: rotate(90deg)`) will need to be prefixed.
- Migration Strategy
    - The easiest migration would be to use Jeet in unison with some other prefixing library (like nib). This will heavy-handily do vendor prefixing (add vendor prefixing to everything as opposed to just the prefixes required) but should work fairly seamlessly via `stylus -u jeet nib -w`
    - For a cleaner, better, migration, try to get Autoprefixer in your project's pipeline some other way. We'll keep adding pipelines to do this for things like pure HTML (Grunt), Rails, Node, Roots, etc. but if you end up figuring out a nice way, feel free to contribute or drop us a link and we'll add it to the README.
    - Hand prefix partials with underscores in `jeet/` and `jeet/index.styl`
- Bug Fixes
    - Update index.styl quick reference to be accurate to API

### 4.0.2

- Bug Fixes
    - Version lock autoprefixer-stylus
- Enhancements
    - Version lock stylus

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
