//資料內容
var country = [
    { farmer: '查理', place: '信義區' },
    { farmer: '卡斯柏', place: '信義區' },
    { farmer: '小花', place: '中正區' },
]
//要將select和ul資料帶入，所以要新增area和list變數
var area = document.getElementById('areaId');
var list = document.querySelector('.list');

function updateList(e) {
    //1.先取得下拉式選單的值
    var select = e.target.value;
    //2.str組字串用
    var str = '';
    //3.for迴圈來撈出資料
    for (var i = 0; i < country.length; i++) {
        //4.用if來判斷資料正確性
        if (select == country[i].place) {
            str += '<li>' + country[i].farmer + '</li>'
        }
    }
    list.innerHTML=str;
}

//監聽事件
area.addEventListener('change', updateList, false);

