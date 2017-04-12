obj={
	//Original structure of modal is stored on init to restore it to this state on closing
	modalFuncOriginal:null,
	//context Menu
	menu:null,
	modal_text:"Why is this feature needed?",
	init:function(){
		//hide the Add Function button
		$(".addFunc").hide();
		//set event for right click
		$(".selected").contextmenu(obj.rightClick);
		obj.menu=$("#menu");
		obj.menu.hide();
		$("body").on("click",obj.disable);
		$("#item2").on("click",obj.hypoClick);
		//One of the feature is selected
		$("#functions").change(function(){
			var value = $(this).find("option:selected").attr("value");
			if(value==""){return}
			if($(".funcBox").length==0){
				var details = $(document.createElement('input'));

				details.attr("placeholder",obj.modal_text);
				details.attr("class","funcBox");
				$("#function").append(details);
				$(".addFunc").show();
			}
			switch(value){
				case "NAT":
				case "IP":
				case "":break;
			}
		});
		//reset the modal
		$("#func").on("hidden.bs.modal",function(){
			$("#func").remove();
			$("body").append(obj.modalFuncOriginal);
			obj.modal_text="Why is this feature needed?";
			obj.init(); //To re-add all the event listeners
		});
		obj.modalFuncOriginal = $("#func").clone();
	},
	//Add a new function
	addFunc:function(){
		var func = $("#function").clone();
		$("#functionSet").append(func);		
	},
	
	disable:function(){
		obj.menu.hide();
	},
	rightClick:function(event){
		//alert(event.pageX+"");
		obj.menu.css({"left":event.pageX,"top":event.pageY});
		obj.menu.show();
		return false;
	},
	hypoClick:function(){
		$("#modal-header-name").text("Add Hypothesis");
		$("#question-message").text("Add hypothesis related to this node. You also need to identify the features of the node:");
		obj.modal_text="Enter your hypothesis here";
	}
}