
(function(){

	var forms = document.querySelectorAll('.form');

	Array.prototype.forEach.call(forms, function(form){

		var novalidate = false,
			required = form.querySelectorAll('[required]'),
			btnReset = form.querySelector('.form__btn-reset'),
			btnSubmit = form.querySelector('.form__btn-submit'),
			input = document.querySelectorAll('.input');

		btnReset.addEventListener('click', function() {

			form.classList.remove('form--submit');

		});

// отправка формы
		form.addEventListener('submit', function(e) {

			e.preventDefault();

			var novalidate = false,
				formData = new FormData(form);

			Array.prototype.forEach.call(required, function(input){

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

				form.classList.add('form--submit');

				var xhr = new XMLHttpRequest();

				xhr.open("POST", form.getAttribute('action'));
				xhr.send(formData);

				// reset

				btnSubmit.disabled = true;

				xhr.onreadystatechange = function() {

					if (xhr.readyState == 4) {

					//	form.reset();

					}

					if (xhr.status != 200) {

						alert('ошибка ' + xhr.status);

					}

					btnSubmit.disabled = false;

				}

			}

		});

	});


// input-label

	var input = document.querySelectorAll('.input');

	function inputChange(el) {

		if(el.value) {

			el.classList.remove('input--error');
			el.parentNode.classList.remove('input-box--error');

		}
		else {

			if(el.getAttribute('required')) {

				el.classList.add('input--error');
				el.parentNode.classList.add('input-box--error');

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