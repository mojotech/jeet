mainSection = $("#demo-container")
showAllDivs = ->
  mainSection.find('*').removeClass "faded focused-example focused-parent edit-view"
  return

$(".view-example").click ->
  $this         = $(this)[0]
  dataAttribute = $this.getAttribute("data-example")
  demoDiv       = $("." + dataAttribute)
  exampleParent = demoDiv.parents(":eq(1)")
  columnParent  = demoDiv.parents(":eq(2)")
  mainChildren  = mainSection.children().not(exampleParent).not(columnParent)
  showExample = ->
    if dataAttribute is "edit-example"
      exampleParent.addClass "edit-view"

    mainChildren.addClass "faded"
    exampleParent.addClass "focused-parent"    
    demoDiv.addClass "focused-example"
    return

  showAllDivs()
  showExample()
  return

$(".close-api").click ->
  showAllDivs()
