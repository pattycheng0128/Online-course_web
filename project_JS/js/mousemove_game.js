var el = document.querySelectorAll('.box');
var len = el.length;
for (var i = 0; i < len; i++) {
    el[i].addEventListener('mousemove', function (e) {
        alert('你輸囉!');
        console.log(e.target);
    });
}