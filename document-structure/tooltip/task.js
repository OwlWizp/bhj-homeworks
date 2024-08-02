const tooltipLink = document.querySelectorAll('.has-tooltip')

Array.from(tooltipLink).forEach((link) => {
    
    link.insertAdjacentHTML('afterEnd', `<div class="tooltip">${link.title}</div>`);
    console.log(link.scrollTop);
    const tip = link.nextElementSibling;
    tip.style.left = link.offsetLeft + "px";
    tip.style.top = (link.offsetTop + link.offsetHeight) + "px";
    
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const active = document.querySelector('.tooltip_active')
        if (active === tip) {
            tip.classList.toggle('tooltip_active');
        } else if (active) {
            active.classList.remove('tooltip_active')
            tip.classList.add('tooltip_active')
        } else {
            tip.classList.add('tooltip_active')
        }
        
    })

    document.addEventListener('scroll', (e) => {
        tip.style.top = (link.offsetTop + link.offsetHeight - window.scrollY) + "px";
    })
} )