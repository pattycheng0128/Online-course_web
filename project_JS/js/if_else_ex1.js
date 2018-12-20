var myMonth = 1;
var thisMonth = 10;
var birthdayCheck = myMonth == thisMonth;
console.log(birthdayCheck);
//document.getElementById('birthdayId').textContent = birthdayCheck;
if (myMonth==thisMonth){
    document.getElementById('birthdayId').textContent="是的，我是本月壽星";
}else{
    document.getElementById('birthdayId').textContent="我不是本月壽星";
}



var nowPeople=1;
var totalPeople=2;
var allPeopleNoHereCheck=nowPeople!==totalPeople;
console.log(allPeopleNoHereCheck);
//document.getElementById('PeopleId').textContent=allPeopleNoHereCheck;
if(nowPeople!==totalPeople){
    document.getElementById('PeopleId').textContent="目前還差一位";
}else{
    document.getElementById('PeopleId').textContent="已到齊";
}