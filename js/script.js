function mobileMenuToggle() {
    var burger = $('.mobile-menu-toggle');
    var menuMob = $('.mob-menu');

    burger.click(function () {
        menuMob.toggleClass('active');
    })
}

function sliderPlace() {
    $('.slider-place').bxSlider({
        mode: 'fade',
        captions: true,
        pagerType: 'full',
        infiniteLoop: false,
        hideControlOnEnd: true,
        nextText: '',
        prevText: '',
        controls: true
    });
}

function sliderLarnaca() {
    $('.slider-larnaca').bxSlider({
        mode: 'fade',
        captions: false,
        infiniteLoop: false,
        hideControlOnEnd: true,
        adaptiveHeight: false,
        pager: false,
        nextText: '',
        prevText: '',
        controls: true
    });
}

function sliderOpportunities() {
    $('.slider-opportunities').bxSlider({
        captions: true,
        mode: 'fade',
        pagerType: 'full',
        infiniteLoop: true,
        nextText: 'Вперёд',
        prevText: 'Назад',
        minSlides: 2,
        adaptiveHeight: true,
        maxSlides: 3,
        moveSlides: 1,
        controls: true
    });
}


function smoothJumpUp() {
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        }
    });

    $('.arrow-up').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
}

$(window).on('load', function () {
    mobileMenuToggle();
    sliderPlace();
    sliderLarnaca();
    sliderOpportunities();
    smoothJumpUp();
});
