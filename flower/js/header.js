$(function(){
	
	//햄버거 on/off (모바일)
		$(".hamBtn").click(function(){
			$(".hamburger").stop().animate({left:0},500);
		});		
		$(".modal_back").click(function(){
			$(".hamburger").stop().animate({left:'-290px'},500);
		});		
    
    
		$(".hamMenu > li a").click(function(){
			if($(this).next().is(":visible")) {
					$(this).next().stop().slideUp(500);
					$(this).children("img.btn").attr("src","img/menu_down.png");
			} else{
				$(".sub").stop().slideUp(500);
				$(".hamMenu > li a").children("img.btn").attr("src","img/menu_down.png");
				$(this).next().stop().slideDown(500);
				$(this).children("img.btn").attr("src","img/menu_up.png");
			};
		});
    
    
		
		$(".searchBtn").click(function(){
			$(".searchBox").animate({left:0},500);
		});
		$(".modal_back").click(function(){
			$(".searchBox").animate({left:'100'+'%'},500);
		});
    
    
		
//모달 on/off (모바일)
		function modalOn(){
			$(".modal_back").addClass("back_on");
		}
		function modalOff(){
			$(".modal_back").removeClass("back_on");
		}
		
			$(".hamBtn").click(function(){
				modalOn();
		});
			$(".modal_back").click(function(){
				modalOff();
		});
			$(".searchBtn").click(function(){
				modalOn();
		});
			$(".modal_back").click(function(){
				modalOff();
		});		

//	
//		$("#header").each(function(){
//		var $window = $(window),
//		$header = $(this),
//		headerOffsetTop = $header.offset().top;
//			$window.on("scroll",function(){
//				if($window.scrollTop() > headerOffsetTop){
//					$header.addClass("sticky");				
//
//				} else{
//					$header.removeClass("sticky");
//
//				}
//			});
//	});	


			
});