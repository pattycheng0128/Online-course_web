//無判斷空值的錯誤
//事件觸發
// document.getElementById('countId').onclick = function () {
//     var hamPrice = 50;
//     var cokePrice = 20;
//     var hamNum = parseInt(document.getElementById('hamNumId').value) * hamPrice;
//     var cokeNum = parseInt(document.getElementById('cokeNumId').value) * cokePrice;
//     document.getElementById('totalId').textContent = hamNum + cokeNum;

// }

function getTotalPrice(){
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value) * hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value) * cokePrice;
    document.getElementById('totalId').textContent = hamNum + cokeNum;
}

