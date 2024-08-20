const textArea = document.getElementById('editor')
const clearTextArea = document.getElementById('clear')

textArea.addEventListener("input", ()=> {
    console.log(textArea.value)
    localStorage.setItem('areaText', textArea.value)
});

window.addEventListener("load", ()=>{
    textArea.value = localStorage.getItem('areaText')
})

clearTextArea.addEventListener('click', () => {
    textArea.value = '';
    localStorage.removeItem('areaText');
})

