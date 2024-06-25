const dead = document.getElementById(`dead`)
const lost = document.getElementById(`lost`)


for (i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`)
    hole.onclick = function() {
        
        if (hole.className.includes( 'hole_has-mole' )){
            dead.textContent = Number(dead.textContent) + 1                       
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }
        
        if (Number(dead.textContent) > 9) {
            alert('Победа!')
            dead.textContent = 0
            lost.textContent = 0
        }

        if (Number(lost.textContent) > 4) {
            alert('Вы проиграли!')
            dead.textContent = 0
            lost.textContent = 0
        }

    }
}

