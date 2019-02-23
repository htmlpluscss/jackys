
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

})(document.querySelector('.header__btn-menu-toggle'));