//Onclick事件
var elOn = document.querySelector('.btnOn');
elOn.onclick = function () {
    alert('onclick-1');
}
elOn.onclick = function () {
    alert('onclick-2');
}

//addEventListener事件
var elAdd = document.querySelector('.btnAdd');
elAdd.addEventListener('click',function(){
    alert('addEventListener-1');
},false)

elAdd.addEventListener('click',function(){
    alert('addEventListener-2');
},false)