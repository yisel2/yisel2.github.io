$(document).ready(function(){
    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        var menu_top = $("#menu").position().top;
        var about_top = $("#about-me").position().top;
        var banner_bottom = $("#banner").position().top + $("#banner").outerHeight();
        
        if(scroll >= menu_top){
            $("#hidemenu").addClass("block");
            $("#menu").addClass("fixed");
        }
        
        if(menu_top <= banner_bottom){
            $("#hidemenu").removeClass("block");
            $("#menu").removeClass("fixed");
        }
    });
    
});