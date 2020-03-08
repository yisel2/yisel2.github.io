$(document).ready(function(){
    $("#btn-show").click(function(e){
        e.preventDefault();
        $("#menu-js").toggleClass("show");
        $("#btn-hide").toggleClass("show-exit");
        $("#mobile").addClass("blur");    
    });
    
    $("#btn-hide").click(function(e){
        e.preventDefault();        
        $("#menu-js").removeClass("show");
        $("#btn-hide").removeClass("show-exit");
        $("#mobile").removeClass("blur");
    });
});