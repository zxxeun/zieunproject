$(function(){ 
	
$(".subMenu").hide();

	$("#navi > ul > li > a").mouseenter(function(){
		$(".subMenu").stop().slideUp(500);
		$(this).next().stop().slideDown(500);        
  });
  
	$("#navi > ul > li").mouseleave(function(){
		$(".subMenu").stop().slideUp(500);         
   });

var win=$(window).width();
if(win < 769)
{
   // $(".subMenu").css("display","none");
    $(".subMenu").remove();
}else{
$(".subMenu").unbind("remove");

 //$("a").unbind("click");
}

});

