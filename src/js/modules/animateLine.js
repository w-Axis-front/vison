import marquee from "jquery.marquee";

export default function animateLine() {
    const marquee = $('.main__line-wrapper');

    if (marquee.length > 0) {
        marquee.marquee({duplicated: true, startVisible: true, speed: 60});
    }
}
