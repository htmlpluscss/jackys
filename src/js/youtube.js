
// видео в описании

( youtube => {

	if(youtube.length) {

		[...youtube].forEach( video => {

			const link = video.querySelector('.youtube__link'),
				  id = link.getAttribute('data-id');

			link.addEventListener('click', event => {

				event.preventDefault();

				if(video.classList.contains('is-active')){

					return;

				}

				video.classList.add('is-active');

				const iframe = document.createElement('iframe');
				iframe.setAttribute('controlsList','nodownload');
				iframe.setAttribute('disablePictureInPicture','true');
				iframe.setAttribute('allowfullscreen','allowfullscreen');
				iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&controls=0';
				video.appendChild(iframe);

			});

		});

	}

})(document.querySelectorAll('.youtube'));