var farms = [
    {
        farmer: '卡斯柏',
        dogs: ['張姆士', '龐德']
    },
    {
        farmer: '查理',
        dogs: ['皮皮']
    }

];

var el = document.querySelector('.list');
var farmLen = farms.length;
// console.log(farmLen);
var str = '';//做累加字串的動作，所以先給一個空字串

for (var i = 0; i < farmLen; i++) {
    var content = '<li>' + farms[i].farmer + '</li>';
    // el.innerHTML=content;//error
    str += content;
    console.log(str);
}
el.innerHTML=str;