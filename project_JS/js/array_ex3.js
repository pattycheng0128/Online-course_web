//物件裡面可以加function

var farm = {
    farmer: '卡伯斯',
    chick: 15,
    duck: 3,
    dog: ['張姆士', '龐德'],
    goDinner: function () {
        console.log(farm.farmer + ',該回家吃飯');
    },
    poultryTotal: function () {
        var num = farm.chick + farm.duck;
        console.log('我的農場共有' + num + '隻家禽');
    }
};

farm.goDinner();
farm.poultryTotal();
