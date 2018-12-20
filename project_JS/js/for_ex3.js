//for撈出陣列裡面的值，然後做加總
var farms = [
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 180,
        banana: 1000
    },
    {
        farmer: '查理',
        field: 10,
        chick: 50,
        banana: 500
    },
    {
        farmer: '約翰',
        field: 6,
        chick: 110,
        banana: 800
    }
]

var farmsTotal = farms.length;
var bananaTotal = 0;
for (var i = 0; i < farmsTotal; i++) {
    bananaTotal += farms[i].banana;//依序帶出農場中的banana數量
}
console.log('今年banana的採收量:' + bananaTotal);