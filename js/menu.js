$(document).ready(function(){
    
    //cuando la altura de un div sea igual o mayor al 70% de la altura del navegador remueve el activo y agrega al nuevo
    
    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        
        var home_start = $("#home").position().top;
        var home_end = $("#home").position().top + $("#home").outerHeight();
        
        var about_start = $("#about-me").position().top;
        var about_end = $("#about-me").position().top + $("#about-me").outerHeight();
        
        var portfolio_start = $("#portfolio").position().top;
        var portfolio_end = $("#portfolio").position().top + $("#portfolio").outerHeight();
        
        var contact_start = $("#contact").position().top;
        var contact_end = $("#contact").position().top + $("#contact").outerHeight();
        
        if( scroll >= (home_start * 0.90) && ( scroll <= (home_end * 0.25) ) ){  
            $(".menu-icons-div").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-home").addClass("active");
        }
        
        if( ( scroll >= (about_start * 0.80) ) && ( scroll <= (about_end * 0.60) ) ){  
            $(".menu-icons-div").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-about").addClass("active");
        }
        
        if( scroll >= (portfolio_start * 0.90) && ( scroll <= (portfolio_end * 0.77) ) ){
            $(".menu-icons-div").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-portfolio").addClass("active");
        }
        
        if( scroll >= (contact_start * 0.90) && ( scroll <= (contact_end * 0.80) ) ){
            $(".menu-icons-div").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-contact").addClass("active");
        }
        
        
    });
    
});