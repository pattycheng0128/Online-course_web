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
for (var i = 0; i < farmLen; i++) {
    var str = document.createElement('li');
    str.textContent = farms[i].farmer;
    console.log(str);
    el.appendChild(str);//增加節點到li的子節點
}