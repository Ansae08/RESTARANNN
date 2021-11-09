$(document).ready(function(){

  $("from").submit(function() {
     var th = $(this);
     $.ajax({
         type: "POST",
         url: "mail.php",
         data: th.serialize()
     }).done(function() {
         alert("Спасибо!");
         setTimeout(function() {
             th.trigger("reset");
         }, 1000);
     });
     return false;
  });
  
});