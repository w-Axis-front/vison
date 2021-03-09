import slick from "slick-carousel";

export default function slider() {
    const productSlider = $('#js_productSlider');
    const testimonialsSlider = $('#js_testimonialsSlider');

    $(productSlider).slick({
        arrows: false,
        dots: true,
        speed: 500,
        touchMove: false,
        swipe: true,
        centerMode: true,
        centerPadding: '0px',
        // appendDots: $('.product__slider-dots'),
        autoplay: true
    });

    $(testimonialsSlider).slick({
        arrows: false,
        dots: true,
        speed: 500,
        touchMove: false,
        swipe: true,
        centerMode: true,
        centerPadding: '0px',
        adaptiveHeight: true,
        // appendDots: $('.testimonials__slider-dots'),
        autoplay: true
    });

    // $(testimonialsSlider).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     let direction;
    //     if (nextSlide == currentSlide) {
    //         direction = "same";
    //     } else if (Math.abs(nextSlide - currentSlide) == 1) {
    //         direction = (nextSlide - currentSlide > 0) ? "right" : "left";
    //     } else {
    //         direction = (nextSlide - currentSlide > 0) ? "left" : "right";
    //     }
    //     setTimeout(function () {
    //         slick.$list.css({"overflow": "hidden"});
    //     }, 10);
    // });

    // $(testimonialsSlider).on('afterChange', function (event, slick, currentSlide) {});
}

