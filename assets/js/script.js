/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // set striped background
    $(function () {
        function isStriped(el, reverseAngle, deduct) {
            if (el.length) {
                let container = el.find('.container').outerWidth();
                let stripedWizard = el.find('.striped-wizard').outerWidth();
                let stripedWidth = (($(window).outerWidth() - container) / 2) + (container - stripedWizard);
                reverseAngle ? el.addClass('is-striped reverse-angle').css('--striped-width', `${stripedWidth - deduct}px`) : el.addClass('is-striped').css('--striped-width', `${stripedWidth - deduct}px`)
            }
        }
        isStriped($('.header-top'), false, 20);
        isStriped($('.contact-now'), true, 30);
    });



});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    // Dropdown Menu Slide Toggle
    $(function () {
        if ($('.navbar .dropdown').length) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $('.navbar .dropdown').hover(function () {
                    $(this).children(".dropdown-menu").stop(true, false, true).slideToggle(350);
                });
            }
        }
        $('.navbar-toggler').on('click', function () {
            $('.navbar-toggler').find('span').toggleClass('ni-menu-right ni-cross');
        });
    });


    // bitCoinCarouselInitial
    $(function () {
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                animateOut: 'fadeOut',
                nav: $(window).width() > 1300 ? true : false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navText: ["<span class='ni ni-chevron-left'></span>", "<span class='ni ni-chevron-right'></span>"],
            });
        }
    });

    $(function () {
        if ($('.related-news').length) {
            $(".related-news-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                rewind: true,
                autoplay: true,
                dots: false,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                }
            });
        }


        if ($('.featured-news-carousel').length) {
            $(".featured-news-carousel").owlCarousel({
                items: 1,
                margin: 30,
                nav: false,
                loop: true,
                rewind: true,
                autoplay: true,
                dots: false,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
            });
        }
    });


    // for select#select-country
    $(function () {
        if ($('#select-country').length) {
            function custom_template(obj) {
                var data = $(obj.element).data();
                var text = $(obj.element).text();
                if (data && data['img_src']) {
                    img_src = data['img_src'];
                    template = $("<span class='img-option'><img src=\"" + img_src + "\" style=\"width:20px;height:12px;\" /> " + text + "</span>");
                    return template;
                }
            }
            $('#select-country').select2({
                minimumResultsForSearch: -1,
                'templateSelection': custom_template,
                'templateResult': custom_template,
            });
        }
    });


});
