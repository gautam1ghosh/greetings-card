jQuery(document).ready(function() {
    (function ($) {
        $('.custom-select').select2();
        backToTop();
        bs4Accordion();
        loadMore();
        aosActivation();
        msgBox();
    })(jQuery);
});

jQuery(window).on('scroll', function () {   
    (function ($) {
        backToTopVisible();
    })(jQuery);
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

function aosActivation() {
    if ($('[data-aos]').length) {
        AOS.init({
            once: true,
            disable: 'mobile'
        });
    };
}

function msgBox() {
    if($('.msg-box').length) {
        $('.msg-box').on('keyup keypress', function() {
            $(this).height(0);
            $(this).height(this.scrollHeight);
        });
    }
}


function bs4Accordion() {
    $('.faq-container [data-bs-toggle=collapse]').on('click', function (e) {
        e.preventDefault();
        if(! $(this).hasClass('collapsed')){
            e.stopPropagation();
            return false;
        }
    });
}

(function () {
    $('.hamburger-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.nav-main').toggleClass('focus');
    })
    $('.nav-main a').on('click', function () {
        $('.hamburger-menu').removeClass('animate');
        $('.nav-main').removeClass('focus');
    })
    $('.page-wrapper').on('click', function () {
        if($('.hamburger-menu').hasClass('animate')) {
            $('.hamburger-menu').toggleClass('animate');
        } 
        if($(".nav-main").hasClass('focus')) {
            $('.nav-main').toggleClass('focus');
        } 
    })
})();

/* Back2Top button function */
function backToTop() {
    if($('.back2Top').length) {
        $('.back2Top').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        });
    };
}

/* Back2Top button visibility */
function backToTopVisible() {
    if ($('.back2Top').length) {
        if ($(window).scrollTop() > 300) {
            $(".back2Top").addClass("totop");
        } else {
            $(".back2Top").removeClass("totop");
        }
    };
}

function loadMore() {
    if ($('.card-wrapper').length) {
        $('.card-wrapper').simpleLoadMore({
            item: '.greet-card',
            count: 10,
            itemsToLoad: 5,
            btnHTML: '<a href="#" class="theme-btn">Load More Cards <i class="fa fa-refresh ms-3"></i></a>',
            btnWrapper: '<div class="text-center my-3"></div>'
        });
    };
}



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