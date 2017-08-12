	if ($('input:radio[name="radio_solution_choice"]:checked').val() == 'gen_hyp') {
			$('#solution_choice_screen').hide();
			$('#tabs_screen').show();

			$('#nav-tab-id a[href="#gen_hyp"]').tab('show');
			var $tabs = $('#tabs_screen').tabs({
						disabled: [0, 1, 2]
					});
				$('#problem_understanding_tab').disabled;
					
	$('#problem_understanding_tab').click(function(e) {
    e.preventDefault();
    //do other stuff when a click happens
});
	$('#result_interpret_tab').click(function(e) {
    e.preventDefault();
    //do other stuff when a click happens
});
	$('#plan_test_tab').click(function(e) {
    e.preventDefault();
    //do other stuff when a click happens
});
	 $('#result_interpret_tab').removeAttr("href");
	  $('#problem_understanding_tab').removeAttr("href");
	   $('#plan_test_tab').removeAttr("href");
	   $('#plan_test_tab').css("color:":"grey","background-color":"rgba(192,192,192,0.3)");
	   $('#tabs_screen').css('cursor', 'not-allowed');
	   $('#tabs_screen').hover({
	   			cursor : 'not-allowed'
			});

			//Show instructions for hypothesis generation
			show_hyp_instruction ();
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
		}
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

