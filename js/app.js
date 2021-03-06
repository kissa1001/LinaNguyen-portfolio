
$(function() {
    
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Smooth scroll

    $('.navpoint').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1200, 'easeInOutCirc', function () {
            window.location.hash = target;
        });
    });
    //skillset hover
    $('.skill').hover(function() {
        $(this).stop().animate({
            top: -21
        }, 900, "easeOutBounce");
    }, function() {
        $(this).stop().animate({
            top: 0
        }, 900, "easeOutBounce");
    });
    
    //animation 
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
    } else {
        $element.removeClass('in-view');
    }
});
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

});