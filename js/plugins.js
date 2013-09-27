// toggleAttr - https://www.inkling.com/read/jquery-cookbook-cody-lindley-1st/chapter-5/recipe-5-7
// Used for hamburger menus
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