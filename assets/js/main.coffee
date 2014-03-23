require.config
  paths:
    jquery:        'vendor/jquery'
    modernizr:     'vendor/custom-modernizr'
    pushy:         'vendor/pushy'
    scrollIt:      'vendor/scrollIt'
    matchHeight:   'vendor/matchHeight'
    fancybox:      'vendor/fancybox'
    stickyNav:     'stickyNav'
    interAPI:      'interactiveAPI'
    animateScroll: 'animateScroll'

require ['jquery', 'modernizr', 'pushy', 'scrollIt', 'matchHeight', 'fancybox', 'stickyNav', 'interAPI', 'animateScroll'], ($) ->

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
