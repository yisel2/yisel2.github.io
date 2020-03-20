$(document).ready(function(){
    
    //cuando la altura de un div sea igual o mayor al 70% de la altura del navegador remueve el activo y agrega al nuevo
    
    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        
        //Obtengo el top y el bottom de cada sección
        
        var banner_start = $("#banner").position().top;
        var banner_end = $("#banner").position().top + $("#banner").outerHeight();
        
        var about_start = $("#about-me").position().top;
        var about_end = $("#about-me").position().top + $("#about-me").outerHeight();
        
        var portfolio_start = $("#portfolio").position().top;
        var portfolio_end = $("#portfolio").position().top + $("#portfolio").outerHeight();
        
        var contact_start = $("#contact").position().top;
        var contact_end = $("#contact").position().top + $("#contact").outerHeight();
        
        //Cuando scrollee, si la ventana muestra un % de la sección, se cambia el activo del menu
        //remueve la clase Active del antiguo menu activo y se la agrega al menu que este en la seccion correspondiente
        
        if( scroll >= (banner_start * 1) && ( scroll <= (banner_end * 0.25) ) ){  
            $(".nav-a").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-banner").addClass("active");
        }
        
        if( ( scroll >= (about_start * 0.80) ) && ( scroll <= (about_end * 0.60) ) ){  
            $(".nav-a").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-about").addClass("active");
        }
        if( scroll >= (portfolio_start * 0.95) && ( scroll <= (portfolio_end * 0.77) ) ){
            $(".nav-a").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-portfolio").addClass("active");
        }
        
        if( scroll >= (contact_start * 0.97) && ( scroll <= (contact_end * 0.80) ) ){
            $(".nav-a").each( function(i){
                $(this).removeClass("active");
            });
            $("#nav-contact").toggleClass("active");
        }
        
        
    });
    
});