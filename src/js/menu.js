( menu => {

	// search

	const search = menu.querySelector('.menu__search');
		  input = search.querySelector('.menu__search-input');

	search.addEventListener('submit', event => {

		if( input.offsetParent === null ) {

			event.preventDefault();

			document.body.classList.add('menu-search-show');

			window.requestAnimationFrame( () => input.focus() );

		}

	});

	window.addEventListener("click", event => {

		if ( event.target !== document && event.target.closest('.menu__search') === null ) {

			document.body.classList.remove('menu-search-show');

		}

	});

	// scroll

	const header = document.querySelector('.header');

	window.addEventListener("scroll", () => {

		window.requestAnimationFrame( () => {

			header.classList.toggle('header--fixed', window.pageYOffset > 0);

		});

	});

	// toggle

	const btn = document.querySelector('.menu__btn-toggle');

	let windowScroll = window.pageYOffset;
	const path = btn.querySelectorAll('path');

	let spin = true,
		y1 = 0,
		x1 = 1,
		x2 = 18,
		y2 = 4;

	const anim = () => {

		window.requestAnimationFrame( () => {

			if ( spin ) {

				y1++;

				x1 = x1 + 1;
				x2 = x2 - 2;

				y2 = y2 - .25;

			} else {

				y1--;

				x1 = x1 - 1;
				x2 = x2 + 2;

				y2 = y2 + .25;

			}

			if ( y2 < 2 ) {

				y2 = 2;

			}

			if ( y2 > 4 ) {

				y2 = 4;

			}

			if ( y1 <= 8 && y1 >= 0 ) {

				path[0].setAttribute('d', 'm 1,' + y2 + '  l 9,' + y1 + ' l 9,' + ( y1 * -1 ) );  // 0->8, 2->4
				path[2].setAttribute('d', 'm 1,' + ( 20 - y2 ) + ' l 9,' + ( y1 * -1 ) + ' l 9,' + y1 );  // 0->-8,16->18

			}

			path[1].setAttribute('d', 'm ' + x1 + ',10  l ' + x2 + ',0'); // 1 -> 9

			if ( x1 < 10 && x1 > 1) {

				anim();

			}

		});

	}

	btn.addEventListener('click', () => {

		if ( document.body.classList.contains('menu-show') ) {

			document.body.classList.remove('menu-show');
			window.scrollTo(0,windowScroll);

			setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'));

			spin = false;
			anim();

		} else {

			windowScroll = window.pageYOffset;

			document.documentElement.classList.add('scroll-behavior-off');

			setTimeout( () => {

				document.body.classList.add('menu-show');
				window.scrollTo(0,0);

			});

			spin = true;
			anim();

		}

	});

})(document.querySelector('.menu'));



/*
Array.prototype.forEach.call(document.querySelectorAll('.menu__item--parent .menu__link'), function(parentLink){

	parentLink.addEventListener('click', function(e){

		e.preventDefault();

	});

});*/