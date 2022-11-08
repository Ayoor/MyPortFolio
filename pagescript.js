$(window).scroll(function(){
    // This is function used to detect if the element is scrolled into view
    function elementScrolled(elem)
    {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
  
    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if(elementScrolled('.progressBarAnimationScroll')) {
  
  
    // do something after scrolling finished
  $(".progress-bar").addClass("progress-bar-animation")
    }
  });
  
   //  smooth scroll effect
   $('.nav-link').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        },1000);
    }
  });
  
  
  
  
  
  function checkEmptyField(){
  
  errormessage="";
  
    
  
  if($("#name").val()== ""){
     
      $("#name-error").html("Please Enter a name")
      $("#name").css("border-bottom-color", "red")
      errormessage="Empty field";
  }   
  
  if($("#email").val()== ""){
      
      $("#email-error").html("Please Enter an Email Address")
  $("#email").css("border-bottom-color", "red")
  errormessage="Empty field";
  }   
  
  if($("#subject").val()== ""){
      
      $("#subject-error").html("Please enter a Subject Matter")
      $("#subject").css("border-bottom-color", "red")
      errormessage="Empty field";
  }   
  
  
  if($("#messagetext").val()== ""){
      $("#msg-error").html("Please enter your Message")
      $("#messagetext").css("border", "1px solid red")
      errormessage="Empty field";
  }   
  
    
  }
  
  function clearall(){
    errormessage= ""
      $("#name").css("border-bottom-color", "white")
      $("#email").css("border-bottom-color", "white")
      $("#phone").css("border-bottom-color", "white")
      $("#subject").css("border-bottom-color", "white")
      $("#messagetext").css("border", "none")
  
  }
  
  //verify and submit form
  var errormessage="";
  
  
  //regular expression that checks if the email entered matches normal email syntax
  
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  
  
  
  function verifyfield(){
  if(isEmail($("#email").val())==false&&$("#email").val()!="" ){
    $("#email-error").html("Please Enter a Valid Email Address")
    $("#email").css("border-bottom-color", "red")
    errormessage="Error";
  }
  if($.isNumeric($("#phone").val())==false&&$("#phone").val()!=""){
   $("#tel-error").html("Enter a Valid Telephone Number")
   $("#phone").css("border-bottom-color", "red")
   errormessage="Error";
  }
  
  }
  
  
  // clear error messages as user types in field
  $('#name').on('input', function() {
    $("#name").css("border-bottom-color", "white")
    $("#name-error").html("")
  });
  
  $('#email').on('input', function() {
    $("#email").css("border-bottom-color", "white")
    $("#email-error").html("")
  });
  
  $('#phone').on('input', function() {
    $("#phone").css("border-bottom-color", "white")
    $("#tel-error").html("")
  });
  
  $('#subject').on('input', function() {
    $("#subject").css("border-bottom-color", "white")
    $("#subject-error").html("")
  });
  
  $('#messagetext').on('input', function() {
    $("#messagetext").css("border", "none")
    $("#msg-error").html("")
  });
  
  function reset(){
  clearall();
  $("#name").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#subject").val("");
  $("#messagetext").val("");
  
  }
  


  //submit 
$("#sendbutton").click(function(){
    clearall();
  checkEmptyField();
  verifyfield();
    if (errormessage=="") {
     $("#contactform").submit();
      $('#myModal').modal('toggle');
       reset()
    }
    
   
})
  

  
  