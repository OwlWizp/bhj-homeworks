const tumblers = Array.from(document.querySelectorAll('.font-size'))
const bookText = document.querySelector('.book')

function moveTumbler(event) {
    event.preventDefault();
    if (!this.classList.contains('font-size_active')) {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        this.classList.add('font-size_active');
        let size = this.dataset.size
        bookText.classList.remove('book_fs-big', 'book_fs-small')
        if (size) {
            bookText.classList.add('book_fs-'+size)
        }
    }
}

tumblers.forEach(tumb => tumb.addEventListener('click', moveTumbler))

