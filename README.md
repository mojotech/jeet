<img width="200px" src="http://jeet.gs/dist/img/jeet-logo-color.svg" title="Jeet Grid System">

<a href="https://gitter.im/mojotech/jeet"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=flat-square"></a>
<img src="https://img.shields.io/npm/v/jeet.svg">
<img src="http://img.shields.io/npm/dm/jeet.svg">

# Jeet 7.0.0 is here!

> 7.0.0 breaks a lot of stuff. Be sure to read [the migration guide](https://github.com/mojotech/jeet/wiki/Migrating-from-6-to-7)!

[Jeet](http://jeet.gs) is a simple fractional grid system for **[Sass](scss)** and **[Stylus](styl)**.

Learn the [API](docs) in minutes and begin tossing together grids.

Check this out:

```fish
npm install -D jeet
```

```scss
@import 'node_modules/jeet/jeet';

.container {
  @include center();
}

.container div {
  @include column(1/3);
}
```

Jeet functions accept fractions (or float numbers) and generates a percentage width and gutter for grids. We're able to do this while maintaining a consistently-sized, infinitely-nestable, gutter (so long as you provide the parent element's fraction as context).

The API is documented in Sass, but we've worked hard to make the API *very* similar in both preprocessors. `@include column(1/2);` in SCSS would be `column(1/2)` in Stylus, ya dig?

Explore [Official Integrations](docs/integrations) to see some community-backed plugins to your favorite frameworks and libraries.

#### Browser Support

- IE9+ without help. IE8+ with Selectivizr. Obviously always use Autoprefixer.
