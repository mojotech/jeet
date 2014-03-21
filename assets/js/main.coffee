require.config
  paths:
    jquery:      '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min'
    modernizr:   'custom-modernizr'
    pushy:       'pushy'
    scrollIt:    'scrollIt'
    stickyNav:   'stickyNav'
    interAPI:    'interactiveAPI'
    matchHeight: 'matchHeight'
    fancybox:    'fancybox'

require ['jquery', 'modernizr', 'pushy', 'scrollIt', 'stickyNav', 'interAPI', 'matchHeight', 'fancybox'], ($) ->

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
