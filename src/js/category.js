( links => {

	if ( links.length ) {

		[...links].forEach( link => {

			const svg = link.querySelector('svg'),
				  caption = link.querySelector('.category__caption');

			link.addEventListener('mouseenter', () => {

				svg.style.top = (link.clientHeight - caption.clientHeight) / 2 + 'px';

			});

		});

	}


})(document.querySelectorAll('.category__link'));