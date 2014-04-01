(function() {
  var client, didResize, equalColumns, equalHeightColumns;

  if ($("html").hasClass("no-touch") && $(window).width() >= 1024) {
    $('.grid-toggle').click(function() {
      return $(".landing-page").toggleClass("grid-visible");
    });
    equalHeightColumns = function() {
      return $(".half, .third, .fourth, .third:before").matchHeight();
    };
    equalHeightColumns();
    didResize = null;
    $(window).resize(function() {
      didResize = true;
    });
    setInterval((function() {
      if (didResize) {
        didResize = false;
        equalHeightColumns();
      }
    }), 250);
    equalColumns = function() {
      return setTimeout(equalHeightColumns, 100);
    };
    $('.toggle-api').click(function() {
      return equalColumns();
    });
  }

  ZeroClipboard.config({
    debug: false
  });

  client = new ZeroClipboard($(".copy-btn"), {
    moviePath: "js/ZeroClipboard.swf"
  });

  $(".fancybox").fancybox({
    helpers: {
      media: true
    },
    aspectRatio: true,
    scrolling: "no"
  });

  $("#menu").slicknav({
    label: ""
  });

  $(".scrollTo-mobile").click(function() {
    return $("#menu").slicknav("close");
  });

  FastClick.attach(document.body);

  $.scrollIt();

  browserBlast();

}).call(this);
