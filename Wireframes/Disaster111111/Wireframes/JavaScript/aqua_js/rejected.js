$("#others1").hide()
        
        
   $("#farm_type1").change(function(){
		if($(this).val() == "Others"){
			$("#others1").show()
		}
		else{
		$("#others1").hide()
		}
	})  