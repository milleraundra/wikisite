$(function(){

  $('#button').click(function(){
    var array = ['This', ' is', ' an', ' amazing', ' loop! '];
    for (var index = 0; index < array.length; index += 1) {

    $('#loop').append(array[index]);
    }
  });
});



// $(function(){
//
//   $('#button').click(function(){
//     var array = ['This', 'is', 'an', 'amazing', 'loop'];
//     for (var index = 0; index < array; index += 1) {
//
//     $('#loop').append(array[index]);
//     }
//   });
// });
