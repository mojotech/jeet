// http://unheap.com

$(function() {
  $('.browsehappy').on('click', function() {
    $(this).slideUp('fast');
  });
});

// scrollIt
(function(c){var b="ScrollIt",a="1.0.3";var d={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};c.scrollIt=function(m){var h=c.extend(d,m),g=0,k=c("[data-scroll-index]:last").attr("data-scroll-index");var i=function(n){if(n<0||n>k){return}var o=c("[data-scroll-index="+n+"]").offset().top+h.topOffset+1;c("html,body").animate({scrollTop:o,easing:h.easing},h.scrollTime)};var j=function(o){var n=c(o.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||c(o.target).closest("[data-scroll-goto]").attr("data-scroll-goto");i(parseInt(n))};var f=function(o){var n=o.which;if(n==h.upKey&&g>0){i(parseInt(g)-1);return false}else{if(n==h.downKey&&g<k){i(parseInt(g)+1);return false}}return true};var l=function(n){if(h.onPageChange&&n&&(g!=n)){h.onPageChange(n)}g=n;c("[data-scroll-nav]").removeClass(h.activeClass);c("[data-scroll-nav="+n+"]").addClass(h.activeClass)};var e=function(){var n=c(window).scrollTop();var p=c("[data-scroll-index]").filter(function(q,r){return n>=c(r).offset().top+h.topOffset&&n<c(r).offset().top+(h.topOffset)+c(r).outerHeight()});var o=p.first().attr("data-scroll-index");l(o)};c(window).on("scroll",e).on("scroll");c(window).on("keydown",f);c("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(n){n.preventDefault();j(n)})}}(jQuery));
