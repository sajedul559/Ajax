jQuery(document).ready(function(){
  jQuery('.touch').click(function(){
  	$.ajax({
  		'url': 'ajax.php',
  		'success': function(output){

  			jQuery('.show').html(output);


  		},
  		'type': 'post',
  		'data' :{

  			'name' :"Sajedul Isalm",
  			'address' : 'Narsingdi'
  		}





  	});
  	return false;






  });








});