var el = document.querySelector('.titleClass a');
el.setAttribute('href', 'http://www.yahoo.com.tw');

var el2 = document.querySelector('.str');
el2.setAttribute('id', 'strId');//透過javascript去動態加id

var el3 = document.querySelector('.titleClass a').getAttribute('href');
console.log(el3);
var el3 = document.querySelector('.titleClass a').textContent;
console.log(el3);
var el3 = document.querySelector('.titleClass').innerHTML;
console.log(el3);
