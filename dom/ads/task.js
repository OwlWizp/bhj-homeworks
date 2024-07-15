const rotators = Array.from(document.querySelectorAll('.rotator'))


function rotation(element) {
    function replace() {
        const activeCase = element.querySelector('.rotator__case_active');
        activeCase.nextElementSibling.classList.add('rotator__case_active');
        activeCase.classList.remove('rotator__case_active');
    }
    setInterval(replace(), 1000);
}

rotators.forEach((element) => rotation(element));