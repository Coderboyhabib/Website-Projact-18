$(document).ready(function ($) {
    "use strict";

    // WOW Js Active
    new WOW().init();

    // ---- Active
    $(".owl").owlCarousel();

    // magnific popup //
    $('#youtube_video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                },
            },
            srcAction: 'iframe_src',
        }
    });
    // magnific popup //

    //skillbar//
    $('.skillbar').skillBars({});
    //skillbar//

    // Countar Up Jquery 
    $('.counter_number').each(function () {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            step: function (func) {
                $(this).text(parseFloat(func).toFixed(size));
            }
        });
    });
    // Countar Up Jquery 

    //mixitup active start
    var mixer = mixitup('.portfolio');
    //mixitup end

    //porfolio_iamge popoup
    $('.image-link').magnificPopup({
        type: 'image'
    });
    //porfolio_iamge popoup


    // wol caroussel Team
    $('.owl_carousel_team').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    // wol caroussel Team

    // wol caroussel Teastimonail
    $('.owl_carousel_tastimonial').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        items: 1,
    })
    // wol caroussel Teastimonail


    // schrool to top

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // scroll to navbar background color chnage
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
            $(".navbar").css("background", "#000");
        } else {
            $(".navbar").css("background", "rgba(0, 0, 0, 0)");
        }
    })
    // scroll to navbar background color chnage

    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })

}(jQuery));
