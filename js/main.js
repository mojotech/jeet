$(function() {

  $('.content').anchorific();

  $('.anchorific a').click(function(e) {
    e.preventDefault();
  });

  $('.anchorific a').each(function(e) {
    $(this).attr('data-scroll-nav', e);
  });

  $.scrollIt({
    activeClass: 'scrollIt-active',
    scrollTime: 200,
    topOffset: -20
  });

});
