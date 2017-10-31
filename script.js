$(document).ready(function() {
    $(".fade-in").slideDown('fast');
    $("#sword-sound").get(0).play();
    
 $('.headshots').on('mouseenter', function() {
    $(this).find('.headshots-text').fadeIn(2000);
  }); 
  
  $('.headshots-text').on('click', function() {
    $(this).fadeOut(1000);
  })
});