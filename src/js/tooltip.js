
( tooltips => {

	if(tooltips.length){

		let observer = new MutationObserver(mutationRecords => {

			const t = mutationRecords[0].target.querySelector('div'),
				  rect = t.getBoundingClientRect();

			if(document.documentElement.clientWidth < rect.right) {

				// левее

				t.style.marginLeft = document.documentElement.clientWidth - rect.right + 'px';

			} else if(rect.left < 0) {

				// правее

				t.style.marginLeft = -rect.left + 'px';

			}

		});

		[...tooltips].forEach( tooltip => {

			const btn = tooltip.querySelector('summary');

			observer.observe(tooltip, {

				attributes : true

			});

			btn.addEventListener("mouseenter", () => {

				if ( window.innerWidth >= 1250 ) {

					tooltip.open = true;

				}

			});

			btn.addEventListener("mouseleave", () => {

				if ( window.innerWidth >= 1250 ) {

					tooltip.open = false;

				}

			});

		});

		window.addEventListener("click", event => {

			const target = event.target.closest('details');

			[...tooltips].forEach( tooltip => {

				if(target !== tooltip) {

					tooltip.open = false;

				}

			});

		});

	}

})(document.querySelectorAll('details'));