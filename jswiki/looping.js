$(function(){

	// Section of code to run once when document is ready.	
	$('#loop').append("Ready function ran");
   	var words = ['This', ' is', ' an', ' amazing', ' loop! '];
   	var next = 0;

  	$('#button').click( function() {
    	// for (var index = 0; index < array.length; index += 1) {

    	// $('#loop').append("testing " + next + ' ' ); // array[index]);
  		$('#loop').append( words[next] + ' '); // array[index]);
  		/* next++;
  		if (next == 5) {
  			next = 0;
  		}
  		*/
  		// next = (next + 1) % 5;
  		next = (next === 4) ? 0 : next + 1; 
  		console.log(next);

   // }
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
