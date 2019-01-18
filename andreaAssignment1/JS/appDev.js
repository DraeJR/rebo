console.log("hello");

$(document).ready(function(){
    
    
$("#btn1").click( function(){
        
       $("#c1").slideToggle("slow"); 
     
   
    // ****** animate not working 
    
       $(".card").animate({top:"100px"});
   
    });
    
 
    
    
    
$("#btn2").on("click", function(){
     
    
    $(".card").toggleClass("bg-danger");
     $(".card .btn").toggleClass("btn-light");
     });
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    // end mathods here  
});
