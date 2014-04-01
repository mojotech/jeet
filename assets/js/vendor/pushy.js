/*! Pushy - v0.9.1 - 2013-9-16
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

$(function() {

  var pushy = $('.pushy'), //menu css class
    body = $('body'),
    container = $('#demo-container'), //container css class
    push = $('.interactive-api'), //css class to add pushy capability
    pushyClass = "pushy-left pushy-open", //menu position & menu open class
    pushyActive = "pushy-active",
    containerClass = "container-push", //container open class
    pushClass = "push-push", //css class to add pushy capability
    menuBtn = $('.toggle-api'), //css classes to toggle the api
    menuSpeed = 200; //jQuery fallback menu speed
    menuWidth = ((body.width() * 0.3) + "px"); //jQuery fallback menu width

  function togglePushy(){
    body.toggleClass(pushyActive);
    pushy.toggleClass(pushyClass);
    container.toggleClass(containerClass);
    push.toggleClass(pushClass); //css class to add pushy capability
  }

  function openPushyFallback(){
    body.addClass(pushyActive);
    pushy.animate({left: "0%"}, menuSpeed);
    container.animate({left: menuWidth}, menuSpeed);
    push.animate({left: menuWidth}, menuSpeed); //css class to add pushy capability
  }

  function closePushyFallback(){
    body.removeClass(pushyActive);
    pushy.animate({left: "-" + menuWidth}, menuSpeed);
    container.animate({left: "0%"}, menuSpeed);
    push.animate({left: "0%"}, menuSpeed); //css class to add pushy capability
  }

  //keep track of menu state (open/close)
  var state = true;

  if(Modernizr.csstransforms3d){
    //toggle menu
    menuBtn.click(function() {
      if (state) {
        togglePushy();
        state = false;
      } else {
        togglePushy();
        state = true;
      }
    });
  }else{
    //jQuery fallback
    pushy.css({left: "-" + menuWidth}); //hide menu by default
    container.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

    //toggle menu
    menuBtn.click(function() {
      if (state) {
        openPushyFallback();
        state = false;
      } else {
        closePushyFallback();
        state = true;
      }
    });
  }

  var screenResized = false;
  
  $(window).resize(function() {
    screenResized = true;
  });

  setInterval((function() {
    if (screenResized) {
      if ($(window).width() <= 1024 && !state) {
        if(Modernizr.csstransforms3d){
          body.removeClass(pushyActive);
          pushy.addClass('pushy-left');
          pushy.removeClass('pushy-open');
          container.removeClass(containerClass);
          push.removeClass(pushClass); //css class to add pushy capability
          state = true;
        }else{
          closePushyFallback();
          state = true;
        }
      }
      screenResized = false;
    }
  }), 250);

});
