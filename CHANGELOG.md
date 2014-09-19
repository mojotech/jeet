### 6.1.2
- Fixes
  - Critical bug in Scss port that caused nested columns to have incorrect gutters.
  - `column-width()` and `column-gutter()` no longer ignore column nesting.

### 6.1.1
- Fixes
  - By adding `cycle`/`uncycle` to `span` we are now able to clear floated elements so unequal height columns display as expected.

### 6.1.0
- Enhancements
 - Add `important` parameter to `edit()` mixin
   - Defaults to `false`. When set to `true` it adds the `!important` flag to the CSS to force elements with backgrounds already set to show the debug grid.

### 6.0.0
- Enhancements
  - Scss and Stylus version now output identical CSS
  - Add fully comprehensive inline documentation
  - All API functions namespaced with `jeet-`
  - All settings variables are now `!default` values so they can be overidden
  - Move `$width` to `_settings` for easier modification
  - Add uncenter mixin
  - Add alias for 'edit()' mixin (`debug()`) and add color parameter
  - Add `column-width()` and `column-gutter()` functions
  - Add tests for all API methods
  - Add a 3.3 enhanced version of the 'jeet-reverse()' function
  - Remove padding from `span()` and `column()` mixins
- Fixes
  - Algorithm for reversing list
  - Spelling errors
  - Remove the cycle and uncycle parameters from span
- Breaking changes
  - Remove IE7 support for edit
  - Remove prefixing from jeet. Please use something like [autoprefixer](https://github.com/postcss/autoprefixer) for adding vendor prefixes

### 5.3.0
- Enhancements
  - Drop support for IE6 to clean some bloat

### 5.2.11
- Fix
  - Repair `cycle`/`uncycle`

### 5.2.10
- Fix
  - Un-npmignore-ing .gitignore so the npm package can read the gitignore data

### 5.2.9
- Fix
  - Remove site stuff from npm package

### 5.2.8
- Bugfix
  - Fix `align` so it doesn't make items blurry by adding `transform-style: preserve-3d` to it

### 5.2.7
- Enhancements
  - Revert SCSS global variables to normal SCSS variables since maps have really poor support unless you're on a recent version of SCSS (which most people aren't).

### 5.2.6
- Enhancements
  - Add Stylus as dependency of Jeet so it auto-installs

### 5.2.5
- Bugfix
  - You can't extend placeholders within media queries in any pre-processor so when people were trying to use `col()`, `span()`, or `center()` (all of which made use of a clearfix placeholder) they weren't actually getting clearfixed. This fixes that bug by turning the placeholder into a mixin. This is a slightly breaking change but not big enough to warrant a major release.

### 5.1.5
- Bugfix
  - Stylus block level mixins break when `display: block` occurs within one. By using `unquote` we're able to apply a temporary bugfix until Stylus and other libraries are repaired.

### 5.1.4
- Core
  - Convert namespace from `jeet-` to hash maps for Stylus and SCSS
- Migration Strategy
  - Update Stylus and SCSS global variable references from `jeet-` to `jeet.`, and `$jeet-` to `jeet(...)` respectively.

### 5.1.3
- Core
  - Add SCSS port
  - Migrate preprocessor ports to own folders

### 5.0.2
- Core
  - Update Jeet to stop being implicitly loaded as this breaks the ability to override settings.
  - Update README for a more thorough quick start guide.

### 5.0.1
- Core
  - Add custom gutter sizing relative to containing unit.

### 5.0.0
- Core
  - Jeet 5 is the final step in making Jeet a perfectly modular Stylus component to be used anywhere libs such as [nib](https://github.com/visionmedia/nib) and [Axis](https://github.com/jenius/axis) are accepted. It pulls a lot of extra stuff out and turns Jeet exclusively into the finest Stylus grid system available.
  - Drop typography
  - Drop colors
  - Drop `bp()`
  - Namespace things
  - Add testing
  - Add Travis CI
  - Add David DM
  - Package for Yeoman and Bower
  - Add placeholders where appropriate
  - 2 space indents rather than 4
  - Replace snake_case with dash-case for namespaced variables. We're talking CSS here. What are we, animals?!
- Breaking Changes
  - By dropping typography, sites that use Jeet's typography system will no longer have typography
  - By dropping colors, sites that were making use of these variables in `_settings.styl` will no longer have them defined
  - By dropping `bp()`, sites that used `bp()` will now not be responsive
- Migration strategy
  - Jeet's typography will be exported to the [Typographic](https://github.com/corysimmons/typographic) npm package, so just include that lib when compiling
  - Copy/paste your color variables to anywhere they'll be compiled before they're used
  - Include the [Rupture](https://github.com/jenius/rupture) lib and replace occurrences of the `bp()` mixin with Rupture equivalents

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
