$(document).ready(function(){
    // $(".hideButton").click(function(){
    //     $("h1").hide();
    // });
    // $(".showButton").click(function() {
    //     $("h1").show();
    // })
    //隱藏內容
    $('#hideBtn').click(function(){
        $('h2,ul').hide();
    });
    //顯示內容
    $('#showBtn').click(function(){
        $('h2,ul').show();
    });
    //toggle點擊後會偵測開啟或關閉
    $('h2').click(function(){
        $('ul,p').toggle();
    });
});
