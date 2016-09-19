$(document).ready(function(){

	$("#centro").click(function(){
	
		$("#content").css({"height": "650px"});
		$("#centro").css({"display": "none"});
		$("#login-content").css({"height": "190px"});
		$("input[type=" + "submit" + "]").css({"top": "0"});
		$("#content").css({"z-index": "0"});
		$("a").css({"color": "grey"});
		
	})

});