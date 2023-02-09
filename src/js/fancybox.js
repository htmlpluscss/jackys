/*(function(){

	if(JACKYS.gallery) {

		Array.prototype.forEach.call(document.querySelectorAll('.gallery'), function(btn){

			btn.addEventListener('click', function(e){

				e.preventDefault();

				$.fancybox.open(JACKYS.gallery, {
					loop : true
				});

			});

		});

		setTimeout(function(){

			if(!window.jQuery) {

				var script = document.createElement('script');

				script.type = 'text/javascript';
				script.async = true;
				script.src = '/js/jquery-3.3.1.min.js';

				script.onload = function () {

					var script = document.createElement('script');

					script.type = 'text/javascript';
					script.async = true;
					script.src = '/js/jquery.fancybox.min.js';

					script.onload = function () {


					};

					document.head.appendChild(script);

				};

				document.head.appendChild(script);

			}

		}, 1000);

	}

})();*/