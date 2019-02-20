
(function(btn){

	btn.addEventListener('click', function () {

		if(PLATINENTAL.OpenMenu) {

			PLATINENTAL.body.classList.remove('menu-show');

			window.scrollTo(0,PLATINENTAL.windowScrollOld);

			PLATINENTAL.OpenMenu = false;

		}
		else {

			PLATINENTAL.OpenMenu = true;

			// записываем значение скролла страницы
			PLATINENTAL.windowScrollOld = window.pageYOffset;
			window.scrollTo(0,0);

			PLATINENTAL.body.classList.add('menu-show');

		}

	});

})(document.querySelector('.header__btn-menu-toggle'));