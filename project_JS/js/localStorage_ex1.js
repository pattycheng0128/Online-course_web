// var str='Patty';
// //設定值
// localStorage.setItem("myName",str);
// //取出值
// console.log(localStorage.getItem('myName'));

var btn = document.querySelector('.btnClass');
var btnCall = document.querySelector('.btnCall');

function saveName(e) {
    var str = document.querySelector('.textClass').value;
    localStorage.setItem('myName', str);
}

function callName(e) {
    var str = localStorage.getItem('myName');
    alert("您的名字是:" + str);
}

btn.addEventListener('click', saveName);
btnCall.addEventListener('click', callName);
