


// 

var totalSteps = $(".steps li").length;

$(".submit").on("click", function(){
  return false; 
});

$(".steps li:nth-of-type(1)").addClass("active");
$(".myContainer .form-container:nth-of-type(1)").addClass("active");

$(".form-container").on("click", ".next", function() { 
  $(".steps li").eq($(this).parents(".form-container").index() + 1).addClass("active"); 
  $(this).parents(".form-container").removeClass("active").next().addClass("active flipInX");   
});

$(".form-container").on("click", ".back", function() {  
  $(".steps li").eq($(this).parents(".form-container").index() - totalSteps).removeClass("active"); 
  $(this).parents(".form-container").removeClass("active flipInX").prev().addClass("active flipInY"); 
});


/*=========================================================
*     If you won't to make steps clickable, Please comment below code 
=================================================================*/
$(".steps li").on("click", function() {
  var stepVal = $(this).find("span").text();
  $(this).prevAll().addClass("active");
  $(this).addClass("active");
  $(this).nextAll().removeClass("active");
  $(".myContainer .form-container").removeClass("active flipInX");  
  $(".myContainer .form-container:nth-of-type("+ stepVal +")").addClass("active flipInX");     
});


//

// Select all »a« elements with a parent class »links« and add a function that is executed on click
$( '.links a' ).on( 'click', function(e){
    
  // Define variable of the clicked »a« element (»this«) and get its href value.
  var href = $(this).attr( 'href' );
  
  // Run a scroll animation to the position of the element which has the same id like the href value.
  $( 'html, body' ).animate({
        scrollTop: $( href ).offset().top
  }, '300' );
    
  // Prevent the browser from showing the attribute name of the clicked link in the address bar
  e.preventDefault();

});