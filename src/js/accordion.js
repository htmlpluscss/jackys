JACKYS.accordion = function(elems){

	Array.prototype.forEach.call(elems, function(elem){

		var items = elem.querySelectorAll('.accordion__item'),
			active = elem.querySelector('.accordion__item--active');

		if(active) {

			active.querySelector('.accordion__body').style.height = active.querySelector('.accordion__body').clientHeight + 'px';

		}

		Array.prototype.forEach.call(items, function(item){

			var btn = item.querySelector('.accordion__btn') || item.querySelector('.accordion__head'),
				body = item.querySelector('.accordion__body'),
				inner = item.querySelector('.accordion__inner');

			btn.addEventListener('click', function(){

				var h = item.classList.contains('accordion__item--active') ? 0 : inner.clientHeight;
				body.style.height = h + 'px';
				item.classList.toggle('accordion__item--active');

				active = item;

				Array.prototype.forEach.call(items, function(el){

					if(el !== active){

						el.querySelector('.accordion__body').style.height = 0;
						el.classList.remove('accordion__item--active');

					}

				});

			});

			body.addEventListener(JACKYS.cssAnimation('transition'),function(){

				if(!JACKYS.isInViewport(active.querySelector('.accordion__head'))){

					animateScroll(active, 500, 'linear');

				}

			});

		});

	});

};


if(document.querySelectorAll('.accordion').length) {

	JACKYS.accordion(document.querySelectorAll('.accordion'));

}