const popup = document.getElementById('subscribe-modal')
const popupClose = document.querySelector('.modal__close')


window.addEventListener('load', () => {
    if (getCookie('popupClosed')) {
        return
    }
    popup.classList.add('modal_active');
})

popupClose.addEventListener('click',() => {
    popup.classList.remove('modal_active');
    document.cookie = 'popupClosed=true';
})

function getCookie(name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(name + '='))
    try {
        return cookie.substring(name.lenght + 1)
    } catch {
        return null
    }
}