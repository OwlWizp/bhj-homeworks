const xhr = new XMLHttpRequest ();
const form = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');


function xhrCreator (metod, url, send) {
    xhr.open(metod, url);
    xhr.send(send)
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (!checkForm (form)) {
        alert('введите все поля')
        return
    }
    
    const formData = new FormData(form);
    xhrCreator("POST", "https://students.netoservices.ru/nestjs-backend/auth", formData);
    xhr.addEventListener('loadend',()=> {
        const result = JSON.parse(xhr.response);
        if (result.success) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            console.log(result);
            welcome.append(result.user_id);      
            localStorage.setItem('user_id', result.user_id);
        } else {
            alert('Неверный логин/пароль')
        }
        

    })
    
})

window.addEventListener('load',()=>{
        const userAuth = localStorage.getItem('user_id');

        if (userAuth) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            welcome.append(userAuth);
        }
})

function checkForm (form) {   
    const rows = Array.from(form.querySelectorAll('.control'));
    return rows.every((row)=> row.value.trim() !== '')
}




