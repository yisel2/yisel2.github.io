$(document).ready(function(){
    $("#btn-show").click(function(e){
        e.preventDefault();
        $("#menu-js").toggleClass("show");
        $("#btn-hide").toggleClass("show-exit");
        $("#movil").addClass("blur");    
    });
    
    $("#btn-hide").click(function(e){
        e.preventDefault();        
        $("#menu-js").removeClass("show");
        $("#btn-hide").removeClass("show-exit");
        $("#movil").removeClass("blur");
    });
});