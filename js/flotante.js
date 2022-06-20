$(document).ready(function(){
    $("#aShow").click(function(e){
        e.preventDefault();
        $("#capaFlotante1").css({
            display: 'block',
            left: (e.pageX + 15) + 'px',
            top: (e.pageY + 15) + 'px'
        });
    })
    $("#aHide").click(function(e){
        e.preventDefault();
        $("#capaFlotante1").css({
            display: 'none'
        });
    })
})
