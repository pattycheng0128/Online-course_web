var btn=document.querySelector('.btn');
var btn2=document.querySelector('.btn2');

//監聽事件btn
btn.addEventListener('click',function(e){
    alert('alert');
},false);
//監聽事件btn2
btn2.addEventListener('click',function(e){
    alert('addEventListener事件');
},false)