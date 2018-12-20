var country = [
    {
        farmer: '卡斯柏'
    },
    {
        farmer: '查理'
    },
    {
        farmer: '約翰'
    }
]
var list = document.querySelector('.list');

//更新農場資料
function updateList() {
    var str = '';
    var len = country.length;
    for (var i = 0; i < len; i++) {
        str += '<li data-num="' + i + '">' + country[i].farmer + '</li>';
    }
    list.innerHTML = str;//這行才會顯示在網頁上
}
updateList();//呼叫function

//選擇是哪個農夫(li)就顯示它的內容
function checkList(e) {
    // console.log(e.target.nodeName);
    var num = e.target.nodeName;
    if (num !== "LI") {return}
    var str = e.target.dataset.num;
    console.log('您現在選擇的農夫是' + country[str].farmer);
    country.splice(num,1);//刪除
    updateList();//重新做更新
}

list.addEventListener('click', checkList);