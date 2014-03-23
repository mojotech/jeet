(function() {
  require.config({
    paths: {
      jquery: 'vendor/jquery',
      modernizr: 'vendor/custom-modernizr',
      pushy: 'vendor/pushy',
      scrollIt: 'vendor/scrollIt',
      matchHeight: 'vendor/matchHeight',
      fancybox: 'vendor/fancybox',
      stickyNav: 'stickyNav',
      interAPI: 'interactiveAPI',
      animateScroll: 'animateScroll'
    }
  });

  require(['jquery', 'modernizr', 'pushy', 'scrollIt', 'matchHeight', 'fancybox', 'stickyNav', 'interAPI', 'animateScroll'], function($) {
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
