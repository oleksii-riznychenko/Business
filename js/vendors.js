$('#investors').click(function (e) {
    e.preventDefault();
    if ($('.menu__body').hasClass('active')) {
        $('.menu__body,.icon-menu').removeClass('active');
        $('body').removeClass('lock');
    }
    $('html, body').animate({
        scrollTop: $(".block-investor").position().top
    }, 1000);
});
$('#aboutus').click(function (e) {
    e.preventDefault();
    if ($('.menu__body').hasClass('active')) {
        $('.menu__body,.icon-menu').removeClass('active');
        $('body').removeClass('lock');
    }
    $('html, body').animate({
        scrollTop: $(".block-main-text").position().top
    }, 1000);
});
$('#media').click(function (e) {
    e.preventDefault();
    if ($('.menu__body').hasClass('active')) {
        $('.menu__body,.icon-menu').removeClass('active');
        $('body').removeClass('lock');
    }
    $('html, body').animate({
        scrollTop: $(".block-card").position().top
    }, 1000);
});
$('#locations').click(function (e) {
    e.preventDefault();
    if ($('.menu__body').hasClass('active')) {
        $('.menu__body,.icon-menu').removeClass('active');
        $('body').removeClass('lock');
    }
    $('html, body').animate({
        scrollTop: $(".block-map").position().top
    }, 1000);
});
$('#business').click(function (e) {
    e.preventDefault();
    if ($('.menu__body').hasClass('active')) {
        $('.menu__body,.icon-menu').removeClass('active');
        $('body').removeClass('lock');
    }
    $('html, body').animate({
        scrollTop: $(".header").position().top
    }, 1000);
});