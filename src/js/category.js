( links => {

	if ( links.length ) {

		[...links].forEach( link => {

			const svg = link.querySelector('svg'),
				  name = link.querySelector('.category__name'),
				  caption = link.querySelector('.category__caption');

			link.addEventListener('mouseenter', () => {

				svg.style.top = (link.clientHeight - name.clientHeight - caption.clientHeight) / 2 + name.clientHeight + 'px';

			});

		});

	}


})(document.querySelectorAll('.category__link'));