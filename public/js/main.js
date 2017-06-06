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
        function stickyProjectCol() {
            $('.project__description-col').stick_in_parent({
                offset_top: 100
            });
        }

        function detachProjectCol() {
            $('.project__description-col').trigger("sticky_kit:detach");
        }

        $(window).on('load', function () {
            var stickable;
            stickable = $('.illustrations').height() > $('.description').height()+100;
            if(($(window).width() > 768) && stickable){
                stickyProjectCol();
            }
        });

        $(window).on('resize', function () {
            var stickable;
            stickable = $('.illustrations').height() > $('.description').height()+100;
            if(($(window).width() > 768) && stickable){
                stickyProjectCol();
            }else{
                if($().stick_in_parent){
                    detachProjectCol();
                }
            }
        });
    }

// TODO: реализовать поочередную анимацию илюстраций при загрузке страницы
// TODO: сделать прелоадер для всей страницы, и плавное появление всего контента на странице

    // Анимация появления илюстраций на странице проекта
    if ($('.illustrations__item').length > 0) {
        $('.illustrations__item').viewportChecker({
            classToAdd: 'animated fadeInLeft',
            offset: 120
        });
    }


    // Алгоритм для двухколоночного блока, с параллакс эффектом у большей из колонок
    if ($('.portfolio__half-screen-col').length > 0) {
        var small_col = $('.portfolio__half-screen-col:first-child');
        var large_col = $('.portfolio__half-screen-col:last-child');

        // Обрезка блока портфолио по меньшему из столбцов
        function parallaxColResize() {
            if($('.portfolio__half-screen-col:last-child').height() < small_col.height()){
                small_col = $('.portfolio__half-screen-col:last-child');
                large_col = $('.portfolio__half-screen-col:first-child');
            }
            $('.portfolio__content').css({'overflow': 'hidden', 'height': small_col.height() + 'px'});
            large_col.css('position', 'relative');
        }

        // Ускоренный скролл для большего из столбцов
        function parallaxCol() {
            var scrollTop = $(window).scrollTop();

            if(scrollTop > 0){
                var scrollBottom = scrollTop + $(window).height();

                if(scrollBottom > small_col.height()){
                    var alt_difference = large_col.height() - small_col.height();
                    large_col.css('top', -alt_difference + 'px');
                }else{
                    var ratio = (large_col.height() - $(window).height()) / (small_col.height() - $(window).height());
                    var increment = (scrollTop * ratio) - scrollTop;
                    large_col.css('top', -increment + 'px');
                }
            }else{
                large_col.css('top', '0');
            }
        }

        $(window).on('resize', function () {
            if($(window).width() > 768){
                parallaxColResize();
                parallaxCol();
            }else{
                $('.portfolio__content').attr('style', '');
                large_col.attr('style', '');
            }
        });
        $(window).on('load', function () {
            if($(window).width() > 768){
                parallaxColResize();
                parallaxCol();
            }
        });
        $(window).on('scroll', function () {
            if($(window).width() > 768){
                parallaxCol();
            }
        });


        // Анимация появления элементов списка проектов
        $('.portfolio-item').viewportChecker({
            classToAdd: 'animated fadeInLeft',
            offset: 120
        });
    }

});