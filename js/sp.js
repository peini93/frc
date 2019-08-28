var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	isMobile = 1;
}else{
	isMobile = 0;
}

$(function(){
		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '50%',
			splashVPos: '50%',
			autoClose: true
		}, function() { 
				var swiper = new Swiper('.swiper-container', {
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet: function (index, className) {
							return '<span class="' + className + '">' + (index + 1) + '</span>';
						},
					},
					autoplay: {
						delay: 7000,
						disableOnInteraction: false,
					}
				});
		});

		GOTOP();
		var mc1 = $('.light');
		mc1.animateSprite({
			columns: 3,
			totalFrames: 3,
			duration: 4000,
			loop: true
		});

		var mc2 = $('.taxi1');
			mc2.animateSprite({
				columns: 2,
				totalFrames: 2,
				duration: 800,
				loop: true
			});

		var mc3 = $('.taxi3');
		mc3.animateSprite({
			columns: 2,
			totalFrames: 2,
			duration: 1500,
			loop: true
		});

		var mc4 = $('.taxi2');
		mc4.animateSprite({
			columns: 2,
			totalFrames: 2,
			duration: 2000,
			loop: true
		});

		var mc5 = $('.taxi4');
		mc5.animateSprite({
			columns: 2,
			totalFrames: 2,
			duration: 600,
			loop: true
		});

		var m1 = $(".taxi1");
		TweenMax.to(m1, 2, {
			repeat: -1,
			top: "37%",
			left: "58%",
			yoyo: true,
			opacity: 1
		});

		var m2 = $(".taxi2");
		TweenMax.to(m2, 3, {
			repeat: -1,
			top: "44%",
			right: "52%",
			yoyo: true,
			opacity: 1
		});

		var m3 = $(".taxi3");
		TweenMax.to(m3, 4, {
			repeat: -1,
			top: "40%",
			yoyo: true,
			opacity: 1
		});

		var m4 = $(".taxi4");
		TweenMax.to(m4, 3, {
			repeat: -1,
			right: "40%",
			yoyo: true,
			opacity: 1
		});

		var m5 = $(".cloud2");
		TweenMax.to(m5, 6, {
			repeat: -1,
			right: "58%",
			yoyo: true,
			opacity: 0.2
		});

		var m6 = $(".cloud3");
		TweenMax.to(m6, 6, {
			repeat: -1,
			left: "58%",
			yoyo: true,
			opacity: 0.2
		});

		var m7 = $(".r1");
		TweenMax.to(m7, 6, {
			repeat: -1,
			right: "58%",
			yoyo: true,
			opacity: 1
		});

		var m8 = $(".r2");
		TweenMax.to(m8, 3, {
			repeat: -1,
			left: "58%",
			yoyo: true,
			opacity: 1
		});

		var m9 = $(".r3");
		TweenMax.to(m9, 2, {
			repeat: -1,
			right: "80%",
			yoyo: true,
			opacity: 1
		});

		
});

function GOTOP(){
	$('.gotop').on("click", function(){
	  	$('html,body').animate({scrollTop:0},500);
	});
	$(window).scroll(function(){
       var Y = $(window).scrollTop();
       if(Y>300){
        $(".gotop").stop(true,false).animate({ bottom: 360 + "px" , opacity:1},500); 
        }else{
				 $(".gotop").stop(true, false).animate({ bottom: 320 + "px" , opacity:0},500); 
        }
    });
}

