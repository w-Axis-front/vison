export default function dtime() {
    const outputNodes = document.querySelectorAll(".contacts__text2");
    const d = -1;
    let now = new Date();
    now.setDate(now.getDate() + d + 1);
    let dayNum = '';
    if (now.getDate() < 10) {
        dayNum = '0'
    }
    dayNum += now.getDate();
    let monthNum = '';
    if (now.getMonth() + 1 < 10) {
        monthNum = '0'
    }
    monthNum += now.getMonth() + 1;

    for (let idx = 0; idx < outputNodes.length; idx++) {
        outputNodes[idx].textContent = dayNum + "." + monthNum + "." + now.getFullYear();
    }

    // const like_eu = true;
    // if (like_eu === !0) {
    // document.write(dayNum + "." + monthNum + "." + now.getFullYear())
    // } else {
    //     document.write(dayNum + "." + monthNum + "." + now.getFullYear())
    // }
}