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
//我要找一個農場，買100隻小雞
var farmsTotal=farms.length;
for(var i=0;i<farmsTotal;i++){
    if(farms[i].chick>100){
        console.log(farms[i].farmer+'的小雞剛好夠');
        farms[i].chick-=100;//減掉100隻
        console.log(farms[i].farmer+'的小雞剩下'+farms[i].chick);
        break;
    }
}
console.log(farms.chick);