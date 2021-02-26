export default function animateLine() {
    window.onload = function () {
        const oQuotes = document.querySelector('.main__line-wrapper');

        /* Double content: */
        function fDoublingQuotes() {
            let nElem = oQuotes.children.length;
            for (let i = 0; i < nElem; i++) {
                oQuotes.appendChild(oQuotes.children[i].cloneNode(true));
            }
            oQuotes.style.animationDuration = '3s,' + (nElem * 2) + 's';
        }

        fDoublingQuotes();
    }
}
