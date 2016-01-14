$(function(){
  $('#form').submit(function(event) {
    // debugger;
    var username = $('input.name').val();
    var userage = $('input.age').val();

    $('#reveal').show();
    $('#name').text(username);
    $('#age').text (userage);

  event.preventDefault();
  });
});
