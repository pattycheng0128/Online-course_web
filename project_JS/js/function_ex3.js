//Hoisting觀念

console.log(a);//undefined
var a = 3
count();//Hello
function count() {
    console.log("Hello");
}
console.log(a);//3