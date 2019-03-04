
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