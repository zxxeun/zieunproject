$(function(){ 


//메인이미지

var showImg, nextImg;

	function fadeInOut(){			   
	showImg = $("#main img:eq(0)");
	nextImg = $("#main img:eq(2)");
	nextImg.addClass("active");
	nextImg.css("opacity","0")
	.animate({opacity:1},1000, function() { 			 
	$("#main").append( showImg );		
	 showImg.removeClass("active");  
	 });
	};
	timer = setInterval(function(){ fadeInOut()},3000);
		

		//중간배너
	// var $ss=$(".box3");	
	// $ss.hide();	
	// $(window).scroll(function(){
		// if($(this).scrollTop() >= 1800) {
			// $ss.fadeIn(2500);}
				
			// });

	//클래스이미지 슬라이더
		$("#fslidebtn li a").click(function(){
		var strName1 = ($(this).parent().attr("id"));
			slideTarget(strName1.substr(3,1));
				return false;
	});
	function slideTarget(n1){
		var pos1 = Number(n1)*-100+'%';
		$(".box4 .fClass").animate({left:pos1},2000,function(){
			$("#fslidebtn img").attr("src","img/out.gif");
			$("#fslidebtn img").eq(n1).attr("src","img/over.gif");
		});
	};
	var btnNum1=0;
	setInterval(function(){
		btnNum1++;
			if(btnNum1 >= 3)btnNum1=0;
				$("#fslidebtn li a").eq(btnNum1).trigger("click")
	},5000);
	

});