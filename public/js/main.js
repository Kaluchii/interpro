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
});