export default function animateNumbers() {
    const comparingBlock = document.querySelector(".comparing");
    const contactNumbers = document.querySelectorAll("._contact-numbers");
    const comparingNumbersNodes = $(".comparing ._output-numbers");
    const animAppraisals = document.querySelectorAll(".js_anim-appraisal");

    let isAnimate = {
        "contacts": [true, true, true],
        "feature-first": true,
        "feature-second": true,
        "feature-third": true,
        "appraisals": [true, true, true, true]
    };

    // Определить на сколько обьект ниже чем край страницы:
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
        };
    }

    function outputNumbers(from, to, outputItem, interval = 5) {
        let current = from;

        function go() {
            outputItem[0].textContent = current;
            if (current == to) {
                clearInterval(timerId);
            }
            current++;
        }

        go();
        let timerId = setInterval(go, interval);
    }

    function animAppraisalsOnScroll(animAppraisals, index) {
        // console.log("index", index);
        const animAppraisal = animAppraisals[index];
        const animAppraisalHeight = animAppraisal.offsetHeight;
        const animAppraisalOffset = offset(animAppraisal).top;
        const animAppraisalStart = 1.1;
        let animAppraisalPoint = window.innerHeight - animAppraisalHeight / animAppraisalStart;
        if (animAppraisalHeight > window.innerHeight) {
            animAppraisalPoint = window.innerHeight - window.innerHeight / animAppraisalStart;
        }
        const animAppraisalRateLine = $(animAppraisal).find(".testimonials__survey-appraisal-rate-line");
        const outputNode = $(animAppraisal).find("._output-numbers");
        const numberTo = Number(outputNode.data("toNumber"));

        if ((pageYOffset > (animAppraisalOffset - animAppraisalPoint)) && (pageYOffset < (animAppraisalOffset + animAppraisalHeight))) {
            if (isAnimate["appraisals"][index] === true) {
                outputNumbers(0, numberTo, outputNode, 10);
                isAnimate["appraisals"][index] = false;
            } else {
                outputNode[0].textContent = numberTo;
            }
            $(animAppraisalRateLine).css("width", `${numberTo}%`);
        }
    }

    if (animAppraisals.length > 0) {
        window.addEventListener("scroll", function () {
            for (let index = 0; index < animAppraisals.length; index++) {
                animAppraisalsOnScroll(animAppraisals, index);
            }
        });
    }

    if (contactNumbers.length > 0) {
        window.addEventListener("scroll", animContactNumbersOnScroll);

        function animContactNumbersOnScroll() {
            for (let index = 0; index < contactNumbers.length; index++) {
                const contactNumbersItem = contactNumbers[index];
                const contactNumbersItemHeight = contactNumbersItem.offsetHeight;
                const contactNumbersItemOffset = offset(contactNumbersItem).top;
                const contactNumbersStart = 1.14; // коэфициэнт = когда 1/n часть элемента проскроллена тогда стартует анимация
                let animItemPoint = window.innerHeight - contactNumbersItemHeight / contactNumbersStart; // момент старта анимации
                if (contactNumbersItemHeight > window.innerHeight) { // когда анимированный обьект выше окна браузера
                    animItemPoint = window.innerHeight - window.innerHeight / contactNumbersStart;
                }

                // pageYOffset это количество проскролленых пикселей
                if ((pageYOffset > contactNumbersItemOffset - animItemPoint) && pageYOffset < (contactNumbersItemOffset + contactNumbersItemHeight)) { // если прокрутили больше чем позиция обьекта минус точка старта но меньше чем низ обьекта
                    const outputNode = $(contactNumbersItem).find("._output-numbers");
                    const numberTo = Number(outputNode.data("toNumber"));
                    if (isAnimate["contacts"][index] === true) {
                        outputNumbers(1, numberTo, outputNode);
                        isAnimate["contacts"][index] = false;
                    } else {
                        outputNode[0].textContent = numberTo;
                    }
                }
            }
        }

        // когда нужна анимация сразу уже при загрузке страницы а не только на скролле:
        // setTimeout(() => {
        //     animOnScroll();
        // }, 100);
    }

    if (comparingBlock !== null && comparingBlock !== undefined) {
        window.addEventListener("scroll", animOnScroll);

        function animOnScroll() {
            const animItemHeight = comparingBlock.offsetHeight;
            const animItemOffset = offset(comparingBlock).top; // на сколько элемент ниже верхнего края страницы
            const animStart = 1.34;
            let animItemPoint = window.innerHeight - animItemHeight / animStart; // момент старта анимации
            if (animItemHeight > window.innerHeight) { // когда анимированный обьект выше окна браузера
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            // console.log("window.innerHeight", window.innerHeight); //528
            // console.log("animItemHeight", animItemHeight); // 1267
            // console.log("pageYOffset", pageYOffset); // 7752
            // console.log("animItemOffset", animItemOffset); // 7385.44
            // console.log("animItemPoint", animItemPoint); // 144.12
            // console.log("animItemOffset + animItemHeight", animItemOffset + animItemHeight); // 8652.44
            let firstOutputNodeParentHeight, secondOutputNodeParentHeight;
            // if ((pageYOffset > animItemOffset + 364) && pageYOffset < (animItemOffset + animItemHeight)) {
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { // если прокрутили больше чем позиция обьекта минус точка старта но меньше чем низ обьекта
                const outputNode = comparingNumbersNodes.get(0);
                const numberTo = Number($(outputNode).data("toNumber"));
                const firstOutputNodeParent = $(outputNode)[0].closest(".comparing__feature-block");
                firstOutputNodeParentHeight = firstOutputNodeParent.offsetHeight;
                const firstOutputAnimRateLine = $(firstOutputNodeParent).find(".comparing__feature-rate-line");
                $(firstOutputAnimRateLine).css("width", `${numberTo}%`);
                firstOutputNodeParent.classList.add("_active");
                if (isAnimate["feature-first"] === true) {
                    outputNumbers(0, numberTo, $(outputNode), 10);
                    isAnimate["feature-first"] = false;
                } else {
                    outputNode.textContent = numberTo;
                }
            }
            if ((pageYOffset > (animItemOffset - (animItemPoint + firstOutputNodeParentHeight))) && pageYOffset < (animItemOffset + animItemHeight)) {
                const outputNodeNext = comparingNumbersNodes.get(1);
                const numberToNext = Number($(outputNodeNext).data("toNumber"));
                const secondOutputNodeParent = $(outputNodeNext)[0].closest(".comparing__feature-block");
                secondOutputNodeParentHeight = secondOutputNodeParent.offsetHeight;
                const secondOutputAnimRateLine = $(secondOutputNodeParent).find(".comparing__feature-rate-line");
                $(secondOutputAnimRateLine).css("width", `${numberToNext}%`);
                secondOutputNodeParent.classList.add("_active");
                if (isAnimate["feature-second"] === true) {
                    outputNumbers(0, numberToNext, $(outputNodeNext), 10);
                    isAnimate["feature-second"] = false;
                } else {
                    $(outputNodeNext)[0].textContent = numberToNext;
                }
            }
            if ((pageYOffset > (animItemOffset - (animItemPoint + firstOutputNodeParentHeight + secondOutputNodeParentHeight))) && pageYOffset < (animItemOffset + animItemHeight)) {
                const outputNodeNext = comparingNumbersNodes.get(2);
                const numberToNext = Number($(outputNodeNext).data("toNumber"));
                const thirdOutputNodeParent = $(outputNodeNext)[0].closest(".comparing__feature-block");
                const thirdOutputAnimRateLine = $(thirdOutputNodeParent).find(".comparing__feature-rate-line");
                $(thirdOutputAnimRateLine).css("width", `${numberToNext}%`);
                thirdOutputNodeParent.classList.add("_active");
                if (isAnimate["feature-third"] === true) {
                    outputNumbers(0, numberToNext, $(outputNodeNext), 10);
                    isAnimate["feature-third"] = false;
                } else {
                    $(outputNodeNext)[0].textContent = numberToNext;
                }
            }
        }
    }
}