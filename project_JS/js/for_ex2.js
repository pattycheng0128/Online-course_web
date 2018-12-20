var farms = [
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 180
    },
    {
        farmer: '查理',
        field: 10,
        chick: 50
    },
    {
        farmer: '約翰',
        field: 6,
        chick: 110
    }
]

var farmsTotal = farms.length;
for(var i=0;i<farmsTotal;i++){
    //console.log(farms[i].chick);//確認有撈出chick的值
    if(farms[i].chick>100){
        console.log(farms[i].farmer+'chick數量超過100隻以上');
    }
}