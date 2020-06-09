$(function(){
	
// $(".sub1 li a").on("click",function(e){
	// e.preventDefault();
	// var url = this.href;
	
	// $(".sub1 li a.on").removeClass("on");
	// $(this).addClass("on");
	
	
	// $(".content").remove();
	// $(".contents").load(url + ' .content').hide().fadeIn('slow');
	
// });





var item = $(".contents .promotionitem");
 $(".contents .promotionitem").hide();
	$(".contents .contentsimg map area").on("click",function(){
		item.stop().slideDown(1000);
		return false;
	});
 
});

