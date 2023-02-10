( forms => {

	if( forms.length ) {

		[...forms].forEach( form => {

			const btn = form.querySelector('.btn'),
				  btnAlt = btn.getAttribute('data-alt'),
				  btnDefault = btn.getAttribute('data-default');

			form.addEventListener('submit', event => {

				event.preventDefault();

				const buy = form.classList.contains('in-cart') ? -1 : 1;

				form.elements.buy.value = buy;

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

					btn.textContent = buy === 1 ? btnAlt : btnDefault;

					form.classList.toggle('in-cart', buy === 1);

				});

			});

		});

	}

})(document.querySelectorAll('.buy-product__cart'));