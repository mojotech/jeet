(function() {
  require.config({
    paths: {
      jquery: 'jquery',
      modernizr: 'custom-modernizr',
      pushy: 'pushy',
      scrollIt: 'scrollIt',
      stickyNav: 'stickyNav',
      interAPI: 'interactiveAPI',
      matchHeight: 'matchHeight',
      animateScroll: 'animateScroll',
      fancybox: 'fancybox'
    }
  });

  require(['jquery', 'modernizr', 'pushy', 'scrollIt', 'stickyNav', 'interAPI', 'matchHeight', 'fancybox', 'animateScroll'], function($) {
    var didResize;
    $.scrollIt();
    $('.grid-toggle').click(function() {
      $(".landing-page").toggleClass("grid-visible");
      return $('.toggle-api').click(function() {
        return fixFluidResize();
      });
    });
    $(".half, .third, .fourth, .third:before").matchHeight();
    didResize = null;
    $(window).resize(function() {
      didResize = true;
    });
    setInterval((function() {
      if (didResize) {
        didResize = false;
        $(".container div").matchHeight();
      }
    }), 250);
    return $(".fancybox").fancybox({
      helpers: {
        media: true
      },
      aspectRatio: true,
      scrolling: "no"
    });
  });

}).call(this);
