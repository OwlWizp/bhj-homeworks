const revealAll = Array.from(document.querySelectorAll('.reveal'))

function checkVisible(el) {
    const { top, bottom} = el.getBoundingClientRect();
    if (bottom < 0) {
        return false
    }
    
    if (top > window.innerHeight) {
        return false
    }

    return true
}

revealAll.forEach(el => {
    window.addEventListener('scroll', () => {
        if (checkVisible(el)) {
            el.classList.add('reveal_active')
        } 
        
        if (el.classList.contains('reveal_active') && !checkVisible(el)) {
            el.classList.remove('reveal_active')
        }
    })
    
});
