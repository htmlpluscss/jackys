(function(swiperContainer){

	if(!swiperContainer.length) {

		return;

	}

	Array.prototype.forEach.call(swiperContainer, function(swipe){

		var mySwipe = null,
			resizeTimeout = null,
			windowWidthOLd = null,
			toggleSwipe = null,
			resetSwipe = null,
			swipeNav = document.createElement('div'),
			swipeNext = document.createElement('button'),
			swipePrev = document.createElement('button'),
			count = swipe.querySelectorAll('.swiper-slide').length,
			certificate = swipe.classList.contains('swiper-container--certificate');

		swipeNav.className = 'swiper-pagination';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.innerHTML = '<svg width="6" height="10" viewBox="0 0 6 10"><path d="M6 .788L5.183 0 0 5l5.183 5L6 9.212 1.633 5z"/></svg>';
		swipeNext.innerHTML = '<svg width="6" height="10" viewBox="0 0 6 10"><path d="M0 .788L.817 0 6 5 .817 10 0 9.212 4.367 5z"/></svg>';

		swipe.appendChild(swipeNav);
		swipe.parentNode.appendChild(swipeNext);
		swipe.parentNode.appendChild(swipePrev);

		resetSwipe = function(){

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeNext.classList.add('hide');
			swipePrev.classList.add('hide');

			if (JACKYS.width < 768) {

				swipeNav.classList.remove('hide');

			}
			else if (JACKYS.width < 1200) {

				swipeNext.classList.remove('hide');
				swipePrev.classList.remove('hide');

			}

		}

		resetSwipe();

		if (certificate) {

			toggleSwipe = function() {

				resetSwipe();

				if (JACKYS.width < 768) {

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: true,
						pagination: {
							el: swipeNav
						}
					});

				}
				else if (JACKYS.width < 1200) {

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: true,
						slidesPerView: 2,
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}
				else if ( count > 3 ) {

					swipeNext.classList.remove('hide');
					swipePrev.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: true,
						slidesPerView: 3,
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}

			}

		}

		window.addEventListener("resize", function(){

			window.requestAnimationFrame(function(){

				if (window.Swiper && !resizeTimeout) {

					resizeTimeout = setTimeout(function() {

						resizeTimeout = null;

						if(JACKYS.width != windowWidthOLd){

							windowWidthOLd = JACKYS.width;

							toggleSwipe();

						}

					}, 1000);

				}

			});

		});

	});

	setTimeout(function(){

		var script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src = 'js/swiper.min.js';

		script.onload = function () {

			if (typeof window.CustomEvent === 'function') {

				var event = new Event('resize');
				window.dispatchEvent(event);

			}
			else {

				event = document.createEvent('resize');
				event.initEvent('submit', true, true);

			}

		};

		document.head.appendChild(script);

	}, 3000);

})(document.querySelectorAll('.swiper-container'));