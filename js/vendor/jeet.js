// Jeet Hamburger menu - https://www.inkling.com/read/jquery-cookbook-cody-lindley-1st/chapter-5/recipe-5-7
jQuery.fn.toggleAttr = function( name, onValue, offValue, on ) {
    function set( $element, on ) {
        var value = on ? onValue : offValue;
        return value === null ?
            $element.removeAttr( name ) :
            $element.attr( name, value );
    }
    return on !== undefined ?
        set( this, on ) :
        this.each( function( i, element ) {
            var $element = $(element);
            set( $element, $element.attr(name) !== onValue );
        });
};

// Vertical/horizontal responsive centering
function Midway(){var e=$(".midway-horizontal"),t=$(".midway-vertical");e.each(function(){$(this).css("marginLeft",-$(this).outerWidth()/2)});t.each(function(){$(this).css("marginTop",-$(this).outerHeight()/2)});e.css({display:"inline",position:"absolute",left:"50%"});t.css({display:"inline",position:"absolute",top:"50%"})}$(window).on("load",Midway);$(window).on("resize",Midway);

// Custom Jeet JS
$(function() {
    
    // Placeholder polyfill
    $('input, textarea').placeholder();

    // ChromeFrame slides up on click for oldIE users
    $('.chromeframe').on('click', function() {
        $(this).slideUp('fast');
    });
    
    // Hamburger menu button
    $('.hamburger > button').click(function() {
        $('.hamburger > nav').toggleAttr('style', 'display: block !important;', 'display: none;');
    });

    // Jeet "fixed" (relative) sticky positioning
    if($('[jeet-fixed]').attr('jeet-fixed')) {
        var setPosition = function() {
            $('[jeet-fixed]').css({
                position: 'relative',
                top: $(window).scrollTop() + parseInt($('[jeet-fixed]').attr('jeet-fixed'), 10)
            });
        };
        $(window).scroll(function() {
            if($(window).scrollTop() >= parseInt($('[jeet-pickup]').attr('jeet-pickup'), 10)) {
                setPosition();
                $(window).scroll(function() {
                    var jS;
                    if($('[jeet-speed]').attr('jeet-speed')) {
                        jS = $('[jeet-speed]').attr('jeet-speed');
                    } else {
                        jS = '200ms';
                    }
                    setInterval(function() {
                        if($(window).scrollTop() >= parseInt($('[jeet-pickup]').attr('jeet-pickup'), 10)) {
                            $('[jeet-fixed]').css({
                                position: 'relative',
                                top: $(window).scrollTop() + parseInt($('[jeet-fixed]').attr('jeet-fixed'), 10),
                                transition: 'all '+ jS +' ease'
                            });
                        } else {
                            $('[jeet-fixed]').css({
                                position: 'relative',
                                top: 'auto'
                            });
                        }
                    }, 200);
                });
            }
        });
    }

});