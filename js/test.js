	$('#show_problem_choice_screen_button').click(function() {
		$('#intro_screen').hide();
		$('#problem_choice_screen').show();
		
	var time = new Date($.now());
		var event = this.id;
		var object = {
  							  ts : time, 
  							  task : event
  					}
  			
		var params = JSON.stringify(object);
		$.post("php/save_to_json.php",{params:params},function(data){
			console.log(data);
		});
	});


	$('#show_problem1').click(function() {
		$('#problem_choice_screen').hide();
		$('#problem1_screen').show();
		var time = new Date($.now());
		var event = this.id;
		var object = {
  							  ts : time, 
  							  task : event
  					}
  			
		var params = JSON.stringify(object);
		$.post("php/save_to_json.php",{params:params},function(data){
			console.log(data);
		});
	});
	
	$('#logout').click(function(){
		$.post("php/logout.php",function(){
			window.location.href = 'php/test.php';
		});
	});

