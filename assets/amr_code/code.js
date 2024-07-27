var swiperTwo = new Swiper('.amrSwiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 30,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
});