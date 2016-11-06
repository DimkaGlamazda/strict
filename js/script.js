$(function () {
	
	function displaySwitch(param, elem, img_id){
		if(param){
			$(".modal-window").css("display", "block");
			elem.append("<img class='big-img' src='img/"+img_id+".jpg'>");
			$("html").css("overflow-y", "hidden");
		}else{
			$(".big-img").remove();
			$(".modal-window").css("display", "none");
			$("html").css("overflow-y", "scroll");
		}
	}

	$(".zoom").on("click", function(elem){
		var temp = elem.target.id;
		for(var i = 1; i <= 6; i++){
			if(temp == 'img-'+ i){
				displaySwitch(true, $(".frame"), temp);
			}
		}
	});

	$(".close").on("click", function(){
		displaySwitch(false, $(".frame"));
	});
	
});