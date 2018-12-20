$(document).ready(function(){
    $('.ClickBtn').click(function(event){
        $('.box1').delay(0).slideToggle();
        $('.box2').delay(1000).slideToggle();
        $('.box3').delay(2000).slideToggle();
    })

});