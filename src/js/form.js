
(function(){

	var forms = document.querySelectorAll('.form');

	Array.prototype.forEach.call(forms, function(form){

		var required = form.querySelectorAll('[required]'),
			redirect = form.getAttribute('data-redirect'),
			btnSubmit = form.querySelector('.form__btn-submit');

// отправка формы
		form.addEventListener('submit', function(e) {

			if(form.classList.contains('form--header')) {

				if(!form.classList.contains('form--open')) {

					e.preventDefault();
					form.classList.add('form--open');
					form.querySelector('.input').focus();

				}

				return true;

			}

			e.preventDefault();

			var novalidate = false,
				formData = new FormData(form);

			Array.prototype.forEach.call(required, function(input){

				if(input.offsetParent === null) {

					return;

				}

				if(input.getAttribute('type') == 'checkbox') {

					if(input.checked){

						input.parentNode.classList.remove('checkbox--error');

					}
					else {

						input.parentNode.classList.add('checkbox--error');
						novalidate = true;

					}

				}

				else {

					inputChange(input);

					if(!input.value){

						novalidate = true;

					}

				}

			});

			if(!novalidate){

				var xhr = new XMLHttpRequest();

				xhr.open("POST", form.getAttribute('action'));
				xhr.send(formData);

				// reset

				btnSubmit.disabled = true;

				xhr.onreadystatechange = function() {

					if (xhr.readyState == 4) {

						form.reset();

						if(redirect) {

							window.location.assign(redirect);

						}

					}

					if (xhr.status != 200) {

						alert('ошибка ' + xhr.status);

					}

					btnSubmit.disabled = false;

				}

			}
			else {

				var inputError = form.querySelector('.input-row__input--error');

				if(!JACKYS.isInViewport(inputError)){

					animateScroll(inputError, 500, 'linear', 20);

				}

				if(inputError){

					inputError.querySelector('.input--error').focus();

				}

			}

		});

	});


// input-label

	var input = document.querySelectorAll('.input');

	function inputChange(el) {

		if(el.value) {

			el.classList.remove('input--error');
			el.parentNode.classList.remove('input-row__input--error');

		}
		else {

			if(el.getAttribute('required')) {

				el.classList.add('input--error');
				el.parentNode.classList.add('input-row__input--error');

			}

		}

	}

	Array.prototype.forEach.call(input, function(el){

		el.addEventListener('keyup', function() {

			inputChange(el);

		});

		el.addEventListener('blur', function() {

			inputChange(el);

		});

	});


// checked

	var checkbox = document.querySelectorAll('.checkbox');

	Array.prototype.forEach.call(checkbox, function(el){

		var input = el.querySelector('input');

		input.addEventListener('change', function() {

			if(input.checked) {

				el.classList.remove('checkbox--error');

			}

		});

	});

})();