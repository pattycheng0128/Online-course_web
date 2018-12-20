var str=document.createElement('em');//在dom新增em
str.textContent='1234';
str.setAttribute('class','blue');//新增class為blue
document.querySelector('.title').appendChild(str);//增加到title內的子節點