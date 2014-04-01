if $("html").hasClass("no-touch") and $(window).width() >= 1024

  $('.grid-toggle').click ->
    $(".landing-page").toggleClass "grid-visible"

  equalHeightColumns = -> $(".half, .third, .fourth, .third:before").matchHeight()
  
  equalHeightColumns()

  didResize = null
  $(window).resize ->
    didResize = true
    return

  setInterval (->
    if didResize
      didResize = false
      equalHeightColumns()
    return
  ), 250

  equalColumns = -> setTimeout(equalHeightColumns, 100)
  $('.toggle-api').click -> equalColumns()

ZeroClipboard.config debug: false
client = new ZeroClipboard($(".copy-btn"),
  moviePath: "js/ZeroClipboard.swf"
)

$(".fancybox").fancybox
  helpers:
    media: true
  aspectRatio: true
  scrolling: "no"

$("#menu").slicknav label: ""

$(".scrollTo-mobile").click ->
  $("#menu").slicknav "close"

FastClick.attach(document.body)

$.scrollIt()
browserBlast()
