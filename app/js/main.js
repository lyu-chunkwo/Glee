$(function() {
	$('.top-slider__list').slick({
		arrows: false,
		dots: true
	});

	$('.partners-slider__list').slick({
		arrows: false,
		slidesToShow: 5,
  	slidesToScroll: 1,
		autoplay: true,
	});

	const mix1 = document.querySelector('.products__list');
	const mix2 = document.querySelector('.design__list');

	if(mix1){
		mixitup('.products__list', {
			selectors: {
				control: '.filter1'
			}
		})
	}

	if(mix2){
		mixitup('.design__list', {
			selectors: {
				control: '.filter2'
			}
		})
	}
	
	$(".stars").rateYo({
		starWidth: "40px",
		normalFill: "#A0A0A0",
		ratedFill: "#E74C3C"
  });

});