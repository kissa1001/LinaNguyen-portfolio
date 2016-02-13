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

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1200, 'swing', function () {
            window.location.hash = target;
        });
    });

    //about me toggle
    $( "#btn-bg" ).click(function() {
        $("#myskills").hide();
        $( "#background" ).slideToggle('slow');
    });

    $( "#btn-skls" ).click(function() {
        $( "#myskills" ).slideToggle('slow');
        $("#background").hide();
    });

    // Projects Buttons
    $(".button-fill").hover(function () {
        $(this).children(".button-inside").addClass('full');
    }, function() {
        $(this).children(".button-inside").removeClass('full');
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