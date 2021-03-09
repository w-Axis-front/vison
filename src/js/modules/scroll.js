import getSizes from "./getSizes";

export default function scroll() {
    const btnSticky = document.getElementById("js_btn-sticky");
    const contactsBlockButtons = document.querySelectorAll(".contacts__form-btn");
    const contactsBlockButtonsArr = Array.from(contactsBlockButtons);
    const animItems = document.querySelectorAll("._anim-items");

    if (btnSticky !== undefined && btnSticky !== null) {
        window.addEventListener("scroll", stickBtn);

        function stickBtn() {
            const firstBtnSizes = getSizes(contactsBlockButtonsArr[0]);
            const secondBtnSizes = getSizes(contactsBlockButtonsArr[1]);
            const thirdBtnSizes = getSizes(contactsBlockButtonsArr[2]);

            if ((pageYOffset > 0 && pageYOffset < (firstBtnSizes.offset - firstBtnSizes.point)) ||
                (pageYOffset > (firstBtnSizes.offset + firstBtnSizes.h) && pageYOffset < (secondBtnSizes.offset - secondBtnSizes.point)) ||
                (pageYOffset > (secondBtnSizes.offset + secondBtnSizes.h) && pageYOffset < (thirdBtnSizes.offset - thirdBtnSizes.point))) {
                $(btnSticky).css({"position": "fixed", "bottom": 0, "background-color": "rgba(67, 154, 255, 0.6)"});
            } else {
                $(btnSticky).css({"position": "absolute", "bottom": "48px", "background-color": "transparent"});
            }
        }
    }

    if (animItems.length > 0) {
        window.addEventListener("scroll", animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemSizes = getSizes(animItem, 4);

                if ((pageYOffset > animItemSizes.offset - animItemSizes.point) && pageYOffset < (animItemSizes.point + animItemSizes.h)) {
                    animItem.classList.add("_active");
                }
            }
        }

        animOnScroll();
    }

    // Add smooth scrolling to all links:
    if ($("a").length > 0) {
        $("a").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                let hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    }
}