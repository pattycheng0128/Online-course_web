$(document).ready(function(){
    $('.cart > li > a').click(function (event){
        event.preventDefault();
        //將this以外的選單做關閉
        $(this).parent().siblings().find('ul').slideUp();
        //將ul選單做開啟和關閉
        $(this).parent().find('ul').slideToggle();
    });

});