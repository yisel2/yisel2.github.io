$(document).ready(function(){
        var banner_bottom = $("#banner").position().top + $("#banner").outerHeight();
        
        $(window).scroll(function(){
            var menu_top = $("#menu").position().top + 1;
            if($(window).scrollTop() > menu_top){
                $("#menu").addClass("fixed");
                $("#hidemenu").addClass("block");
            }else if(menu_top < banner_bottom){
                $("#hidemenu").removeClass("block");
                $("#menu").removeClass("fixed");
            }
        });            
});