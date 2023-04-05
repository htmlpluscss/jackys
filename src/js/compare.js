( forms => {

	if(!forms) {

		return;

	}

	const headerCompare = document.querySelector('.menu__compare');

	[...forms].forEach( form => {

		form.addEventListener('submit', event => {

			event.preventDefault();

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData()
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				if ( result.text ) {

					form.querySelector('.menu__compare-text').textContent = result.text;

				}

				if ( result.count ) {

					headerCompare.setAttribute('data-count', result.count);

				}

			});

		});

	});

})(document.querySelectorAll('.buy-product__compare'));