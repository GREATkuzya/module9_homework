let value = document.querySelector('.input').value;
let divNode = document.querySelector('.div');
let btnNode = document.querySelector('.button');

//console.log(value);

btnNode.addEventListener('click', f1);
function f1() {
    let value = document.querySelector('.input').value;
   
if (value <=10 && value >= 0 ) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`, true);
    xhr.send();
    xhr.onload = function() {
    let result = JSON.parse(xhr.response);
          console.log(result);
          let cards = '';
            result.forEach(item => {
                let cardBlock = `
              <div class="card"><img src="${item.download_url}" class="card-image"></div>
            `;
            cards +=  cardBlock;
          });         
          divNode.innerHTML = cards;
}

}
else {
  let err2 = `<br><span>«число вне диапазона от 1 до 10»</span>`;
  divNode.innerHTML = err2;
}
}