(function() {
  var $doc, $win, alignNavs, allNavBtns, didResize, fixFluidResize, orangeSection, synchronizeHovers, targetNav;

  $doc = $(document);

  $win = $(window);

  targetNav = $(".side-nav.default");

  orangeSection = $(".installation");

  allNavBtns = $(".side-nav-link");

  alignNavs = function() {
    var scrolled, targetedPosition;
    scrolled = $doc.scrollTop();
    targetedPosition = targetNav.offset();
    $(".side-nav.to-be-fixed").each(function() {
      var $this, actualPosition;
      $this = $(this);
      actualPosition = $this.parents(':eq(1)').offset();
      $this.css("top", (targetedPosition.top - actualPosition.top) + "px");
    });
  };

  synchronizeHovers = function(navLink) {
    var currentBtnClasses, otherNavBtns;
    currentBtnClasses = navLink.attr('class').split(/\s/);
    otherNavBtns = currentBtnClasses[currentBtnClasses.length - 1];
    allNavBtns.removeClass('hover');
    return $("." + otherNavBtns).addClass('hover');
  };

  fixFluidResize = function() {
    return setInterval(alignNavs, 0.5);
  };

  didResize = null;

  $win.resize(function() {
    didResize = true;
  });

  setInterval((function() {
    if (didResize) {
      didResize = false;
      alignNavs();
    }
  }), 250);

  $doc.scroll(function() {
    return alignNavs();
  });

  $('.toggle-api').click(function() {
    return fixFluidResize();
  });

  $(".side-nav-link").hover(function() {
    return synchronizeHovers($(this));
  });

  alignNavs();

}).call(this);
