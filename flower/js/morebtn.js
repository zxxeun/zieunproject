$(function(){
	
	
	
	
	$(".content li").css("display","none");	
	 size_li = $(".content li").size();
		if(size_li < 7 ){$(".moreBox").css("display","none");
		}
		x=6;
    $('.content li:lt('+x+')').show();	
    $('.moreBox .btn').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        $('.content li:lt('+x+')').show();
    });
	
	
		
	});
	