$(document).ready(function(){
    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        var menu_top = $("#menu").position().top;
        var menu_bottom = $("#menu").position().top + $("#menu").outerHeight();
        var about_top = $("#about-me").position().top;
        var banner_bottom = $("#banner").position().top + $("#banner").outerHeight();
        var hidemenu_top = $("#hidemenu").position().top;
        //si el scroll top position llega al top del menu entonces poner fixed al menu
        
        console.log("scroll: " + scroll + " menu_top: " + menu_top + " about_top: " + about_top);
        
        if(scroll >= menu_top){
            $("#hidemenu").addClass("block");
            $("#menu").addClass("fixed");
        }
        
        if(scroll <= about_top && menu_bottom <= about_top){
            $("#hidemenu").removeClass("block");
            $("#menu").removeClass("fixed");
        }
    });
    
});