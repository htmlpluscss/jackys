
(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		close = document.querySelectorAll('.modal__close'),
		wrapper = document.querySelector('.wrapper'),
		modalPhotoBox = document.querySelector('#modal-photo');

	Array.prototype.forEach.call(close, function(el){

		el.addEventListener('click', function () {

			PLATINENTAL.closeModal();

		});

	});

	modal.addEventListener('click', function (e) {

		if(e.target.classList.contains('modal')) {

			PLATINENTAL.closeModal();

		}

	});

	Array.prototype.forEach.call(items, function(el){

		el.addEventListener(PLATINENTAL.cssAnimation('transition'),function(){

			if(PLATINENTAL.activeModal && !PLATINENTAL.activeModal.classList.contains('modal__item--active')){

				PLATINENTAL.body.classList.remove('modal-show');
				wrapper.style.top = 0;
				window.scrollTo(0,PLATINENTAL.windowScrollOld);

			}

		});

	});

	PLATINENTAL.closeModal = function() {

		PLATINENTAL.activeModal.classList.remove('modal__item--active');

		// clear video
		if(PLATINENTAL.activeModal.classList.contains('modal__item--video')){

			if (typeof yaCounter52326247 != 'undefined') {

				yaCounter52326247.reachGoal('video-close');
				console.log('video-close');

			}

			document.getElementById('modal-video').innerHTML = '';

		}

	};

	PLATINENTAL.modalShow = function (selector) {

		if(selector == 'video' && typeof yaCounter52326247 != 'undefined') {

			yaCounter52326247.reachGoal('video-play');
			console.log('video-play');

		}

		PLATINENTAL.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('modal__item--active', PLATINENTAL.activeModal == el);

		});

		PLATINENTAL.windowScrollOld = window.pageYOffset;

		wrapper.style.top = -PLATINENTAL.windowScrollOld + 'px';

		PLATINENTAL.body.classList.add('modal-show');
		window.scrollTo(0,0);

		PLATINENTAL.activeModal.focus();


	}

	document.addEventListener('keydown',function(e) {

		var keyCode = e.keyCode || e.which;

		if(keyCode === 27){

			e.preventDefault();
			var event = new Event('click');
			modal.dispatchEvent(event);

		}

	});


	document.addEventListener('click', function (e) {

		var target = e.target;

		while (target !== this) {

			if (target.hasAttribute('data-modal')) {

				PLATINENTAL.modalShow(target.getAttribute('data-modal'));

				// modal Photo

				if(target.classList.contains('modal-photo')) {

					e.preventDefault();

					var img = document.createElement('img');

					img.setAttribute('src', target.getAttribute('href'));

					modalPhotoBox.innerHTML = '';
					modalPhotoBox.appendChild(img);

				}


			}

			target = target.parentNode;

		}

	});

})();