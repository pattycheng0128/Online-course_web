var sendData = document.querySelector('.send');//button
var list = document.querySelector('.list');//ul裡面的li內容
var data = JSON.parse(localStorage.getItem('listData'));

//監聽點擊button後，會發生的事件
sendData.addEventListener('click', addData, false);
//監聽按刪除後，會發生的事件
list.addEventListener('click', deleteData, false);
//更新資料
updateList(data);

function addData(e) {
    e.preventDefault();
    var text = document.querySelector('.text').value;//讀取使用者輸入的資料
    var todo = { content: text };//將輸入的資料放入物件裡面{}
    data.push(todo);//把todo內容加到data陣列
    updateList(data);//更新資料夾
    localStorage.setItem('listData', JSON.stringify(data));//將data的內容記錄到localStorage裡面

}
//更新網頁內容
function updateList(items) {
    str = '';
    var len = items.length;
    for (var i = 0; i < len; i++) {
        str += '<li><img src="images/trash.jpg" style="width:20px;" data-index=' + i + '><span>'
            + items[i].content + '</span></li>';
    }
    list.innerHTML = str;
}

//刪除代辦事項
function deleteData(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') { return }
    var index = e.target.dataset.index;//透過dataset來讀取自訂的資料，第26行
    data.splice(index, 1);//刪除指定的資料
    localStorage.setItem('listData', JSON.stringify(data));//將刪除資料後的data記錄到localStorage中
    updateList(data); //更新資料


}