$(document).ready(function() {
    $('.custom-select').select2();
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
})