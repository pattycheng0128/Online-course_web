$(document).ready(function () {

    //click寫法
    // $('.box1').html('<h1>用jQuery動態產生的</h1>');

    // $('h1').click(function(event){
    //     alert('Hello');
    // });

    //on寫法
    $('.wrap').on('click', 'h1', function (event) {
        event.preventDefault();
        alert('Hello');
    });

    $('.box1').html('<h1>用jQuery動態產生的</h1>');
});