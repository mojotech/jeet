![alt text](https://raw.github.com/CorySimmons/jeet/master/jeet_logo.jpg "Jeet CSS Framework")


Jeet takes the best of the open source HTML5/CSS3 World and combines it into a lightweight, semantic, responsive, and blazing fast framework.

[View the Demo](http://www.screenr.com/gyh7) - A responsive website from scratch in 3 minutes served with "Black Coffee".

I don't have any friends. [Follow me on Twitter! @ccccory](https://twitter.com/ccccory)

Quick Start
=

- Install [Stylus](http://learnboost.github.com/stylus/)
- Install [nib](http://visionmedia.github.com/nib/)
- Navigate to your /css directory
- Run this line to have [Stylus](http://learnboost.github.com/stylus/docs/executable.html) *use* nib, *watch* your .styl file, and *compress* it

    stylus -u nib -w style.styl -c


Features
=

- IE8+
- One breakpoint
- Fluid
- Lightweight


Moving Parts
=

- [Semantic.gs](http://semantic.gs/)
- [Stylus](http://learnboost.github.com/stylus/) / [nib](http://visionmedia.github.com/nib/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [Modernizr](http://modernizr.com/)
- [respond.js](https://github.com/scottjehl/Respond) (makes IE use media queries)
- [placeholder.js](https://github.com/mathiasbynens/jquery-placeholder) (gives you cross-browser access to placeholder attributes in inputs)
- [boxsizing.htc](https://github.com/Schepp/box-sizing-polyfill) (so Box-Sizing works in IE browsers)
- [Bootstrap](http://twitter.github.com/bootstrap/) (if you'd like, feel free to omit it completely)

FAQ
=

**Q** Why "Jeet"?

**A** Named after Bruce Lee's, Jeet Kune Do. Mr. Lee combined the best of every martial art into his own fighting style. Jeet Framework does the same by taking the best parts and leaving out the bloat.

**Q** Do you have plans to port this to LESS and SASS?

**A** It depends on the popularity. If there's interest, I'll port it. If not, I'll continue using sweet, sweet, Stylus.

**Q** Goals for this project?

**A** I'd like to make it 100% semantic by adding mixins for elements like buttons and such. For instance:

    btn(#5a3e51, 40px, 5px)

...would render a #5a3e51 gradient button that was 40px tall and had 5px border-radius.

I'd like to make mixins for really high-quality typography and such as well. Everything just depends on if there's interest in this framework or not.
