const tabButns = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll('.tab__content');



tabButns.forEach((btn, i) => btn.addEventListener('click', () => {
    tabButns.forEach((elem, ind) => {
        elem.classList.remove('tab_active');
        tabContent[ind].classList.remove('tab__content_active');
    });
    btn.classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
}));