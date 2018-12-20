//物件的本體
var farm = {
    farmer: '卡斯柏',
    chick: 15,
    dog: ['張姆士', '彭德']

};

//house
var house={
    room:3,
    father:'Tom',
    mother:'Mary',
    sun:['John','Jimmy']
};

farm.chick = 30;//可以新增或修改

console.log(farm.farmer);
console.log("我的第一隻狗，名字叫做" + farm.dog[0]);

//或宣告一個變數來指派第一狗的名字
var dog1 = farm.dog[0];
console.log("我的第一隻狗，名字叫做" + dog1);

console.log("我的大兒子名字叫做"+house.sun[0]);
console.log(house);