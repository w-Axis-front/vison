import getSizes from "./getSizes";

export default function animateNumbers() {
    const contactNumbers = document.querySelectorAll("._contact-numbers");
    const animAppraisals = document.querySelectorAll(".js_anim-appraisal");
    const comparingFeatureBlocks = document.querySelectorAll('.comparing__feature-block');

    let isAnimate = {
        "contacts": true,
        "features": [true, true, true],
        "appraisals": [true, true, true, true]
    };

    function outputNumbers(from, to, outputItem, interval, isRandom = false) {
        let currentInterval;
        let current = from;

        function go() {
            outputItem[0].textContent = current;
            if (current == to) {
                clearInterval(timerId);
            }
            if (isRandom === true) {
                currentInterval = Math.random() * 3000 + interval;

            } else {
                currentInterval = interval;
            }
            current++;
        }

        go();
        let timerId = setInterval(go, currentInterval);
    }

    function animAppraisalsOnScroll(animAppraisal, index) {
        const appraisalSizes = getSizes(animAppraisal);
        const animAppraisalRateLine = $(animAppraisal).find(".testimonials__survey-appraisal-rate-line");
        const outputNode = $(animAppraisal).find("._output-numbers");
        const numberTo = Number(outputNode.data("toNumber"));

        if ((pageYOffset > (appraisalSizes.offset - appraisalSizes.point)) && (pageYOffset < (appraisalSizes.offset + appraisalSizes.h))) {
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
                animAppraisalsOnScroll(animAppraisals[index], index);
            }
        });
    }

    function animFeaturesOnScroll(animFeature, featureIndex) {
        const featureSizes = getSizes(animFeature);
        const animFeatureRateLine = $(animFeature).find(".comparing__feature-rate-line");
        const outputNode = $(animFeature).find("._output-numbers");
        const numberTo = Number(outputNode.data("toNumber"));

        if (pageYOffset > (featureSizes.offset - featureSizes.point) && pageYOffset < (featureSizes.offset + featureSizes.h)) {
            if (isAnimate["features"][featureIndex] === true) {
                $(animFeatureRateLine).css("width", `${numberTo}%`);
                animFeature.classList.add("_active");
                outputNumbers(0, numberTo, outputNode, 10);
                isAnimate["features"][featureIndex] = false;
            } else {
                outputNode[0].textContent = numberTo;
            }
            $(animFeatureRateLine).css("width", `${numberTo}%`);
        }
    }

    if (comparingFeatureBlocks.length > 0) {
        window.addEventListener("scroll", function () {
            for (let index = 0; index < comparingFeatureBlocks.length - 1; index++) {
                animFeaturesOnScroll(comparingFeatureBlocks[index], index);
            }
        });
    }

    if (contactNumbers.length > 0) {
        window.addEventListener("scroll", animContactNumbersOnScroll);

        function animContactNumbersOnScroll() {
            for (let index = 0; index < contactNumbers.length; index++) {
                const contactNumbersItemSizes = getSizes(contactNumbers[index], 1.1);

                if ((pageYOffset > contactNumbersItemSizes.offset - contactNumbersItemSizes.point) && pageYOffset < (contactNumbersItemSizes.offset + contactNumbersItemSizes.h)) { // если прокрутили больше чем позиция обьекта минус точка старта но меньше чем низ обьекта
                    if (isAnimate["contacts"] === true) {
                        for (let idx = 0; idx < contactNumbers.length; idx++) {
                            const outputNode = $(contactNumbers[idx]).find("._output-numbers");
                            const numberTo = Number(outputNode.data("toNumber"));
                            outputNumbers(numberTo, 2 ** 53 - 1, outputNode, 1000, true);
                        }
                        isAnimate["contacts"] = false;
                    }
                }
            }
        }
    }
}