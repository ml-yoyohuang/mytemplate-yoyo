'use strict';

(function() {

	var scrollNow = 0;
	var kvSwiper = new Swiper ('.swiper-kv', {
		loop: true,
		speed: 1200,
		autoplay: 8000,
		autoplayDisableOnInteraction: false,
		effect: 'fade',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		onInit: function(){
			$(".kv-bullet").on('click', function(event) {
				var i = parseInt($(this).attr("data-index"));
				kvSwiper.slideTo(i+1);
			});
		}
	})
	var newsCount = $(".swiper-news").find('.swiper-slide').length;
	var newsSwiper = new Swiper ('.swiper-news', {
		pagination: '.section-news .swiper-pagination',
		nextButton: '.section-news .swiper-button-next',
		prevButton: '.section-news .swiper-button-prev',
		paginationClickable: true,
		autoplay: 8000,
		autoplayDisableOnInteraction: false,
		slidesPerView: 2,
		centeredSlides: (newsCount==1) ,
		breakpoints: {
			// when window width is <= 1024px
			1024: {
				slidesPerView: 1,
			}
		}		
	})
	var productCount = $(".swiper-product").find('.swiper-slide').length;
	var productSwiper = new Swiper ('.swiper-product', {
		pagination: '.section-product .swiper-pagination',
		nextButton: '.section-product .swiper-button-next',
		prevButton: '.section-product .swiper-button-prev',
		paginationClickable: true,
		autoplay: 8000,
		autoplayDisableOnInteraction: false,
		slidesPerView: 4,
		centeredSlides: (productCount<4) ,
		breakpoints: {
			// when window width is <= 1440px
			1440: {
				slidesPerView: 3,
				centeredSlides: (productCount<3),
			},
			1024: {
				slidesPerView: 1.6,
				centeredSlides: true,
			},
			767: {
				slidesPerView: 1.4,
				centeredSlides: true,
			}
		}		
	})
	var forestSwiper = new Swiper ('.swiper-forest', {
		loop: true,
		speed: 1200,
		autoplay: 8000,
		autoplayDisableOnInteraction: false,
		effect: 'fade',
	})

	var woodSwiper = new Swiper ('.swiper-wood', {
		slidesPerView: 4,
		loop: true,
		autoplay: true,
		speed: 20000,
		autoplayDisableOnInteraction: false,
		simulateTouch: false,
		resistance: false,
		breakpoints: {
			// when window width is <= 1440px
			1440: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
				autoplay: false,
				loop: false
			}
		}		
	})

	$(window).scroll(function () {
		//PC scroll
		var scrollVal = $(this).scrollTop();
		$(".swiper-kv .bg-inner").css("opacity",(1-(scrollVal/$(window).height())) );
		scrollNow = scrollVal;
	});

	$(".layout-container").scroll(function () {
		//Mobile scroll
		var scrollVal = $(this).scrollTop();
		$(".swiper-kv .bg-inner").css("opacity",(1-(scrollVal/$(window).height())) );
		scrollNow = scrollVal;
	});

	$(".swiper-kv").addClass("is-on");
})();
