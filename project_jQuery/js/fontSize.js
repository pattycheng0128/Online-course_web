$(document).ready(function () {
    //font-big
    $('.big').click(function (event) {
        event.preventDefault();
        $('.content p').css('font-size', '35px');
    });

    //font-middle
    $('.middle').click(function (event) {
        event.preventDefault();
        $('.content p').css('font-size', '25px');
    });

    //font-small
    $('.small').click(function (event) {
        event.preventDefault();
        $('.content p').css('font-size', '15px');
    });
});