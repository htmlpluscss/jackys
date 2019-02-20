
	var allLinks = document.querySelectorAll('.menu__link');

	Array.prototype.forEach.call(allLinks, function(link){

		var href = link.getAttribute('href');

		if(href.charAt(0)=="#"){

			var id = document.querySelector(href);

			link.addEventListener('click', function (e) {

				if(PLATINENTAL.OpenMenu) {

					document.body.classList.remove('menu-show');

					window.scrollTo(0,PLATINENTAL.windowScrollOld);

					PLATINENTAL.OpenMenu = false;

				}
				else {

					e.preventDefault();
					history.pushState(null, null, href);

					animateScroll(id.getBoundingClientRect().top, 500, 'linear', 20);

				}

			});

		}

	});

	window.addEventListener('popstate',function() {

		animateScroll(document.querySelector(location.hash).getBoundingClientRect().top, 500, 'linear');

	});