# Jeet

Jeet is the most advanced, yet intuitive, grid system on the market today.

#### Installation
`npm install jeet`

It's recommended that you've been using an older version (pre version 5) of Jeet that you uninstall it globally (`npm uninstall -g jeet`) and just install it on a per project basis (`npm install jeet` from a project directory).

For more information on the many ways you can use Stylus plugins, please refer to [this guide](https://gist.github.com/jenius/8263065).

#### Stylus Usage
```
cd ~/Project/css
stylus -u jeet -w foo.styl
```

#### Usage Example
```
<section>
  <aside>Sidebar</aside>
  <article>Content</article>
</section>
```
```
section
 center()
aside
 col(1/3)
article
 col(2/3)
```

#### API

Be sure to check out [Jeet's website](http://jeet.gs) for [CodePen](http://codepen.io) examples of all this stuff.

- **`center(max-width = 1410px, pad = 0)`** - This is a shortcut to easily center containers. The pad variable sets padding on the left and right.
- **`column(ratios = 1, offset = 0, cycle = 0, uncycle = 0)`** - `column` (also aliased as `col`) is perhaps the strongest feature of any grid system on the market. You specify an initial ratio, either as fractions or decimals, then pass the parent container's context ratio to maintain consistent gutters as you nest. Offsetting is made trivial as well. Just specify a ratio to make your offset have a margin-left. Make it negative to give it a margin-right instead. E.g. `column(1/4, offset: 1/4)` would create a column the quarter of the size of it's container and push it to the right a quarter. `cycle` and `uncycle` are pretty awesome in their own right as well. Want to make a gallery but don't want to specify a row every 4 pictures? `column(1/4, cycle: 4)` - done. Want to change it up when you get down to mobile? Maybe just show 2 images per row? `uncycle` your 4-item cycle then... `column(1/2, uncycle: 4, cycle: 2)` - done.
- **`span(ratio = 1, offset = 0)`** - Need a grid without the gutters? For instance, for a horizontal navigation where you want buttons touching. Do so like: `span(1/5)`. No need to pass more than one ratio since we don't need to worry about the math involved with gutters and all that.
- **`shift(ratios = 0, col_or_span = column)`** - Source ordering works in Jeet by assigning `position: relative` and then a `left` offset equal to the ratio passed. You can specify if this is a column or span shift to include gutters or not. This works similar to `offset` in that it can accept negative values to shift the other direction. Again, `shift` can accept multiple context ratios to maintain perfect sizing.
- **`unshift()`** - Accepts no values but isn't a block closer either. `unshift()` is a great helper function to quickly disable whatever source ordering you've done to an element.
- **`edit()`** - Edit mode assigns a light gray, semi-transparent, background to every element on the page. It's a little trick picked up over the years that makes visualizing the structure of your site trivial.
- **`$cf`** - The clearfix placeholder saves space on repetitive use of clearfix. Use clearfix anywhere like so: `@extend $cf`
- **`align(direction = both)`** - Aligning blocks relative to their container with `position: absolute` and fancy positioning and transform. Vertical alignment is now trivial in IE9+ browsers.
- **`stack(pad = 0, align = center)`** - A helper mixin to "stack" elements on top of each other. Useful for mobile views. Accepts padding and/or text alignment.
- **`unstack()`** - Cancel that `stack()`. This won't revert back to your `column()` calls. For that, manually call your `column()` method again.

---

#### Thanks
- **[Jeff Escalante](https://github.com/jenius)** - For his patience and guidance with this project.
- **[Gabriel Manricks](http://gabrielmanricks.com)** - For constantly helping. The man is unstoppable.
- **[Mitchell Coote](http://monkeez.com)** - For contributing the sweet goodness of consistently sized gutters even in nested contexts (seriously-tricky-business).
- **[Carrot Creative](http://carrot.is)** - For keeping up with Jeet and using it on some of the [biggest companies](http://carrot.is/creative) in the world.
- **[The rest of ya's](https://github.com/mojotech/jeet/graphs/contributors)** - Thanks for your love. It makes developing this project fun and rewarding for everyone.
