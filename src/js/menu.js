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


})(document.querySelector('.menu'));



(function(btn){

	btn.addEventListener('click', function () {

		if(JACKYS.OpenMenu) {

			JACKYS.body.classList.remove('menu-show');

			window.scrollTo(0,JACKYS.windowScrollOld);

			JACKYS.OpenMenu = false;

		}
		else {

			JACKYS.OpenMenu = true;

			// записываем значение скролла страницы
			JACKYS.windowScrollOld = window.pageYOffset;
			window.scrollTo(0,0);

			JACKYS.body.classList.add('menu-show');

		}

	});

})(document.querySelector('.menu__btn-toggle'));

Array.prototype.forEach.call(document.querySelectorAll('.menu__item--parent .menu__link'), function(parentLink){

	parentLink.addEventListener('click', function(e){

		e.preventDefault();

	});

});