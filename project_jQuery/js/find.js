$(document).ready(function(){
    $('.cart li').click(function(event){
        $(this).find('p').toggleClass('active');
    });

});