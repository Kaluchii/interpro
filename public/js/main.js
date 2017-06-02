$(document).ready(function () {

    $('.sponsor_form').magnificPopup({
        type: 'inline',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = 'mfp-zoom-in';
                $('.popup-input[type=tel]').mask('+7 (000) 000-00-00');
            }
        },
        midClick: true
    });

    $('.menu-toggle').on('click', function () {
        $('.header').toggleClass('header--menu-is-open');
    });


    // Липкий текст на странице проекта
    if ($('.project__description-col').length > 0) {
        $('.project__description-col').stick_in_parent({
            offset_top: 100
        });
    }


    // Анимация появления илюстраций на странице проекта
    if ($('.illustrations__item').length > 0) {
        $('.illustrations__item').viewportChecker({
            classToAdd: 'animated fadeInLeft',
            offset: 120
        });
    }


    // Обрезка блока портфолио по меньшему из столбцов
    if ($('.portfolio__half-screen-col').length > 0) {
        var small_col = $('.portfolio__half-screen-col:first-child');
        var large_col = $('.portfolio__half-screen-col:last-child');

        if($('.portfolio__half-screen-col:last-child').height() < small_col.height()){
            small_col = $('.portfolio__half-screen-col:last-child');
            large_col = $('.portfolio__half-screen-col:first-child');
        }
        $('.portfolio__content').css({'overflow': 'hidden', 'height': small_col.height() + 'px'});
        large_col.css('position', 'relative');







        $(window).on('load resize scroll', parallaxCol);
    }

    function parallaxCol() {
        var alt_difference = large_col.height() - small_col.height();
        var scrollTop = $(window).scrollTop();
        var scrollBottom = scrollTop + $(window).height();

        large_col.css('top', 'px')
    }

    // if(jQuery().stick_in_parent) {
    //     setTimeout(function() {
    //
    //         jQuery(".project__description-col").stick_in_parent({offset_top:100});
    //         if (jQuery(window).width() < 769) { jQuery(".project__description-col").trigger("sticky_kit:detach"); }
    //     }, 400 );
    // }
});