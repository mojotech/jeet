(function() {
  var mainSection, showAllDivs;

  mainSection = $("#demo-container");

  showAllDivs = function() {
    mainSection.find('*').removeClass("faded focused-example focused-parent edit-view unshift-view unstack-view");
  };

  $(".view-example").click(function() {
    var $this, columnParent, dataAttribute, demoDiv, exampleParent, mainChildren, showExample;
    $this = $(this)[0];
    dataAttribute = $this.getAttribute("data-example");
    demoDiv = $("." + dataAttribute);
    exampleParent = demoDiv.parents(":eq(1)");
    columnParent = demoDiv.parents(":eq(2)");
    mainChildren = mainSection.children().not(exampleParent).not(columnParent);
    showExample = function() {
      if (dataAttribute === "edit-example") {
        exampleParent.addClass("edit-view");
      } else if (dataAttribute === "unshift-example") {
        demoDiv.addClass("unshift-view");
      } else if (dataAttribute === "unstack-example") {
        demoDiv.addClass("unstack-view");
      }
      mainChildren.addClass("faded");
      exampleParent.addClass("focused-parent");
      demoDiv.addClass("focused-example");
    };
    showAllDivs();
    showExample();
  });

  $(".close-api").click(function() {
    return showAllDivs();
  });

}).call(this);
