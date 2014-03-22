require.config
  paths:
    jquery:        'jquery'
    modernizr:     'custom-modernizr'
    pushy:         'pushy'
    scrollIt:      'scrollIt'
    stickyNav:     'stickyNav'
    interAPI:      'interactiveAPI'
    matchHeight:   'matchHeight'
    animateScroll: 'animateScroll'
    fancybox:      'fancybox'

require ['jquery', 'modernizr', 'pushy', 'scrollIt', 'stickyNav', 'interAPI', 'matchHeight', 'fancybox', 'animateScroll'], ($) ->

  $.scrollIt()

  $('.grid-toggle').click ->
    $(".landing-page").toggleClass "grid-visible"
    $('.toggle-api').click -> fixFluidResize()

  $(".half, .third, .fourth, .third:before").matchHeight()
  didResize = null
  $(window).resize ->
    didResize = true
    return

  setInterval (->
    if didResize
      didResize = false
      $(".container div").matchHeight()
    return
  ), 250

  $(".fancybox").fancybox
    helpers:
      media: true
    aspectRatio: true
    scrolling: "no"
