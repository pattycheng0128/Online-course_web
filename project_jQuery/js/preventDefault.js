$(document).ready(function(){
    $('.close').click(function(e){
        e.preventDefault();//取消原本默認的行為
        $('.box').slideToggle();
    });

});