
var hungry = 3;//飢餓程度1~10

function eat(food) {
    console.log('我現在要吃' + food);
}
//console.log(hungry<=3);
if (hungry <= 3) {
    eat('Pizza');
}else if(hungry<=7 && hungry>3){
    eat('Salad');
}else{
    console.log('我不餓');
}