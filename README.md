![alt text](https://raw.github.com/CorySimmons/jeet/master/jeet_logo.jpg "Jeet CSS Framework")

-

Jeet takes the best of the open source HTML5/CSS3 World and combines it into a lightweight, semantic, responsive, and blazing fast framework. You can use Stylus, or SCSS, **OR BOTH!**

[Check out demos, documentation, and screencasts at http://jeetframework.com](http://jeetframework.com/)

[Watch Jeet develop an entire IE7+ responsive website in 3 minutes while dramatically improving code quality.](http://www.screenr.com/u3c7)

[Watch the very popular webdesign.tutsplus.com screencast tutorial on Jeet](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/working-with-jeet-an-alternative-responsive-framework/)

Quick Start
=

- Install [NodeJS](http://nodejs.org/)
- Install [Ruby](http://rubyinstaller.org) (if you're on Windows)
- Install [Compass](http://compass-style.org/install/)
- Install [LiveReload Browser Extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) of your choice. Right click on the button it added > Manage Extensions > Find the LiveReload extension and check "Allow Access to File URLs"
- Open up a terminal and type `npm install -g jeet`
- Type `jeet -h`
- Navigate to any directory you want, type `jeet create JeetProject`
- `cd JeetProject`
- `jeet watch`
- Open `index.html` in the browser of your choice and activate LiveReload by opening Settings > Tools > Extensions and checking `Allow access to file URLs` then clicking the icon (the dot in the middle should be dark)
- Edit either `css/scss/style_scss.scss` or `css/styl/style_styl.styl`
- Enjoy


Features
=

- Responsive
- Lightweight
- Semantic
- Highly customizable
- IE7+
- Fluid
- Lightweight

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

Everything in Jeet is sized in percentages. To use the grid, go into `css/preprocessor/jeet/settings.ext` and set some initial settings. They're pretty self-explanatory. Now go into `css/preprocessor/style_ext.ext` and add any styling you want. Open a Terminal, cd to your project directory, and type `jeet watch`.
This will compile both preprocessors. Your changes should be reflected in your page.

### center(mw = max_width, p = max_width_padding)

`center()` allows you to create a wrapping container that centers everything inside it on your page.

`mw` - The default `max_width` is specified in your settings and just sets the maximum width of your container. You can change this on the fly like so: `center(980px)`.

`p` - `max_width_padding` is set in your settings file and sets how much space appears on both sides of your `center()`'d elements. This basically keeps your container from ever touching the edges of your window (making text hard to read and generally being ugly).
You can override this setting in the settings file or on the fly with: `center(980px, 0)`. Setting this to 0 is great if you're making an admin panel or something where you actually want things to touch the edges.

**Usage:**

    #full_width_header
        background blue
        > div
            center()

---

### col(x, center = f, last = l)

Use this to specify the number of columns you'd like to span and apply a gutter to the end of the element.


`x` - number of columns to span

`center` [f, c] - whether you want this element horizontally centered in it's container

`last` [l, f] - By default a gutter will be applied to the right side of every element except the last element in a container - which gets a margin-right of 0. Setting `last` to `f` (false) explicitly tells Jeet to give this element a gutter even if it's the last element.

*Note*: As you nest items, their container resets, so setting `col(6)` means that nested elements can use 24 columns (by default) again. This is made easy by just knowing you always have 24 columns to work with (unless you modify the number of columns in your settings file).

**Usage:**
        
    #ad_banner
        col(4, c)

---

### span(x, center = f)

Use `span()` to specify you don't want gutters applied to this element. This is great for things like horizontal navigation buttons or anything that you want to sit side-by-side.

`x` - number of columns to span

`center` [f, c] - whether you want this element horizontally centered in it's container

**Usage:**
    
    #navigation
        col(8)
        a
            span(6)

---

### offset(offset = 1)

Offset is used to add a mathematically generated margin-left to the element. In this way, you can put accurate space between elements in the same container and row.

`offset = 1` [any number] - By default `offset()` will create a margin-left of the same size as `col(1)`.

**Usage:**

    #sidebar
        col(6)
    #content
        col(16)
        offset(2)

---

### w(numerator = 1, denominator = 1, span = f, center = f, last = l)

`w()` is one of the coolest features of Jeet. I took this idea from how [Harry Roberts](http://csswizardry.com/) specifies column delegation in his framework [InuitCSS](https://github.com/csswizardry/inuit.css/blob/master/objects/_grids.scss). The only difference is
Jeet will accept any integered parameters whereas with Inuit you only get a few to work with. It effectively takes the place of `col()` and `span()` and lets you specify a fraction of the containing element's width to use. It accepts any numbers - floated or not.

`numerator` and `denominator` - https://www.khanacademy.org/math/arithmetic/fractions

`span` [f, s] - This determines whether you want this element to span (like the `span()` mixin above). Use like so: `w(1, 4, s)`

`center` [f, c] - whether you want this element horizontally centered in it's container

`last` [l, f] - By default a gutter will be applied to the right side of every element except the last element in a container - which gets a margin-right of 0. Setting `last` to `f` (false) explicitly tells Jeet to give this element a gutter even if it's the last element.

**Usage:** 

    #container
        center()
        #sidebar
            w(2, 5)
        #content
            w(3, 5)

I know that I rail against presentational classes all the time, but I went ahead and ahead some presentational classes for `w()` (up to `.twelfth`) almost specifically for use in forms.

**Form Example:**

    <form>
        <div class="half">
            <label>Username</label>
            <input type="text">
        </div>
        <div class="half">
            <label>Password</label>
            <input type="password">
        </div>
    </form>

Or you could code something like this on your own:

    <form>
        <div class="halves">
            <div>
                <label>Username</label>
                <input type="text">
            </div>
            <div>
                <label>Password</label>
                <input type="password">
            </div>
        </div>
    </form>
    
    // Stylus
    .halves div
        w(1, 2)

---

### bp(w = 705px, mobile_first = f) *and* endbp()

`bp()` specifies a display breakpoint. This basically opens a media query on the fly for you that you must close with `endbp()`. You can add as many `bp()` calls as you want anywhere in your code.

`w` - Accepts a specified width. By default this is 705px but it's recommended you manually contract your browser width to see when things start breaking and specify a `bp()` at a few pixels above the browsers breaking width.

`mobile_first` [f, mf] - If you set `mobile_first` to `mf` like so `bp(705px, mf)` then this will change your media query from `max-width` to `min-width` effectively giving you the tools to design for mobile first.

`endbp()` - Accepts no parameters, it just closes your media queries and is required anytime you use `bp()`.

---

### stack(align = c)

This mixin lets you quickly specify an element to be "stacked". It effectively sets the width of the element to 100% and gives it a margin-bottom of 2%. If you don't want margin-bottom, you can overwrite that after your `stack()` call, but it generally looks good.

`align` [c, l, r] - Sets the text alignment of the element to center, left, or right, depending on your needs. Defaults to centered text which reads well on mobile.

**Usage:**

    bp()
    #nav, #masthead, #article
        stack()
    endbp()

---

### btn(bg_color = #eee, radius = 10px, style = flat)

`btn()` was added as an example to show users how to quickly create custom reusable elements. If you end up making some cool, reusable elements, please [submit them](https://github.com/CorySimmons/jeet/pulls) and we can add them.

`btn()` effectively lets you create custom [Bootstrap-like buttons](http://twitter.github.io/bootstrap/base-css.html#buttons) on the fly.

`bg_color = #eee` [hex, rgb, or hsl value] - Specify whatever color you'd like your button to be.

`radius = 10px` [any size] - Set the border radius.

`style = flat` [flat, glossy] - Set the style of button you want. Flat creates a very subtle gradient whereas glossy creates a sharp gradient.

**Usage:**

    button
        btn(yellow, 3px, glossy)

*Note*: Color math in programming is pretty complicated so sometimes you'll get some screwy text color associated with your button (try `btn(blue)` for an example). If this happens, just overwrite it with the color you want. It's not optimal, but color math is a whole *thing*. Feel free to go the extra mile, fix this, and submit a pull request.

**Example:**

    button
        btn(blue)
        color #fff


Troubleshooting
=

**Q** `npm install -g jeet` throws permission errors

**A** You probably already installed something to your node_modules directory with root permissions so the root user took control of that directory. You can either run `sudo npm install -g jeet` (sucks) or actually **fix the problem** by running `sudo chown YOURUSERNAME /wherever/you're/getting/the/permission/error/node_modules` then uninstalling all the stuff in that folder (`sudo npm uninstall -g foo`) then reinstalling it all as a normal user (`npm install -g foo`). This will fix all kinds of stuff Jeet will work great.

**Q** My SCSS is being overwritten by my Stylus!

**A** Swap these two lines in your index.html

    <link rel="stylesheet" href="css/scss/style_scss.css">
    <link rel="stylesheet" href="css/styl/style_styl.css">

FAQ
=

**Q** Where can I ask Jeet related questions?

**A** Several places! The fastest way is to Tweet [@jeetframework](http://twitter.com/jeetframework); if you're not in a hurry, it'd be nice if you posted questions on Stack Overlow under the [CSS-Frameworks tag](http://stackoverflow.com/questions/tagged/css-frameworks); if you believe there's an underlying bug or problem with the framework, open or comment on an issue at the [issue tracker](https://github.com/CorySimmons/jeet/issues).


**Q** Why "Jeet"?

**A** Named after Bruce Lee's, Jeet Kune Do. Mr. Lee combined the best of every martial art into his own fighting style. Jeet Framework does the same by taking the best parts and leaving out the bloat.

**Q** Who's in charge here?!

**A** Jeet was originally created and is maintained by [Cory Simmons](http://twitter.com/ccccory). Since then [Oskar Zamorowski](http://twitter.com/ozamorowski) stepped up to maintain the [SCSS port](https://github.com/CorySimmons/jeet/tree/master/web/css/scss) and just generally be a big help with the website and docs. The incredible [Gabriel Manricks](http://twitter.com/GabrielManricks) was nice enough to build and maintain the awesome [npm package](https://npmjs.org/package/jeet).

**Q** Goals for this project?

**A** I'd like to continue fixing bugs as they pop up, and implement as many feature requests as possible until this framework rules them all. Leave suggestions in the [issue tracker](https://github.com/CorySimmons/jeet/issues).
