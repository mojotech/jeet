$(function() {

  // Sticky footer
  var bumpIt = function() {
        $('body').css('margin-bottom', $('.footer').outerHeight() + 45);
      },
      didResize = false;
  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

});
