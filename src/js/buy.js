( forms => {

	if( forms.length ) {

		[...forms].forEach( form => {

			const btn = form.querySelector('.btn'),
				  btnAlt = btn.getAttribute('data-alt'),
				  btnDefault = btn.getAttribute('data-default');

			form.addEventListener('submit', event => {

				event.preventDefault();

				btn.disabled = true;

				// send form

				fetch(form.getAttribute('action'), {
					method: 'POST',
					body: new FormData(form)
				})
				.then(response => response.json())
				.then(result => {

					console.log(result);

					btn.disabled = false;

					btn.textContent = result.mode === 'del' ? btnAlt : btnDefault;

					form.classList.toggle('in-cart', result.mode === 'del');

					form.elements.mode.value = result.mode;

				});

			});

		});

	}

})(document.querySelectorAll('.buy-product__cart'));