// toggle on the what we do section
$(document).ready(function(){
  $('.clickable').click(function(){
    $(this).children(".hide").toggle();
    $(this).children(".show").toggle();
  });
});
//hover portfolio
$('.card').hover(function(){
  $(this).children('.p1').fadeToggle('fast')
  
});
// message when you contact us
function messageReceived(){
  var name = document.getElementById("yourname").value;
  alert(name +" " +"Your message has been received");
}
