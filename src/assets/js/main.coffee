if $("html").hasClass("no-touch") and $(window).width() >= 1024

  $('.grid-toggle').click ->
    $(".landing-page").toggleClass "grid-visible"
    if !$('body').hasClass "grid-visible"
      $('.grid-toggle').removeAttr 'data-scroll-goto'
    else
      $('.grid-toggle').attr {'data-scroll-goto' : 9}
    return

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
  ), 50

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

$.get("http://github.cache.mojotech.com/repos/mojotech/jeet/commits").done (commits) ->
  commitMsg = commits[0].commit.message
  truncatedMsg = commitMsg.replace(/\n.*/gmi, '')
  console.log truncatedMsg
  $(".latest-commit-link").html truncatedMsg
  $(".latest-commit-link").attr "href", commits[0].html_url

((i, s, o, g, r, a, m) ->
  i["GoogleAnalyticsObject"] = r
  i[r] = i[r] or ->
    (i[r].q = i[r].q or []).push arguments
    return
  i[r].l = 1 * new Date()
  a = s.createElement(o)
  m = s.getElementsByTagName(o)[0]
  a.async = 1
  a.src = g
  m.parentNode.insertBefore a, m
  return
) window, document, "script", "//www.google-analytics.com/analytics.js", "ga"
ga "create", "UA-5925457-16", "jeet.gs"
ga "send", "pageview"
