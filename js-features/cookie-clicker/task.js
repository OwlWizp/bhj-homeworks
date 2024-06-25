const cookie = document.getElementById("cookie")
const clickAmount = document.getElementById("clicker__counter")
const clickSpeed = document.getElementById("clicker__speed")


cookie.onclick = function() {
    let click = Number(clickAmount.textContent)
    let timeNow = new Date();
    clickAmount.textContent = click + 1
    if (click % 2 === 0 ) {
        cookie.width = 300
    } else {
        cookie.width = 200
    }
    speed = 1/((timeNow - this.lastTime)/1000)
    if (isNaN(speed)) {
        clickSpeed. = 0
    } else {
    clickSpeed.textContent = speed.toFixed(2)
    }
    this.lastTime = timeNow
}