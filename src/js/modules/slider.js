import slick from "slick-carousel";

export default function slider() {
    const productSlider = $('#js_productSlider');
    const testimonialsSlider = $('#js_testimonialsSlider');

    $(productSlider).on("init", function (event, slick) {
        // const dotsBtns = $('#js_productSlider ul.slick-dots li button');
        // console.log("firstDot", firstDot);
        slick.$dots.find('button').each(function (index) {
            if (index === 0) {
                // console.log("$( this ).find('button')", $( this ).find("button"));
                $(this).css({
                    "transform": "translateX(100%)",
                    "transition": "transform 3000ms linear 0s"
                });
            }
        });
    });

    $(productSlider).slick({
        arrows: false,
        dots: true,
        speed: 500,
        touchMove: false,
        swipe: true,
        centerMode: true,
        centerPadding: '0px',
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
        appendDots: $('.testimonials__slider-dots'),
        autoplay: true,
        pauseOnHover: true
    });

    $(productSlider).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // const dotsBtns = $('#js_productSlider ul.slick-dots li button');

        slick.$dots.children().each(function (index) {
            if (index === nextSlide) {
                //     const nextBtn = $(this).find("button");
                // const promise1 = new Promise((resolve, reject) => {
                $(this).find("button").css({
                    "transform": "translateX(100%)",
                    "transition": "transform 3000ms linear 0s"
                });
                // setTimeout(function(){
                //     resolve("Success!");
                // }, 10);
                // });
                // promise1.then((value) => {
                //     nextBtn.css({"transform": "none", });
                // });

                // setTimeout(function () {
                // nextBtn.css({"transform": "none"});
                // }, 10);
            } else {
                $(this).find("button").css({"transition": "all 0s ease 0s", "transform": "none"});
            }
        });
    });

    $(productSlider).on('afterChange', function (event, slick, currentSlide) {
        // const dotsBtns = $('#js_productSlider ul.slick-dots li button');
        // dotsBtns.each(function (index) {
        slick.$dots.children().each(function (index) {

            if (index === currentSlide) {
                // $(this).find("button").css({"transform": "none"});
                // setTimeout(function () {
                // console.log("afterChange currentSlide dot transform", $(this).css("transform"));
                //     nextBtn.css({"transform": "none", "transition": "all 0s ease 0s"});
                // }, 10);
            } else {
                // $(this).find("button").css({"transition": "all 0s ease 0s", "transform": "translateX(-100%)"});
                // $(this).find("button").css({"transition": "all 0s ease 0s", "transform": "none"});
            }
        });
    });
}

