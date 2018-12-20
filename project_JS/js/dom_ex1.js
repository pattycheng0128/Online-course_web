// var e1=document.getElementById("titleId");//for get id的寫法
// var e1=document.querySelector('#titleId');//修改id內容
// var e2=document.querySelector('.titleClass');//修改class內容
// var e3 = document.querySelector('.titleClass em')//修改em內容

var e4 = document.querySelectorAll('.titleClass em')//修改全部
// e1.textContent='修改titleId';
// e2.textContent='修改titleClass';
// e3.textContent='修改em';
console.log(e4);//吐出來是陣列
e4[0].textContent = '123';
e4[1].textContent = '456';

for(var i=0;i<e4.length;i++){
    e4[i].textContent=i+'123';
}