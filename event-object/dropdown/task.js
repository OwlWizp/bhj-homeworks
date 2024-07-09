const dropdown = document.querySelectorAll('.dropdown')
const linkList = document.querySelectorAll('.dropdown__link')

dropdown.forEach((menu) => menu.addEventListener('click', function(event) {
    this.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
}
))

linkList.forEach((link) =>  link.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownTarget = this.closest('.dropdown')
        dropdownTarget.querySelector('.dropdown__value').textContent = this.textContent
    }))





