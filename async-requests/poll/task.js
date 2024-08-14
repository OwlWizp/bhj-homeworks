const xhr = new XMLHttpRequest ();
const pollTitle = document.getElementById('poll__title');
const pollAnsvers = document.getElementById('poll__answers');


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('readystatechange', ()=>{
    if (xhr.readyState === xhr.DONE) {
        const jsonData = xhr.response;
        const answers = jsonData["data"]["answers"];
        pollTitle.innerText = jsonData["data"]["title"];

        answers.forEach((answer, index) => {
            const item = document.createElement('button');
            item.className = 'poll__answer';
            item.innerText = answer;
            pollAnsvers.appendChild(item);
            item.addEventListener('click', ()=>{
                alert('Спасибо, ваш голос засчитан!');
                const xhrStat = new XMLHttpRequest;
                xhrStat.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhrStat.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrStat.responseType = "json";
                xhrStat.send( `vote=${jsonData["id"]}&answer=${index}` );
                xhrStat.addEventListener('readystatechange', ()=>{
                    const statArr = xhrStat.response["stat"]
                    pollAnsvers.innerHTML = ``;
                    const summ = statArr.reduce((acc, vote)=> acc + vote["votes"],0,);
                    
                    statArr.forEach((el) => {
                        const statEl = document.createElement('div');
                        statEl.innerHTML = `${el["answer"]}: <b>${(el["votes"]/summ*100).toFixed(2)}%</b>`
                        pollAnsvers.appendChild(statEl);
                    })
                })
            })

        });       
    }
})


