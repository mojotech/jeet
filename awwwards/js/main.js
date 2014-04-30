$(function() {

  // Sticky footer
  var bumpIt = function() {
        $('body').css('margin-bottom', $('.footer').outerHeight() + 45);
      },
      didResize = false;
  bumpIt();

  // Vertical center hero content
  var vertCent = function() {

    var halfsies = ( $(window).height() - ($('.footer').outerHeight() + 45) - $('.hero-content').height() ) / 2;

    $('.hero-content').css({
      marginTop: halfsies,
      marginBottom: halfsies
    });
  };
  vertCent();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
      vertCent();
    }
  }, 100);

});
