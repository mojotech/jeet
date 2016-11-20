# Settings

Jeet's global settings are wrapped in a `$jeet` preprocessor map.

```scss
$jeet: (
  gutter: 3,
  max-width: 1440px,
  layout-direction: LTR,
  parent-first: false
);
```

These need overridden in your own `my-settings` file and imported after Jeet is imported -- but before you use Jeet's mixins.

#### gutter: 3

The percentage of the page the root-level gutters take up.

#### max-width: 1440px

Used for `center()`'s `max-width`.

### layout-direction: LTR

Support for left-to-right, or right-to-left (`RTL`) text/layouts.

### parent-first: false

When assigning multiple ratio contexts to a `col()`, do you want to reference the outer most container first? Example: Let's assume we have a column set to `col(1/4)` that is nested inside of another column that is `col(1/3)` which is nested inside of another column that is `col(1/2)`. By default, to maintain consistently sized gutters (even when nesting), our inner-most column would look like `col(1/4 1/3 1/2)`. If we adjust this global variable to be `true`, our inner-most column could be written from a top-down perspective like so: `col(1/2 1/3 1/4)`. This is entirely a preference thing. Do you like stepping up or down?

## Example Usage

```scss
// my-settings.scss
$jeet: (
  gutter: 2,
  max-width: 960px
);

// style.scss
@import 'node_modules/jeet/jeet';
@import 'my-settings';

.container {
  @include center;
}

.container div {
  @include column(1/3);
}
```
