/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

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