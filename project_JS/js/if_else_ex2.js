
var myBill = 1250;
var VIP = false;
var andCheck = myBill > 1000 && VIP == true;
console.log(andCheck);
document.getElementById('andId').textContent=andCheck;
if(myBill>1000&&VIP==true){
    document.getElementById('andId').textContent="可送贈品";
}else{
    document.getElementById('andId').textContent="帳單未滿1000或不是VIP客戶";
}


var orCheck = myBill > 1000 || VIP == true;
console.log(orCheck);
//document.getElementById('orId').textContent=orCheck;
if (myBill > 1000 || VIP == true){
    document.getElementById('orId').textContent="可送贈品";
}else{
    document.getElementById('orId').textContent="帳單未滿1000或不是VIP客戶";
}

