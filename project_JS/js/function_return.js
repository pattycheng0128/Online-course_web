//計算漢堡的總價
function getHamPrice(num) {
    var hamPrice = 50;
    var total = hamPrice * num;

    return total;

}
var tom = getHamPrice(20);
var John = getHamPrice(10);
console.log(tom,John);