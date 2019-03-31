(function(forms){

	if(!forms) {

		return;

	}

	Array.prototype.forEach.call(forms, function(form){

		form.addEventListener('submit',function(e){

			e.preventDefault();

			var buy = form.classList.contains('in-cart') ? -1 : 1;

			form.querySelector('input[name="buy"]').value = buy;

			form.querySelector('.btn').disabled = true;

			// send form

			var formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action'));
			xhr.send(formData);

			xhr.onreadystatechange = function() {

				if (xhr.readyState != 4){

					return;

				}

				form.querySelector('.btn').disabled = false;
				form.classList.toggle('in-cart', buy === 1);

				if (xhr.status != 200) {

					console.log('ошибка ' + xhr.status);

				}

			}

		});

	});

})(document.querySelectorAll('.buy-product__cart'));