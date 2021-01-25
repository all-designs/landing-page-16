(function($) {

    //Schedule Box Tabs
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return '<a href="javascript:void(0)">' + (i + 1) + '</a>';
        },
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-image-slider',
        centerMode: true
    });
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });

    $(window).scroll(function() {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 490) {
            $(".manu_bar").addClass("manu_bar_fixed");
        } else {
            $(".manu_bar").removeClass("manu_bar_fixed");
        }
    });



})(window.jQuery);