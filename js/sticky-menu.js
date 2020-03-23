$(document).ready(function(){
        var banner_bottom = $("#banner").position().top + $("#banner").outerHeight();
        
        $(window).scroll(function(){
            var menu_top = $("#menu").position().top + 1;
            console.log("scroll "+$(window).scrollTop()+" menutop "+menu_top+" bannerbot "+banner_bottom);
            if($(window).scrollTop() > menu_top){
                $("#menu").addClass("fixed");
                $("#hidemenu").addClass("block");
                console.log("entro al primer if");
            }else if(menu_top < banner_bottom){
                $("#hidemenu").removeClass("block");
                $("#menu").removeClass("fixed");
                console.log("entro al segundo if");
            }
        });            
});