const rotators = Array.from(document.querySelectorAll('.rotator'))


function replace(element) {
        const activeCase = element.querySelector('.rotator__case_active');
        if (activeCase === element.lastElementChild) {
            element.firstElementChild.classList.add('rotator__case_active');
        } else {
            activeCase.nextElementSibling.classList.add('rotator__case_active');
        }
        activeCase.classList.remove('rotator__case_active');
    }

function rotation(element) {    
    let nIntervId = setInterval(() => replace(element), 1000)
}


rotators.forEach((element) => rotation(element));