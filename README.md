![alt text](https://raw.github.com/CorySimmons/jeet/master/jeet_logo.jpg "Jeet CSS Framework")

-

Jeet takes the best of the open source HTML5/CSS3 World and combines it into a lightweight, semantic, responsive, and blazing fast framework. You can use Stylus, or SCSS, **OR BOTH!**

[Check out demos, documentation, and screencasts at http://jeetframework.com](http://jeetframework.com/)

[Watch Jeet develop an entire IE7+ responsive website in 3 minutes while dramatically improving code quality.](http://www.screenr.com/u3c7)

[Watch the very popular webdesign.tutsplus.com screencast tutorial on Jeet](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/working-with-jeet-an-alternative-responsive-framework/)

[Follow me on Twitter! @ccccory](https://twitter.com/ccccory) | [Follow my company on Twitter! @PressedWeb](https://twitter.com/PressedWeb)

Quick Start
=

#### Stylus
  - Install [nodejs](http://nodejs.org)
  - Install [Stylus](http://learnboost.github.com/stylus/) globally (npm install stylus -g)
  - Install [nib](http://visionmedia.github.com/nib/) globally (npm install nib -g)
  - Navigate to your [/css/styl] directory via terminal
  - Run this line to have [Stylus](http://learnboost.github.com/stylus/docs/executable.html) *use* nib, *watch* your .styl file, and *compress* it

    stylus -u nib -w -c -o ../

#### SCSS
  - Install [Compass](http://compass-style.org/install/)
  - Navigate to your [/css/scss] directory via terminal
  - Run this command to have Compass watch your file for changes `compass watch`
  - Edit [/css/scss/config.rb] to *compress* or *expand* css output

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

Troubleshooting
=

**My SCSS is being overwritten by my Stylus!** Swap these two lines in your index.html

    <link rel="stylesheet" href="css/style_scss.css">
    <link rel="stylesheet" href="css/style_styl.css">

FAQ
=

**Q** Where can I ask Jeet related questions?

**A** Several places! The fastest way is to Tweet [@jeetframework](http://twitter.com/jeetframework); if you're not in a hurry, it'd be nice if you posted questions on Stack Overlow under the [CSS-Frameworks tag](http://stackoverflow.com/questions/tagged/css-frameworks); if you believe there's an underlying bug or problem with the framework, open or comment on an issue at the [issue tracker](https://github.com/CorySimmons/jeet/issues).


**Q** Why "Jeet"?

**A** Named after Bruce Lee's, Jeet Kune Do. Mr. Lee combined the best of every martial art into his own fighting style. Jeet Framework does the same by taking the best parts and leaving out the bloat.


**Q** Goals for this project?

**A** I'd like to continue fixing bugs as they pop up, and implement as many feature requests as possible until this framework rules them all. Leave suggestions in the [issue tracker](https://github.com/CorySimmons/jeet/issues).
