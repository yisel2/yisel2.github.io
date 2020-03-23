$(document).ready(function(){
        var menu_top = $("#menu").position().top;
        var banner_bottom = $("#banner").position().top + $("#banner").outerHeight();
        var about_top = $("#about-me").position().top;
        
        console.log("banner_bottom " + banner_bottom);
        
        $(window).scroll( function(){
            
            var scroll = $(window).scrollTop();
            var menu_top = $("#menu").position().top;
            
            console.log("scroll " + scroll);
            console.log("menu_top " + menu_top);
            
            if(scroll >= menu_top){
                $("#hidemenu").addClass("block");
                $("#menu").addClass("fixed");
            }
            
            if(menu_top <= about_top){
                $("#hidemenu").removeClass("block");
                $("#menu").removeClass("fixed");
            }
        });
});