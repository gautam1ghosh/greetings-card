$(document).ready(function() {
    $('.custom-select').select2();
    $(".menu-switch").on('click', function () {
        if($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
        } else {
            $(this).addClass('is-active');
        }
        if($(".nav-main").hasClass('focus')) {
            $(".nav-main").removeClass('focus');
        } else {
            $(".nav-main").addClass('focus');
        }
    });
});

var $navi = $("header"), scrollTop = 0;
    $(window).scroll(function () {
    var y = $(this).scrollTop(), speed = 0.05, pos = y * speed, maxPos = 110;
    if (y > scrollTop) {
        pos = maxPos;
    } else {
        pos = 0;
    }
    scrollTop = y;
    $navi.css({
        "-webkit-transform": "translateY(-" + pos + "%)",
        "-moz-transform": "translateY(-" + pos + "%)",
        "-o-transform": "translateY(-" + pos + "%)",
        "transform": "translateY(-" + pos + "%)"
    });
    });

$('.card-wrapper').simpleLoadMore({
    item: '.greet-card',
    count: 10,
    itemsToLoad: 5,
    btnHTML: '<a href="#" class="theme-btn">Load More Cards <i class="fa fa-refresh ms-3"></i></a>',
    btnWrapper: '<div class="text-center my-3"></div>'
});

$('.fav').on('click', function () {
    if($(this).hasClass('faved')) {
        $(this).removeClass('faved');
    } else {
        $(this).addClass('faved');
    }
});

$(".upload-image a").on('click', function(e) {
    e.preventDefault();
    $('#uploadImg').trigger('click'); 
});