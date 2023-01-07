// alert($(window).width()) 1180
$(window).scroll(function(){
    //  model 3 fade out
          if($(window).scrollTop()<270){
              // var fader = $(window).scrollTop() +1;
          $(".modelName").html("Model 3")
          $(".modeltitlediv").css("opacity", 1 - $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", 1 - $(window).scrollTop() / 260);
             

    
            }
            //  model y fade in
            if($(window).scrollTop()>265){
              $(".modelName").html("Model Y")
              $(".modeltitlediv").css("opacity", -1.5 + $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", -1.5 +$(window).scrollTop() / 260);
             
             //model y fade out
             if($(window).scrollTop()>710){
              $(".modeltitlediv").css("opacity", 3.7 - $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", 3.7- $(window).scrollTop() / 260);
            }
             }
           
             // model s fade in
             if($(window).scrollTop()>1000){
              // var fader = $(window).scrollTop() * (-1);
              $(".modelName").html("Model S")
              $(".modeltitlediv").css("opacity", -3.8+ $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", -3.8+ $(window).scrollTop() / 260);
 }
             //model s fade out
             if($(window).scrollTop()>1470){
              $(".modeltitlediv").css("opacity", 6.3 - $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", 6.3 - $(window).scrollTop() / 260);
             }
           
             //  model x fade in
            if($(window).scrollTop()>1700 ){
              $(".modelName").html("Model X")
              $(".modeltitlediv").css("opacity", -6.6 + $(window).scrollTop() / 260);
              $(".buttondiv").css("opacity", -6.6+ $(window).scrollTop() / 260);
             
            } 
              
              //model x fade out
             if( $(window).scrollTop()>2300 ){
              $(".modeltitlediv").css("opacity", 9.6 - $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", 9.6 - $(window).scrollTop() / 260);
            
            }
            

             //  Solar Panels fade in
             
            if($(window).scrollTop()>2500 ){
              $(".modelName").html("Solar Panels");
              $(".modeltitlediv").css("opacity", -9.5+ $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", -9.5+ $(window).scrollTop() / 260);

              
                $(".testdrive").removeAttr("href"); 
                $(".testdrive").addClass("testdrive2");
                $(".testdrive").removeClass("testdrive");
            
              } 
              
            //  Solar Panels fade out
             if($(window).scrollTop()>2800){
              $(".modeltitlediv").css("opacity", 11.9 - $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", 11.9 - $(window).scrollTop() / 260);
            }
            $(".testdrive2").html("Lowest Cost Solar Panels in America")


 //  Solar Roofs fade in
            if($(window).scrollTop()>3000 ){
              $(".modelName").html("Solar Roofs")
              $(".modeltitlediv").css("opacity", -11.8+ $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", -11.8+ $(window).scrollTop() / 260);
              $(".testdrive2").html("Produce Clean Energy From Your Roof")
              } 
              
            //   // Solar Roofs fade out
             if($(window).scrollTop()>3300){
              $(".modeltitlediv").css("opacity", 14.7 - $(window).scrollTop() / 260);
             $(".buttondiv").css("opacity", 14.7 - $(window).scrollTop() / 260);

            
            }

            // Accessories fade in
            if($(window).scrollTop()>3850 ){
              $(".modelName").html("Accessories")
              $(".testdrive2").html("")
              // $(".inventory").css("display", "none");
              // $(".testdrive").css("display", "none");
              
              $(".modeltitlediv").css("opacity", -14.6+ $(window).scrollTop() / 260);
              $(".buttondiv").css("opacity", -14.6+ $(window).scrollTop() / 260);
              } 

              if ($(window).scrollTop()<=4200 ){
                $(".customOrder").html("Order Now")
              $(".inventory").show();
              $(".testdrive").show();

              }
              if ($(window).scrollTop()>3800){
                
                $(".inventory").hide();
               $(".testdrive").hide();
               $(".customOrder").html("Shop Now")
               
              }

              if ($(window).scrollTop()<=2500){
                $(".testdrive2").addClass("testdrive");
                $(".testdrive2").html("Schedule a Test Drive");
                $(".testdrive2").removeClass("testdrive2");
                

                
              }




         
  });
               $(".customOrder").click(function(){
 alert ( $(window).scrollTop());
 
 })

 $(".inventory").click(function(){
 alert (-14.6+ $(window).scrollTop() / 260);
 
 })
   


 //  arrow smooth scroll

$(function() {
    $('#downarrow').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1500, 'linear');
    });
  });

  // toggle
$(".menutoggle").click(function(){
if ($(window).width()<=1180){
  $(".carmodel").show();
}
else {
  $(".carmodel").hide();
}
$("body").css("overflow-y", "hidden")
  $(".sidepanel").animate({right: 0}, 500);
  $(".blur").css("display", "block")
  return false; // prevents page from scrolling to the top after executing command
});
function closepanel(){
  $(".sidepanel").animate({right: '-80%'}, 500);
  $(".blur").css("display", "none")
$("body").css("overflow-y", "scroll");
return false; // prevents page from scrolling to the top after executing command
}
$("#closebutton").click(function (){

 closepanel();
})

$(".blur").click(function(){
  closepanel();
})