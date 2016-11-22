# Jeet - Sass

### Installation

- Install Ruby [[Windows](http://rubyinstaller.org/), [Mac/Linux](https://github.com/sstephenson/rbenv)]
- `gem install sass`
- `npm install -D jeet`

### Usage Example

```fish
$ sass -w style.scss
```

```scss
// style.scss
@import 'node_modules/jeet/jeet';

@include debug;

section {
  @include center;
}

aside {
  @include column(1/3);
}

article {
  @include column(2/3);
}
```

```html
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <section>
      <aside>Sidebar</aside>
      <article>Content</article>
    </section>
  </body>
</html>
```

### Namespacing and Aliases

Jeet doesn't namespace or alias by default anymore (to keep the API simple/clean). If you need namespacing or aliasing, you can wrap mixins within namespace/alias mixins.

```scss
// Namespace Example
@mixin jeet-column($args...) {
  @include column($args...);
}

// Alias Example
@mixin col($args...) {
  @include column($args...);
}
```
