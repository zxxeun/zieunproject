$(function(){
	
	$("#start p a").on("click",function(){
		$("#start").stop().fadeOut(500);
		$(".all").css("filter","none")
	});
});