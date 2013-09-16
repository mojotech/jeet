![alt text](https://raw.github.com/CorySimmons/jeet/master/jeet_logo.jpg "Jeet CSS Framework")

Version 2
-

Jeet takes the best of the open source HTML5/CSS3 World and combines it into a lightweight, semantic, responsive, and blazing fast framework. You can use Stylus, or SCSS, **OR BOTH!**

[Check out mini-demos at http://jeetframework.com](http://jeetframework.com/)

[Watch a screencast on Jeet 2](http://www.youtube.com/watch?v=mf-XRFTMI7M)

Features
=

- Responsive
- Lightweight
- Semantic
- Highly customizable
- IE7+
- Fluid
- Blazing fast

Quick Install
=

Install [Ruby](http://rubyinstaller.org) (if you're on Windows). Some users have experiened pathing issues with Ruby on Windows, if you're having issues, follow these steps to add Ruby to your `PATH`:

1. Find the Ruby/bin folder (usually under C:/), copy this path
2. Right click on *My Computer* and select *Properties*
3. Click *Advanced System Settings* on the left
4. Click *Environment Variables...*
5. Under *System variables* select *Path* then click the *Edit...* button below
7. Append a semi-colon to the *Variable value* and then add the copied Ruby/bin path 

Install [Compass](http://compass-style.org/install/), [NodeJS](http://nodejs.org/) and the [LiveReload Browser Extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) of your choice.

Open up a terminal and type: 
```
npm install -g jeet
```
Then `cd` to where you want your new Jeet project and run:
```
jeet create JeetProject
```
Now `cd` to the newly created project and tell Jeet to watch like this:
```
cd JeetProject
jeet watch
```
Jeet is now watching for changes to your Stylus and SCSS stylesheets and will automatically compile them to CSS files.

Finally, open `index.html` in the browser of your choice and activate LiveReload by opening *Settings > Tools > Extensions* and checking *Allow access to file URLs*. Now looking at `index.html`, click the LiveReload icon (the dot in the middle should turn dark).

Start editing either `css/scss/style_scss.scss` or `css/styl/style_styl.styl` and your changes will appear almost instantly.

If you need any help with the Jeet installation, open your terminal and run:
```
jeet -h
```
Enjoy.

Getting Started
=
Let's say we wanted to create a simple header with some navigational links. So first we'll open `index.html` and create some basic markup in between the `<body>` tags:
```html
<header>
    <a class="logo" href="#"><img src="logo.png"></a>
    <nav>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
    </nav>
</header>
```
Next we'll get started with the styling, open `css/scss/style_scss.scss` or `css/styl/style_styl.styl` depending on whether you'll be using SCSS or Stylus. For this example I'll be using Stylus though SCSS is fairly similar. So first off we want to center the header, to do this we use the `center()` mixin. I'm also using the optional `max_width` argument to set the max width for the header:
```css
header
    center(1000px)
```
Now that the header is centered we'll want to create some structure for its content. Say we want the logo to take up 1/3 of the header and the nav to take up the remaining 2/3, for this we can use the `column()` mixin. Let's add it to our style sheet:
```css
header
    center(1000px)
    .logo
        column(1/3)
    nav
        column(2/3)
```
That was pretty easy, but maybe we only want the nav element to take up 1/2 of the header and use the leftover 1/6 as a space between the nav and the logo. To do this we use `column()`'s optional argument `offset` like so:
```css
header
    center(1000px)
    .logo
        column(1/3)
    nav
        column(1/2, offset: 1/6)
```
Because `offset` is the second argument, the above may have also been called as `column(1/2, 1/6)`. Now we want to style the nav buttons, let's make them 1/3 each. When we're creating nested columns we need to also specify the parent column's ratio to get proper nesting with equidistant gutters. To supply parent ratios, the first argument should be a space separated list like this (notice the lack of commas in the last column call):
```css
header
    center(1000px)
    .logo
        column(1/3)
    nav
        column(1/2, 1/6)
        a
            column(1/3 1/2)
```
When nesting, supply the new ratio first then all of it's parent container ratios until you're back at the base column, in this case we only needed to add the nav element's ratio to the list.

Finally let's make the layout responsive, to do this we can use the `bp()`, `endbp()` and `stack()` mixins. `bp()` signals the start of the breakpoint code and `endbp()` closes it off. `bp()` also accepts an argument `w` which is the width the breakpoint occurs. So we'll add a breakpoint for when the width gets below 600px:
```css
header
    center(1000px)
    .logo
        column(1/3)
    nav
        column(1/2, 1/6)
        a
            column(1/3 1/2)

bp(600px)
endbp()
```
So far this does nothing but setup the point at which our layout will change, this is where `stack()` is useful. `stack()` does what it sounds like, removes the element's width and margin settings and stacks them on top of each other. Let's stack all our elements:
```css
header
    center(1000px)
    .logo
        column(1/3)
    nav
        column(1/2, 1/6)
        a
            column(1/3 1/2)

bp(600px)
header .logo, header nav, header nav a
    stack()
endbp()
```
And just like that we've created a responsive albiet simple header with navigation and clean, semantic html. This is a basic start but the framework offers great flexibility for more complicated layouts, try it out! For more thorough information on the mixins, check out the [Docs](#docs) section.

Moving Parts
=

- [Semantic.gs](http://semantic.gs/)
- [Stylus](http://learnboost.github.com/stylus/) / [nib](http://visionmedia.github.com/nib/) **or** [SCSS](http://sass-lang.com/) / [Compass](http://compass-style.org/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [Modernizr](http://modernizr.com/)
- [respond.js](https://github.com/scottjehl/Respond) (makes IE use media queries)
- [placeholder.js](https://github.com/mathiasbynens/jquery-placeholder) (gives you cross-browser access to placeholder attributes in inputs)
- [boxsizing.htc](https://github.com/Schepp/box-sizing-polyfill) (so Box-Sizing works in IE browsers)
- Heavy customization stuff to make it all work seamlessly together

Docs
=

*Note*: Since Jeet works with either Stylus or SCSS I'll be refering to their respective directories as "preprocessor" and their extensions as "ext". In the function definitions **I'll be using Stylus syntax**, but it's pretty identical to SCSS.

Everything in Jeet is sized in percentages. Go into `css/preprocessor/style_ext.ext` and add any styling you want. Open a Terminal, cd to your project directory, and type `jeet watch`.
This will compile both preprocessors. Your changes should be reflected in your page.

Mixins
-

### center

```
center(max_width)
```
Creates a wrapping container that centers everything inside it on your page.

```
max_width
  type: number (positive, unit)
  default: 1410px
```
- Sets the `max-width` property for the container.

**Usage**
```
#full_width_header
    background blue
    > div
        center()
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L25)/[SCSS](/web/css/scss/jeet/_framework.scss#L26)

---
### column [col]

```
column(ratios, offset, g)
```
Creates a column from the current element. Jeet is based on fractions, so if you wanted the column to take up half of its container you'd simply call `column(1/2)`. Calling `column(0.5)` is equivalent and valid, but most of the time using the fractions is more readable, especially in cases like: `column(1/3)` vs `column(0.3333...)`. If the column is nested you should also supply the parent column's ratio.

```
ratios
  type: list (space-separated)
  list item type: number (positive, unitless)
  default: 1
```
- The ratio of the container that this element will occupy.
    - If the column is nested you should also supply the parent column's ratio. So `column(1/2 3/4)` is saying, "Create a column that's 1/2 of its container, and that container is 3/4 of the base layout".

```
offset
  type: list (space-separated, max length of 2)
  first item type: number (unitless)
  second item type: boolean
  default: 0 false
```
- The amount the column is to be offset and whether the column is being offset from a nested edge.
    - The second item is optional and defaults to `false`
    - Negative values reverse the direction of the offset.

```
g
  type: number (positive, unitless)
  default: 1
```
- The gutter size in percent for the column.

**Usage**
```
header
    a
        col(1/4)
    nav
        col(2/4, offset: 1/4)
        a
            col(1/3 2/4) // Column ratio followed by the parent's column ratio.
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L35)/[SCSS](/web/css/scss/jeet/_framework.scss#L37)

---

### span

```
span(ratio, offset)
```
Use `span()` to specify you don't want gutters applied to this element. This is great for things like horizontal navigation buttons or anything that you want to sit side-by-side.

```
ratio
  type: number (positive, unitless)
  default: 1
```
- The ratio of the container that this element will occupy.

```
offset
  type: number (unitless)
  default: 1
```
- The amount the span will be offset.
    - Negative values reverse the direction of the offset.

**Usage**
```
#navigation a
    span(1/6)
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L66)/[SCSS](/web/css/scss/jeet/_framework.scss#L82)

---

### shift

```
shift(ratios, g)
```
The `shift()` function can be used for content reordering.

```
ratios
  type: list (space-separated)
  list item type: number (positive, unitless)
  default: 1
```
- Similar to the `column()` function, this argument accepts a space separated list of fractions.

```
g
  type: number (positive, unitless)
  default: 1
```
- The gutter size for the column you are shifting.

**Usage**
```
#linkOne
    shift(1/2)
#linkTwo
    shift(-1/2)
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L85)/[SCSS](/web/css/scss/jeet/_framework.scss#L105)

---

### unshift
```
unshift()
```

Removes `shift()` from selectors, this is useful when you want to reset the shift for mobile breakpoints.

**Usage** 
```
#linkOne, #linkTwo
    unshift()
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L96)/[SCSS](/web/css/scss/jeet/_framework.scss#L118)

---

### bp *and* endbp

```
bp(w, mobile_first)
endbp()
```
The `bp()` mixin specifies a display breakpoint. This basically opens a media query on the fly for you that you must close with `endbp()`. You can add as many `bp()` calls as you want anywhere in your code.

```
w
  type: number (positive, unit)
  default: 705px
```
- The screen width at which the breakpoint occurs.

```
mobile_first
  type: boolean
  default: false
```
- Changes the media query from `max-width` to `min-width`, effectively giving you the tools to design for mobile first.

**Usage**
```
bp()
#nav, #masthead, #article
    stack()
endbp()
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L119)/[SCSS](/web/css/scss/jeet/_framework.scss#L149)

---

### stack

```
stack(align)
```
This mixin lets you quickly specify an element to be "stacked". It effectively sets the width of the element to 100% and gives it a margin-bottom of 2%. If you don't want margin-bottom, you can overwrite that after your `stack()` call, but it generally looks good.

```
align
  type: string
  default: c
```
- Sets the text alignment of the stacked elements.
    - `c` sets the text alignment to center.
    - `l` sets the text alignment to left.
    - `r` sets the text alignment to right.

**Usage**
```
bp()
#nav, #masthead, #article
    stack()
endbp()
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L127)/[SCSS](/web/css/scss/jeet/_framework.scss#L158)

---

### btn

```
btn(bg_color, radius, style)
```
The `btn()` mixin was added as an example to show users how to quickly create custom reusable elements. If you end up making some cool, reusable elements, please [submit them](https://github.com/CorySimmons/jeet/pulls) and we can add them.

```
bg_color
  type: hex, rgb or hsl
  default: #eee
```
- Specify the color of the button.

```
radius
  type: number (positive, unit)
  default: 10px
```
- Set the border radius.

```
style
  type: string
  default: flat
```
- Set the style of button.
    - `flat` creates a very subtle gradient.
    - `glossy` creates a sharp gradient.

**Usage**
```
button
    btn(yellow, 3px, glossy)
```

*Note*: Color math in programming is pretty complicated so sometimes you'll get some screwy text color associated with your button (try `btn(blue)` for an example). If this happens, just overwrite it with the color you want. It's not optimal, but color math is a whole *thing*. Feel free to go the extra mile, fix this, and submit a pull request.

**Example**
```
button
    btn(blue)
    color #fff
```

View source: [Stylus](/web/css/styl/jeet/goodies.styl#L24)/[SCSS](/web/css/scss/jeet/_goodies.scss#L2)

---

### edit

```
edit()
```

The `edit()` mixin sets:

    *
        transition 200ms ease all

Why? Because when you're editing with LiveReload and hit save, you'll see blocks fly into position like [Isotope](http://isotope.metafizzy.co/) which is totally sweet and helps visualize the structure of your site.

View source: [Stylus](/web/css/styl/jeet/framework.styl#L140)/[SCSS](/web/css/scss/jeet/_framework.scss#L173)

---

pxfix

```
pxfix()
```
Safari and Opera like to round percentages down. As a result, 33.333333% turns into 33%. Mathematically this is correct, but in the web world, this results in missing pixels here and there. Usually at the end of a row of elements. `pxfix()` cures this with Nicole Sullivan's fix for last elements in a row.

**Warning** This will cause the last element in a container to take up the remaining width of the container. `pxfix()` works best when applied to the last element in a row.

**Usage**
```
.row
    &:last-child
        pxfix()
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L145)/[SCSS](/web/css/scss/jeet/_framework.scss#L180)

---
Variables
-
### layout_direction

```
layout_direction
  type: string
  default: LTR
```
- Sets the global layout direction
    - `LTR` makes the columns go from left to right.
    - `RTL` makes the columns go from right to left.

---
### parent_first

```
parent_first
  type: boolean
  default: false
```
- Sets whether when using `column()`, `shift()` and `getColumn()` if you'll supply the parent ratios first or last.

---
### gutter [gut, g]

```
gutter
  type: number (positive, unitless)
  default: 1
```
- The global gutter amount. Change this if you want to make site wide changes to your gutter.

---

Functions
-

### getSpan

```
getSpan(ratio)
```
Used for calculating percentage widths for spans without actually applying them, returns you a width which you can use anywhere in your style.

```
ratio
  type: number(positive, unitless)
  default: 1
```
- Specify a fraction to calculate.

**Usage** 
```
.post img
    width getSpan(1/3)
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L100)/[SCSS](/web/css/scss/jeet/_framework.scss#L123)

---

### getColumn

```
getColumn(ratios, g, nested)
```
Used for calculating percentage widths for columns without actually applying them, returns you a width and a gutter which you can use anywhere in your style.

```
ratios
  type: list (space-separated)
  list item type: number (positive, unitless)
  default: 1
```
- The same as the `column()` function, supply a single fraction or a space separated list of fractions.

```
g
  type: number (positive, unitless)
  default: 1
```
- Set a custom gutter size for this calculation.

```
nested
  type: boolean
  default: false
```
- Set to `true` to calculate a single fraction as if it's nested, otherwise leave alone.

**Usage** 
```
.post img
    custom = getColumn(1/3 3/4)
    width custom[0]
    margin-left custom[1]
```

View source: [Stylus](/web/css/styl/jeet/framework.styl#L104)/[SCSS](/web/css/scss/jeet/_framework.scss#L128)

---

Troubleshooting
=

**Q** `npm install -g jeet` throws permission errors

**A** You probably already installed something to your node_modules directory with root permissions so the root user took control of that directory. You can either run `sudo npm install -g jeet` (sucks) or actually **fix the problem** by running `sudo chown YOURUSERNAME /wherever/you're/getting/the/permission/error/node_modules` then uninstalling all the stuff in that folder (`sudo npm uninstall -g foo`) then reinstalling it all as a normal user (`npm install -g foo`). This will fix all kinds of stuff Jeet will work great.

**Q** My SCSS is being overwritten by my Stylus!

**A** Swap these two lines in your index.html

    <link rel="stylesheet" href="css/scss/style_scss.css">
    <link rel="stylesheet" href="css/styl/style_styl.css">

**Q** I get SCSS compilation errors on `jeet watch`

**A** I'll bet my soul you don't have Ruby installed and in your PATH, or you don't have Compass. Test these by typing `ruby` in your Command Prompt and then `compass`. If these don't throw errors and Jeet still is having problems, submit a bug in the Issue tracker.

FAQ
=

**Q** Where can I ask Jeet related questions?

**A** Several places! The fastest way is to Tweet [@jeetframework](http://twitter.com/jeetframework); if you're not in a hurry, it'd be nice if you posted questions on Stack Overlow under the [CSS-Frameworks tag](http://stackoverflow.com/questions/tagged/css-frameworks); if you believe there's an underlying bug or problem with the framework, open or comment on an issue at the [issue tracker](https://github.com/CorySimmons/jeet/issues).


**Q** Why "Jeet"?

**A** Named after Bruce Lee's, Jeet Kune Do. Mr. Lee combined the best of every martial art into his own fighting style. Jeet Framework does the same by taking the best parts and leaving out the bloat.

**Q** Who's in charge here?!

**A** Jeet was originally created and is maintained by [Cory Simmons](http://twitter.com/ccccory). Since then [Oskar Zamorowski](http://twitter.com/ozamorowski) stepped up to maintain the [SCSS port](https://github.com/CorySimmons/jeet/tree/master/web/css/scss) and just generally be a big help with the website and docs. The incredible [Gabriel Manricks](http://twitter.com/GabrielManricks) was nice enough to build and maintain the awesome [npm package](https://npmjs.org/package/jeet).

**Q** Goals for this project?

**A** I'd like to continue fixing bugs as they pop up, and implement as many feature requests as possible until this framework rules them all. The next big update are really flexible styling functions. Think the `btn()` command, on crack, for typography, form styling, buttons, tables, etc. Leave suggestions in the [issue tracker](https://github.com/CorySimmons/jeet/issues).
