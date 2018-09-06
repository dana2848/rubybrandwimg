// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//=require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .
window.onload = function() {
    if (window.jQuery) {
        console.log('jQuery loaded successfully')
    } else {
        console.log('jQuery is not running')
    }
}
// $(document).ready(function(){
// $("p:even").hide().fadeIn(2000)
// )};

$(document).ready(function(){

  $( "#accordion" ).accordion();
  $( "#datepicker" ).datepicker({
    beforeShowDay: $.datepicker.noWeekends
  });
$("img").dbclick(function(){
  console.log("like!");
  $('.like-heart').fadeIn(200);
  $('.like-heart').delay(300).fadeOut(200);
})
$('.like-heart').hide();
});
