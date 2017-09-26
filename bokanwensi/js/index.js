time = setInterval(function(){
	$(".swiper-slide h5 img").fadeOut(2000);
	$(".swiper-slide h5").animate({
		bottom:"5%",
	},2000,function(){
		$(".swiper-slide h5").css({
			bottom:0
		});
		$(".swiper-slide h5 img").show();
	})
},2040);