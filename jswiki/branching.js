$(function(){
  $("form#form").submit(function(event) {

  var gender = $('select#gender').val();
  var height = parseInt($('input#height').val());

  var status = null;

//male height calculations
  if (gender === 'male'){
    if (height >= 74) {
      status = 'tall'
    }
    else if (height >= 67) {
      status = 'average'
    }
    else {
      status = 'short'
    }
  }
// female height calculations
  else {
    if (height >= 70) {
      status = 'tall'
    }
    else if (height >= 65) {
      status = 'average'
    }
    else {
      status = 'short'
    }
  }
  $('#reveal').show();
  $('#outcome').text(status);

  event.preventDefault();
  });

});
