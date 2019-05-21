$(function () {
    var m = 2;
    setInterval(function () {
        $("img:eq("+m+")").fadeIn(5000);
        $("img:eq("+m+")").fadeOut(5000);
        // $("body").css("background-image",'url("../../Help1/img/login/'+m+'.png")');
        m++;
        if(m == 8){
            m = 1;
        }
    },5000)

})