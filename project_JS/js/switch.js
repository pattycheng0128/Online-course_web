var light = 'red';

function lightFun(str){
    console.log('目前是'+str+'緊戒');
}
switch (light) {
    case 'red':
        lightFun(light);
        break;
    case 'blue':
        lightFun(light);
        break;
    default:
        console.log('沒有任何資料');
        break;
}