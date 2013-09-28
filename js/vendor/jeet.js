// Placeholder polyfill
$('input, textarea').placeholder();

// ChromeFrame slides up on click for oldIE users
$('.chromeframe').on('click', function() {
    $(this).slideUp('fast');
});

// Jeet Hamburger menu - https://www.inkling.com/read/jquery-cookbook-cody-lindley-1st/chapter-5/recipe-5-7
jQuery.fn.toggleAttr = function( name, onValue, offValue, on ) {
    function set( $element, on ) {
        var value = on ? onValue : offValue;
        return value == null ?
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
$('.hamburger > button').click(function() {
    $('.hamburger > nav').toggleAttr('style', 'display: block !important;', 'display: none;')
});

// Jeet "fixed" positioning
if($('[jeet-fixed]').attr('jeet-fixed')) {    
    $('[jeet-fixed]').css({
        position: 'relative',
        top: $(window).scrollTop() + parseInt($('[jeet-fixed]').attr('jeet-fixed'), 10)
    });
    $(window).scroll(function() {
        if($('[jeet-speed]').attr('jeet-speed')) {
            var jS = $('[jeet-speed]').attr('jeet-speed');
        } else {
            var jS = '200ms';
        }
        setInterval(function() {
            $('[jeet-fixed]').css({
                position: 'relative',
                top: $(window).scrollTop() + parseInt($('[jeet-fixed]').attr('jeet-fixed'), 10),
                transition: 'all '+ jS +' ease'
            });
        }, 200);
    });
}