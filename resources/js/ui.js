
function gnb(){
	var $gnbM = $('.gnb');
	var $gnbDep1 = $('.gnb .depth1');
	$gnbM.bind("mouseover focusin", function(){
		$('header').addClass('openGnb');
	});
	$gnbDep1.bind("mouseover focusin", function(){
		$(this).siblings().removeClass('over');
		$(this).addClass('over');
	});
	$gnbM.bind("mouseleave focusout", function(){
		$('header').removeClass('openGnb');
		$gnbDep1.removeClass('over');
	});
}


function familySite(){
	var select = $(".family_site .select");
	select.click(function(){
		$(this).parent().toggleClass('open');
	})
}

function tabJs(tabArea){
	var tabDot = $(tabArea).find(".tabs a");
	tabDot.click(function(){
		var current = this;
		tabDot.each(function(){
			if(this==current){
				$(this).addClass("current");
				var clickId = $(this).attr('href');
				$(clickId).show();
			}else{
				$(this).removeClass("current");
				var eachId = $(this).attr('href');
				$(tabArea).find(eachId).hide(); 
			}
		});return false;
	})
}


function mainJs(){
	gnb();
	familySite();
	tabJs('.col_b');
	tabJs('.colc_a');

	$('.visualSlider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		infinite: true,
		speed: 500,
		focusOnselect: false,
		arrows: false
      });

	$('.visualSlider').append('<div class=\"slide-controller\"><button class=\"slide-pause\">슬라이드 정지</button><button class=\"slide-play\">슬라이드 재생</button></div>');
	var slickDots = $('.visualSlider .slick-dots');
	$('.visualSlider .slide-pause').before(slickDots);

	$('.visualSlider .slide-pause').on('click',function(){
		$(this).hide();
		$('.visualSlider').slick('slickPause');
		$('.visualSlider .slide-play').show();
	});

	$('.visualSlider .slide-play').on('click',function(){
		$(this).hide();
		$('.visualSlider').slick('slickPlay');
		$('.visualSlider .slide-pause').show();
	});

	$('.eventSlider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		infinite: true,
		speed: 500,
		focusOnselect: false,
		arrows: true
      });

	$('.eventSlider').append('<div class=\"slide-controller\"><span class="btng"><button class=\"slide-pause\">슬라이드 정지</button><button class=\"slide-play\">슬라이드 재생</button></span></div>');
	var slickPrev = $('.eventSlider .slick-prev');
	var slickNext = $('.eventSlider .slick-next');
	$('.eventSlider .btng').before(slickPrev);
	$('.eventSlider .btng').after(slickNext);

	$('.eventSlider .slide-pause').on('click',function(){
		$(this).hide();
		$('.eventSlider').slick('slickPause');
		$('.eventSlider .slide-play').show();
	});

	$('.eventSlider .slide-play').on('click',function(){
		$(this).hide();
		$('.eventSlider').slick('slickPlay');
		$('.eventSlider .slide-pause').show();
	});
}

$(document).ready(function() {
	mainJs();
})
