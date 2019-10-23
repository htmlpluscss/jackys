( forms => {

	if(forms.length){

		const modalDone = document.querySelector('.modal-done');

		[...forms].forEach( form => {

			const btnSubmit = form.querySelector('[type="submit"]');

			form.addEventListener('submit', async (e) => {

				e.preventDefault();

				btnSubmit.disabled = true;
				btnSubmit.classList.add('is-loading');

				let data = {};

				[...form.elements].forEach( item => {
					if (item.name) {
						data[item.name] = item.value;
					}
				});

				data.lang = document.documentElement.lang;

				const response = await fetch(form.action, {
					method: form.method, // *GET, POST, PUT, DELETE, etc.
					mode: 'cors', // no-cors, *cors, same-origin
					cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
					credentials: 'same-origin', // include, *same-origin, omit
					headers: {
						'Content-Type': 'application/json',
						'X-CSRF-TOKEN': form.elements.csrf.value
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},
					redirect: 'follow', // manual, *follow, error
					referrerPolicy: 'no-referrer', // no-referrer, *client
					body: JSON.stringify(data) // body data type must match "Content-Type" header
				});

				let req_response = await response.json();

				console.log(req_response);

				modalDone.classList.toggle('is-ok',req_response.status === 'ok');
				modalDone.querySelector('.modal-done__title').innerHTML = req_response.title;
				modalDone.querySelector('.modal-done__text').innerHTML = req_response.text;
				modalDone.querySelector('.modal__close').innerHTML = req_response.button;

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "done"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

				form.reset();
				btnSubmit.disabled = false;
				btnSubmit.classList.remove('is-loading');

			});

		});

	}

})(document.querySelectorAll('[data-send="fetch"]'));