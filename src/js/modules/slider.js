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

    // const slides = $(".slick-slide");
    // const bgColors = ["rgba(252, 213, 196, 0.42)", "rgba(215, 240, 245, 0.54)", "rgba(178, 214, 248, 0.35)", "rgba(246, 208, 231, 0.4)", "rgba(208, 149, 106, 0.2)"];
    // $(slider1).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     // slider1Track.css({"background-color": bgColors[nextSlide]});
    //
    //     let direction;
    //     if (nextSlide == currentSlide) {
    //         direction = "same";
    //     } else if (Math.abs(nextSlide - currentSlide) == 1) {
    //         direction = (nextSlide - currentSlide > 0) ? "right" : "left";
    //     } else {
    //         direction = (nextSlide - currentSlide > 0) ? "left" : "right";
    //     }
    //
    //     slides.each(function () {
    //         const _this = $(this);
    //         const img1 = $(this).find(".main-slider__slide-img1"),
    //             img2 = $(this).find(".main-slider__slide-img2"),
    //             img3 = $(this).find(".main-slider__slide-img3"),
    //             slideNext = $(this).find(".main-slider__slide");
    //         slideNext.css({"background-color": bgColors[nextSlide]});
    //
    //         // Animate images:
    //         if (direction == 'left') {
    //             if (!_this.hasClass("slick-current")) {
    //                 img1.css({"transform": "translateX(-70%)"});
    //                 img2.css({"transform": "translateX(-70%)"});
    //                 img3.css({"transform": "translateX(-65%)"});
    //             } else {
    //                 slideNext.css({"overflow-x": "visible", "overflow-y": "visible"});
    //                 setTimeout(function () {
    //                     slideNext.css({"overflow-x": "hidden", "overflow-y": "hidden"});
    //                 }, 900);
    //             }
    //             img1.css({"transition": "transform 0s ease 0s"});
    //             img2.css({"transition": "transform 0s ease 0s"});
    //             img3.css({"transition": "transform 0s ease 0s"});
    //             setTimeout(function () {
    //                 img1.css({"transition": "transform .7s ease-in 0s", "transform": "translateX(0)"});
    //                 img2.css({"transition": "transform .95s ease-out 0s", "transform": "translateX(0)"});
    //                 img3.css({"transition": "transform .7s ease-in 0s", "transform": "translateX(0)"});
    //             }, 100);
    //         }
    //         if (direction == 'right') {
    //             if (!_this.hasClass("slick-current")) {
    //                 img1.css({"transform": "translateX(70%)"});
    //                 img2.css({"transform": "translateX(70%)"});
    //                 img3.css({"transform": "translateX(65%)"});
    //             }
    //             img1.css({"transition": "transform 0s ease 0s"});
    //             img2.css({"transition": "transform 0s ease 0s"});
    //             img3.css({"transition": "transform 0s ease 0s"});
    //             setTimeout(function () {
    //                 img1.css({"transition": "transform .9s ease-out 0s", "transform": "translateX(0)"});
    //                 img2.css({"transition": "transform .7s ease-in 0s", "transform": "translateX(0)"});
    //                 img3.css({"transition": "transform .95s ease-out 0s", "transform": "translateX(0)"});
    //             }, 100);
    //         }
    //         // end images animation.
    //     });
    // });
}

