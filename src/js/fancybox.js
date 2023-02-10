( fancybox => {

	if(fancybox) {

		const script = document.createElement('script');

		script.src = '/js/fancybox.min.js';

		let openFancybox = null;

		script.onload = () => {

			if ( openFancybox ) {

				openFancybox.dispatchEvent(new Event("click", { bubbles: true }));

			}

		};

		[...fancybox].forEach( el => {

			el.addEventListener('click', event => {

				if ( window.Fancybox === undefined ) {

					event.preventDefault();

					openFancybox = el;

				}

			});

		});

		// fastLoadScript

		if ( localStorage.getItem('fastLoadScript') ) {

			document.head.append(script);

		}
		else {

			let fastLoadScriptTimeout = true;

			const appendScript = () => {

				if ( fastLoadScriptTimeout ) {

					fastLoadScriptTimeout = null;
					document.head.append(script);

				}

				window.removeEventListener('fastLoadScript',appendScript);

			}

			fastLoadScriptTimeout = setTimeout( appendScript, 30000);

			window.addEventListener('fastLoadScript',appendScript);

		}

		// open btn

		[...document.querySelectorAll('.fancybox-gallery-open')].forEach( el => {

			el.addEventListener('click', event => {

				event.preventDefault();

				if ( window.Fancybox ) {

					fancybox[0].dispatchEvent(new Event("click", { bubbles: true }));

				} else {

					openFancybox = fancybox[0];

				}

			});

		});

	}

})(document.querySelectorAll('[data-fancybox]'));