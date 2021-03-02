import slick from "slick-carousel";

export default function slider() {
    const productSlider = $('#js_productSlider');

    $(productSlider).slick({
        arrows: false,
        dots: true,
        speed: 500,
        touchMove: false,
        swipe: true,
        centerMode: true,
        centerPadding: '0px',
        // variableWidth: true,
        appendDots: $('.product__slider-dots')
    });

    // $(slider1).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     let direction;
    //     if (nextSlide == currentSlide) {
    //         direction = "same";
    //     } else if (Math.abs(nextSlide - currentSlide) == 1) {
    //         direction = (nextSlide - currentSlide > 0) ? "right" : "left";
    //     } else {
    //         direction = (nextSlide - currentSlide > 0) ? "left" : "right";
    //     }
    // });
}

