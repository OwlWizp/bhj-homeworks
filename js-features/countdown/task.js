const startTime = document.getElementById("timer");
let timerId = setInterval(() => {
    startTime.textContent -= 1;
    if (Number(startTime.textContent) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    }
}, 1000);
