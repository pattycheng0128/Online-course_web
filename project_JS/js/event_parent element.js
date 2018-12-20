//點擊顯示li裡面的文字
var list=document.querySelector('.list');
list.addEventListener('click',checkName,false);
function checkName(e){
    //點擊UL時，console顯示不如預期，所以要用if判斷來將非LI的內容過濾掉
    if(e.target.nodeName !== "LI"){
        return;
    }
    console.log(e.target.textContent);
    console.log(e.target.nodeName);
}