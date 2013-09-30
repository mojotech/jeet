$(function() {
    
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