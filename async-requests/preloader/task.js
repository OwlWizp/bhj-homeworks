const xhr = new XMLHttpRequest ();
const items = document.getElementById('items');
const loader = document.getElementById('loader');
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.addEventListener('readystatechange', ()=>{
    if (xhr.readyState === xhr.DONE) {
        const jsonData = xhr.response;
        const valutes = jsonData["response"]["Valute"];
        loader.classList.remove('loader_active');
        Object.values(valutes).forEach((valute) => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `<div class="item__code">
                    ${valute["CharCode"]}
                </div>
                <div class="item__value">
                    ${valute["Value"]}
                </div>
                <div class="item__currency">
                    руб.
                </div>`;
            items.appendChild(item);

        });       
    }
})

xhr.send()