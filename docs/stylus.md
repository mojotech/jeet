# Jeet - Stylus

### Installation

- Install [NodeJS](http://nodejs.org)
- `npm install -D jeet`

### Usage Example

```fish
$ stylus -w style.styl
```

```styl
// style.styl
@import 'node_modules/jeet/jeet'

debug()

section
  center()

aside
  column(1/3)

article
  column(2/3)
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

```styl
// Namespace Example
jeet-column()
  column(arguments)

// Alias Example
col()
  column(arguments)
```
