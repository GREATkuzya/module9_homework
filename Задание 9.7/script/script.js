window.onload = ()=> {
  let storData=window.localStorage.getItem('pageData');
  let storLimit=window.localStorage.getItem('limitData');
  if (storData && storLimit) {
    sendXHR(storData, storLimit);
  }
  }

let divNode = document.querySelector('.div');
let btnNode = document.querySelector('.button');

function checkLimit(value) {
  if (value<=10 && value>=1){
 return true;
 } else {
 return false;
 }
 }

function sendXHR(pageField, limitField) {
  let xhr = new XMLHttpRequest();
          xhr.open('GET', `https://picsum.photos/v2/list?page=${pageField}&limit=${limitField}`, true);
          xhr.send();
          xhr.onload = function() {
            if (xhr.status != 200) { 
              console.log(`Error`);
            } else {
          let result = JSON.parse(xhr.response);
          gallery(result);
                                        }                                                       
}}

function gallery(result) {
                let cards = '';
                  result.forEach(item => {
                      let cardBlock = `<div class="card"><img src="${item.download_url}" class="card-image"></div>`;
                  cards +=  cardBlock;
                });         
                divNode.innerHTML = cards;
                
}


 btnNode.addEventListener('click', () => {
  let pageField = document.querySelector('.input1').value;
  let limitField = document.querySelector('.input2').value;
  let limitPage=checkLimit(pageField);
  let limitLimit=checkLimit(limitField);
  if (limitPage && limitLimit) {
	    window.localStorage.setItem("pageData", pageField);
		window.localStorage.setItem("limitData", limitField);
    sendXHR(pageField, limitField);
 } else if (!limitPage && !limitLimit) {
    divNode.innerHTML=`<br><span>«Страница и лимит вне диапазона от 1 до 10»</span>`; }
 else if (limitPage) {
   divNode.innerHTML=`<br><span>«Лимит вне диапазона от 1 до 10»</span>`;
 } else {
   divNode.innerHTML= `<br><span>«Страница вне диапазона от 1 до 10»</span>`;
 }
 }); 


   