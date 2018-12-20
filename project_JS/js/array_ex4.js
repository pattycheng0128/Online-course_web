var farms = [
    {
        farmer: '卡斯柏',
        dogs: ['張姆士', '龐德'],
        chick: 15,
        cornField: [8, 5, 7],
        broccoliField: [6, 6, 6, 6],
        scarecrow: 9
    },
    {
        farmer: '查理',
        dogs: ['皮皮'],
        chick: 30,
        cornField: [18, 20],
        broccoliField: [8, 8, 8],
        scarecrow: 6
    }
];
console.log(farms[0].farmer);
console.log(farms[1].farmer);
console.log(farms[1].dogs);//回傳是陣列
//陣列撈到資料
console.log(farms[1].dogs[0]);//皮皮
console.log(farms[0].dogs[1]);//龐德
console.log(farms[0].cornField[2]);//7
