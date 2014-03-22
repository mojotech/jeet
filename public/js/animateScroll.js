$(function() {

  var $win              = $(window),
      $win_height       = $(window).height(),
      noMoreFades       = false,
      windowPercentage  = ($(window).height() * 0.9),
      isTouch           = (Modernizr.touch),
      lastInstance      = $('.scrollReveal:last');
  
  if (isTouch) {
    $('.scrollReveal').addClass('animated');
  }

  $win.on('scroll', scrollReveal);

  function scrollReveal() { 
    var scrolled = $win.scrollTop();

    if (lastInstance.hasClass('animated')) {
      noMoreFades = true;
    }

    $('.scrollReveal').each(function () {    
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (!noMoreFades && scrolled + windowPercentage > offsetTop || $win_height > offsetTop) {

        if ($this.hasClass('speed-img') || $this.hasClass('mt-twitter')) {
          window.setTimeout(function(){
            $this.addClass('animated flipInX');
          }, 400);
        } else if ($this.hasClass('integration-img') || $this.hasClass('mt-google')) {
          window.setTimeout(function(){
            $this.addClass('animated flipInX');
          }, 800);
        } else if ($this.hasClass('comparison-animation')) {
            $this.addClass('animated rubberBand');
        } else if ($this.hasClass('scss') || $this.hasClass('smashing-magazine')) {
            $this.addClass('animated bounceInLeft');
        } else if ($this.hasClass('stylus') || $this.hasClass('css-tricks')) {
          window.setTimeout(function(){
            $this.addClass('animated bounceInRight');
          }, 400);
        } else if ($this.hasClass('cta-animation')) {
            $this.addClass('animated tada');
        } else {
          $this.addClass('animated flipInX');
        } 
      }
    });
  }

  scrollReveal();
});
