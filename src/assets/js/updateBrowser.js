/*------------------------------------------------------------

  browserBlast v2.0.0
  Author: Mark Goodyear - http://www.markgoodyear.com
  Git: https://github.com/markgoodyear/browserblast
  Email: hello@markgoodyear.com
  Twitter: @markgdyr

------------------------------------------------------------*/
;var browserBlast=function(e){"use strict";function s(e){var t=document.createElement("div");t.id="browserblast";t.style.zIndex="2147483647";t.innerHTML=i;document.body.appendChild(t);document.documentElement.className+=" unsupported-browser"}function o(){var e=-1;if(navigator.appName==="Microsoft Internet Explorer"){var t=navigator.userAgent;var n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(n.exec(t)!==null){e=parseFloat(RegExp.$1)}}return e}var t=e||{},n=t.devMode||false,r=t.supportedIE||"8",i=t.message||"Hey! Your browser is unsupported. Please <a href='http://browsehappy.com' target='_blank'>upgrade</a> for the best experience.";var u=o();if(u>-1&&u<r+".0"||n===true){s()}};
