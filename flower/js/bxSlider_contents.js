$(function(){
	
	var mySlider0 = $(".n0").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:2,						//슬라이드 이동시 갯수 설정.
		slideWidth:160,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:5,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false					//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev0").on("click",function(){
		mySlider0.goToPrevSlide();
		return false;
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next0").on("click",function(){
		mySlider0.goToNextSlide();
		return false;
	});
	
		var mySlider1 = $(".n1").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:2,						//슬라이드 이동시 갯수 설정.
		slideWidth:180,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:3,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false					//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev1").on("click",function(){
		mySlider1.goToPrevSlide();
		return false;
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next1").on("click",function(){
		mySlider1.goToNextSlide();
		return false;
	});
	
	
	var mySlider2=$(".n2").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:2,						//슬라이드 이동시 갯수 설정.
		slideWidth:250,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:5,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev2").on("click",function(){
	mySlider2.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
	return false; //<a>에 링크를 차단합니다.
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next2").on("click",function(){
	mySlider2.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
	return false;  //<a>에 링크를 차단합니다.
	});
	
	
	var mySlider3=$(".n3").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:2,						//슬라이드 이동시 갯수 설정.
		slideWidth:280,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:5,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev3").on("click",function(){
	mySlider3.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
	return false; //<a>에 링크를 차단합니다.
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next3").on("click",function(){
	mySlider3.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
	return false;  //<a>에 링크를 차단합니다.
	});
	
	var mySlider4=$(".n4").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:200,						//슬라이드 마다 너비 설정.
		minSlides:3,							//최소 노출 개수 설정
		maxSlides:3,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev4").on("click",function(){
	mySlider4.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
	return false; //<a>에 링크를 차단합니다.
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next4").on("click",function(){
	mySlider4.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
	return false;  //<a>에 링크를 차단합니다.
	});
	
	var mySlider5=$(".n5").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:250,						//슬라이드 마다 너비 설정.
		minSlides:3,							//최소 노출 개수 설정
		maxSlides:3,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev5").on("click",function(){
	mySlider5.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
	return false; //<a>에 링크를 차단합니다.
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next5").on("click",function(){
	mySlider5.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
	return false;  //<a>에 링크를 차단합니다.
	});
	
	var mySlider6=$(".n6").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:300,						//슬라이드 마다 너비 설정.
		minSlides:3,							//최소 노출 개수 설정
		maxSlides:3,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false						//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev6").on("click",function(){
	mySlider6.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
	return false; //<a>에 링크를 차단합니다.
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next6").on("click",function(){
	mySlider6.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
	return false;  //<a>에 링크를 차단합니다.
	});
	
	var mySlider7=$(".n7").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:360,						//슬라이드 마다 너비 설정.
		minSlides:3,							//최소 노출 개수 설정
		maxSlides:3,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false						//이전 다음버튼 노출 여부 설정합니다.
		});

	//이전버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev7").on("click",function(){
	mySlider7.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
	return false; //<a>에 링크를 차단합니다.
	});
	
	//다음 버튼을 클릭함녀 다음 슬라이드로 전환됩니다.
	$(".next7").on("click",function(){
	mySlider7.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
	return false;  //<a>에 링크를 차단합니다.
	});
	
	
	var mySlider8 = $(".p360").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:180,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});
	
	var mySlider9 = $(".p480").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:210,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});

		
	var mySlider10 = $(".p640").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:2,						//슬라이드 이동시 갯수 설정.
		slideWidth:280,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});
		
	var mySlider11 = $(".p720").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:320,						//슬라이드 마다 너비 설정.
		minSlides:2,							//최소 노출 개수 설정
		maxSlides:2,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});
		
	var mySlider12 = $(".p769").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:300,						//슬라이드 마다 너비 설정.
		minSlides:3,							//최소 노출 개수 설정
		maxSlides:3,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.

		});
		
		var mySlider13 = $(".p960").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:210,						//슬라이드 마다 너비 설정.
		minSlides:3,							//최소 노출 개수 설정
		maxSlides:3,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});
		
	var mySlider14 = $(".p1440").bxSlider({
		mode:"horizontal",					//가로 수평으로 슬라이드 됩니다.
		speed:500,							//이동속도를 설정합니다.
		pager:false,							//현재위치 페이징 표시 여부 설정.
		moveSlides:1,						//슬라이드 이동시 갯수 설정.
		slideWidth:200,						//슬라이드 마다 너비 설정.
		minSlides:4,							//최소 노출 개수 설정
		maxSlides:4,							//최대 노출 개수 설정
		slideMargin:10,						//슬라이드간의 간격을 설정합니다.
		auto:true,								//자동으로 흐를지 설정
		autoHover:true,					//마우스 오버시 정지시킬지 설정합니다.
		controls:false 						//이전 다음버튼 노출 여부 설정합니다.
		});
	
	});
