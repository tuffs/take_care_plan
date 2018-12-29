// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require jquery-datetimepicker
//= require_tree .

$.datetimepicker.setLocale('en');

$(document).ready(function() {
  $('#datetimepicker').datetimepicker({
    format:'d.m.Y H:i',
    hours12: true,
    step: 10
  });  
});
