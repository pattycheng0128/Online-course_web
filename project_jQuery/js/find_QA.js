$(document).ready(function(){

    $('.question h3').click(function(event){
        //1.點擊會動態新增active和CSS樣式
        $(this).toggleClass('active');
        //2.找到p元素並做開或關閉的動作
        $(this).parent().find('p').slideToggle();
        //3.點擊別的question時，會將之前的p做關閉
        $(this).parent().siblings().find('p').slideUp();
        //4.自己以外的h3移除active樣式
        $(this).parent().siblings().find('h3').removeClass('active');

    });

});