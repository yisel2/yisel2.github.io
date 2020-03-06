$(document).ready(function(){
    $("#btn-show").click(function(e){
        e.preventDefault();
        $("#menu-js").toggleClass("show");
        $("#btn-hide").toggleClass("show-exit");
    });
    
    $("#btn-hide").click(function(){
        $("#menu-js").removeClass("show");
        $("#btn-hide").removeClass("show-exit");
    });
});