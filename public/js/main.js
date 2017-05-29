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


    $('.project__description-col').stick_in_parent({
         offset_top: 100
     });


    $('.illustrations__item').boxLoader({
        direction:"x",
        position: "0",
        effect: "FadeIn",
        duration: "1s",
        windowarea: "50%"
    });


    // if(jQuery().stick_in_parent) {
    //     setTimeout(function() {
    //
    //         jQuery(".project__description-col").stick_in_parent({offset_top:100});
    //         if (jQuery(window).width() < 769) { jQuery(".project__description-col").trigger("sticky_kit:detach"); }
    //     }, 400 );
    // }
});