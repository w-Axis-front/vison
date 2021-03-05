export default function getSizes(el, start = 1000) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elHeight = el.offsetHeight;
    let point = window.innerHeight - elHeight / start;

    if (elHeight > window.innerHeight) {
        point = window.innerHeight - window.innerHeight / start;
    }
    return {
        h: el.offsetHeight,
        offset: el.getBoundingClientRect().top + scrollTop,
        point
    }
}