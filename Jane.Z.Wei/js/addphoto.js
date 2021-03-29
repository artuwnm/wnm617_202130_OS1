// https://codepen.io/Tiko/pen/OMEomY
$(document).ready(function() {
  $('#click-add-photo').click(function() {    
    $('.add-photo').fadeIn(300);
    $('.btn').addClass('animation')  
  });  
  
  $('.add-photo').click(() => hide());
  
  function hide() {
    $('.add-photo').fadeOut(300);   
    $('.btn').removeClass('animation');     
  }
});