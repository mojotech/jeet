$doc          = $(document)
$win          = $(window)
targetNav     = $(".side-nav.default")
orangeSection = $(".installation")
allNavBtns    = $(".side-nav-link")

alignNavs = ->
  scrolled         = $doc.scrollTop()
  targetedPosition = targetNav.offset()
  $(".side-nav.to-be-fixed").each ->
    $this = $(this)
    actualPosition = $this.parents(':eq(1)').offset()
    $this.css "top", (targetedPosition.top - actualPosition.top) + "px"
    return
  return

synchronizeHovers = (navLink) ->
  currentBtnClasses = navLink.attr('class').split(/\s/)
  otherNavBtns      = currentBtnClasses[currentBtnClasses.length-1]
  allNavBtns.removeClass('hover')
  $(".#{otherNavBtns}").addClass('hover')

didResize = null
$win.resize ->
  didResize = true
  return

setInterval (->
  if didResize
    didResize = false
    alignNavs()
  return
), 250

$doc.scroll -> alignNavs()
$(".side-nav-link").hover -> synchronizeHovers($(this))

alignNavs()
