$(document).ready(function() {
    
    if($("#nav").height){
        $("#bars").click(function(){
            $("#nav").toggleClass("menu-icons-height");
        });
    }else{
        $("#bars").click(function(){
            $("#nav").removeClass("menu-icons-height");
        });
    }
    
});