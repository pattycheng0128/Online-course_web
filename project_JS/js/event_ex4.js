// var elBox = document.querySelector('.box');
// elBox.addEventListener('click', function () {
//     alert('box');
//     console.log('box');
// }, false);

// var elBody = document.querySelector('.body');
// elBody.addEventListener('click',function(){
//     alert('body');
//     console.log('body');
// }, false);

//搭配.html中的事件捕捉
// var elBox = document.querySelector('.box');
// elBox.addEventListener('click', function () {
//     alert('box');
//     console.log('box');
// }, true);

// var elBody = document.querySelector('.body');
// elBody.addEventListener('click',function(){
//     alert('body');
//     console.log('body');
// }, true);

//中止氣泡事件
var elBox = document.querySelector('.box');
elBox.addEventListener('click', function () {
    alert('你沒點到box');
    console.log('你沒點到box');
}, true);

var elBody = document.querySelector('.body');
elBody.addEventListener('click',function(e){
    e.stopPropagation();
    alert('你有點到body');
    console.log('你有點到body');
}, true);