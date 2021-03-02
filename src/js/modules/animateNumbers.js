export default function animateNumbers() {
    const animNumbers = document.querySelectorAll("._anim-numbers");
    let isAnimate = [true, true, true];

    // Определить на сколько обьект ниже или левее чем край страницы:
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            // scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            // left: rect.left + scrollLeft
        }
    }

    function outputNumbers(from, to, outputItem) {
        let current = from;

        function go() {
            outputItem[0].innerHTML = current;
            if (current == to) {
                clearInterval(timerId);
            }
            current++;
        }

        go();
        let timerId = setInterval(go, 5);
    }

    if (animNumbers.length > 0) {
                window.addEventListener("scroll", animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animNumbers.length; index++) {
                const animItem = animNumbers[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 1.14; // коэфициэнт = когда 1/n часть элемента проскроллена тогда стартует анимация
                let animItemPoint = window.innerHeight - animItemHeight / animStart; // момент старта анимации
                if (animItemHeight > window.innerHeight) { // когда анимированный обьект выше окна браузера
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                // pageYOffset это количество проскролленых пикселей

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { // если прокрутили больше чем позиция обьекта минус точка старта но меньше чем низ обьекта
                    const outputNode = $(animItem).find("._output-numbers");
                    const numberTo = Number(outputNode.data("toNumber"));
                    if (isAnimate[index] === true) {
                        outputNumbers(1, numberTo, outputNode);
                        isAnimate[index] = false;
                    } else {
                        outputNode[0].innerHTML = numberTo;
                    }
                // } else {
                //     isAnimate[index] = false;
                    // добавляем клас _anim-no-hide тем элементам которые не хотим анимировать при обратном скролле вверх
                    // if (!animItem.classList.contains("_anim-no-hide")) {
                    //     animItem.classList.remove("_active"); // чтоб повторно анимировать обьект потом
                // }
                }
            }
        }

        // когда нужна анимация сразу уже при загрузке страницы а не только на скролле:
        // setTimeout(() => {
        //     animOnScroll();
        // }, 100);
    }
}