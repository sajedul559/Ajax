jQuery(document).ready(function(){
  jQuery('.touch').click(function(){
  	$.ajax({
  		'url': 'process.php',
  		'success': function(output){

  			jQuery('.show').html(output);


  		},
  		'type': 'post',
  		'data' :{

  			'name' :"asedul isalm",
  			'address' : 'Narsingdi'
  		}





  	});
  	return false;






  });








});