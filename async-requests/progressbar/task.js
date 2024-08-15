const progressBar = document.getElementById('progress');
const uploadForm = document.getElementById('form');

uploadForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const xhr = new XMLHttpRequest ();

    xhr.upload.addEventListener('progress', (e)=> {
        progressBar.value = (e.loaded/e.total).toFixed(2)
    });

    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(uploadForm);
    xhr.send(formData);
    
})




