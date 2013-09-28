// unheap.com is a wonderful place to find high quality, modern, JS plugins

// toggleAttr (used for Hamburger Menus) - https://www.inkling.com/read/jquery-cookbook-cody-lindley-1st/chapter-5/recipe-5-7
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