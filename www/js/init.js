// Init slick slider
$('.screenshots-slider').slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    centerPadding: '146px',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '0px'
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px'
            }
        },
    ] 
});

$('.fade').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

// Init slick nav
$('.header-nav').slicknav({
    appendTo: '#header .container',
    label: ''
});