export default function nav() {
    const burger_button = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav');
    const burgerNav = $('.burger-menu');
    const logoImg = $(".nav__logo-img");
    const wrapNav = $(".nav__wrap-menu");
    const langBlock = $(".nav__lang");
    const burgerNavItems = document.querySelectorAll(".burger-menu__link");

    function closeNav() {
        burgerNav.hide();
        burger_button.classList.remove('nav__burger--active');
        nav.classList.remove('nav_active');
    }

    function dropMenu() {
        if (burger_button.classList.contains('nav__burger--active')) {
            closeNav();
        } else {
            burger_button.classList.add('nav__burger--active');
            burgerNav.show();
            // document.querySelector('.burger-menu').style.display = 'block';
            nav.classList.add('nav_active');
        }
    }

    function scrollHandler() {
        if (burger_button) {
            burger_button.addEventListener('click', dropMenu);
        }
        for (let i = 0; i <= burgerNavItems.length; i++) {
            burgerNavItems[i].addEventListener('click', closeNav);
        }
        wrapNav.stop().css("display", "none");
        logoImg.stop().css("display", "inline-block");
        langBlock.stop().css("display", "none");
    }
    scrollHandler();
}
