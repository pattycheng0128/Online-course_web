var el=document.querySelector('.link');

el.addEventListener('click',function(e){
    e.preventDefault();//取消元素默認行為，無法連到指定的連結網頁
})