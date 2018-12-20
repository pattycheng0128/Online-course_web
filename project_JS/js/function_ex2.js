var total;//全域變數
function count(oneNum, twoNum) {
    total = oneNum * twoNum;//相同名稱若再做一次宣告(加var是代表區域變數)
    console.log(total);
}
count(3,5);
console.log(total);