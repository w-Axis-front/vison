import marquee from "jquery.marquee";

export default function animateLine() {
    window.onload = function () {
        const oQuotes = document.querySelector('.main__line-wrapper');
        $('.main__line-wrapper').marquee({ duplicated: true, startVisible: true, speed: 60 });

        /* Double content: */
        // function fDoublingQuotes() {
            // let nElem = oQuotes.children.length;
            //
            // setInterval(function() {
            //     oQuotes.appendChild(oQuotes.children[0].cloneNode(true));
            // }, 2500);
            // for (let i = 0; i < nElem; i++) {
            //     oQuotes.appendChild(oQuotes.children[i].cloneNode(true));
            // }
            // oQuotes.style.animationDuration = '3s,' + (nElem * 2) + 's';
        // }

        // fDoublingQuotes();
    }
}
