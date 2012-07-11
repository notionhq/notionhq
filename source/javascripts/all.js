//= require_tree .



$(function() {

  

  $('.circle').click(function(e){
      var name = $(this).data('name');
      $('#person_detail .container').removeClass().addClass('container').addClass(name);
      $('.circle').removeClass('active');
      $(this).addClass('active');
  }); 
  

  
  
});