/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

var JACKYS = JACKYS || {};

(function(){

	var resizeTimeout = null;

	JACKYS.body = document.body;
	JACKYS.width = window.innerWidth,
	JACKYS.height = window.innerHeight;

// resize

	window.addEventListener("resize", function(){

		window.requestAnimationFrame(function(){

			if (!resizeTimeout) {

				resizeTimeout = setTimeout(function() {

					resizeTimeout = null;
					JACKYS.width = window.innerWidth;
					JACKYS.height = window.innerHeight;

				}, 100);

			}

		});

	});


// footer__up

	document.querySelector('.footer__up').addEventListener("click", function(){

		animateScroll(JACKYS.body, 500, 'linear');

	});

	// обработчик анимаций
	JACKYS.cssAnimation = function(a){var b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	JACKYS.isInViewport = function(element) {
		var rect = element.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= JACKYS.height);
	}

	// отделяем тысячи
	JACKYS.sepNumber = function(str){
		str = str.toString();
		str = str.replace(/\s+/g,'');
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

	// склеиваем тысячи
	JACKYS.strToNumber = function(n){
		return parseInt(n.replace(/\s+/g,''), 10);
	}

	// webp
	;(function() {
		var img = new Image();
		img.onload = function(){
			if(!(img.height > 0 && img.width > 0)){
				JACKYS.body.classList.add('no-webp');
			};
		};
		img.onerror = function(){
			JACKYS.body.classList.add('no-webp');
		};
		img.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
	})();

})();