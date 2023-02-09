( fancybox => {

	if(fancybox) {

		const script = document.createElement('script');

		script.src = '/js/fancybox.min.js';

		// fastLoadScript

		if ( localStorage.getItem('fastLoadScript') ) {

			document.head.appendChild(script);

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

			fastLoadScriptTimeout = setTimeout( appendScript, 30000);

			window.addEventListener('fastLoadScript',appendScript);

		}

	}

})(document.querySelectorAll('[data-fancybox]'));