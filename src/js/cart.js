/*(function(cart){

	if(!cart) {

		return;

	}

	var form = cart.querySelector('.cart__list'),
		quantity = form.querySelectorAll('.quantity');

	function result() {

		var s = 0;

		Array.prototype.forEach.call(cart.querySelectorAll('.cart__item'), function(el){

			var count = parseInt(el.querySelector('.quantity__count').value),
				price = parseInt(el.querySelector('.quantity__price').value);

			if(isNaN(count)) {

				count = 1;
				el.querySelector('.quantity__count').value = 1;

			}

			el.querySelector('.cart__item-price--total').textContent = JACKYS.sepNumber(count * price);

			s += count * price;

		});

		form.querySelector('.cart__items-price').textContent = JACKYS.sepNumber(s);

		// send form

		var formData = new FormData(form),
			xhr = new XMLHttpRequest();

		xhr.open("POST", form.getAttribute('action'));
		xhr.send(formData);

	}

	result();

	if(quantity.length) {

// quantity
		Array.prototype.forEach.call(quantity, function(el){

			var up = el.querySelector('.quantity__btn--up'),
				down = el.querySelector('.quantity__btn--down'),
				count = el.querySelector('.quantity__count'),
				value = null;

			up.addEventListener('click',function(){

				value = parseInt(count.value) + 1;

				count.value = value;

				result();

			});

			down.addEventListener('click',function(){

				value = parseInt(count.value) - 1;

				if(value < 1) {

					value = 1;

				}

				count.value = value;

				result();

			});

			count.addEventListener('blur',function(){

				result();

			});

			count.addEventListener('focus',function(){

				setTimeout(function(){

					count.setSelectionRange(0,9);

				},100)

			});

			count.addEventListener('keyup',function(){

				var val = this.value.replace(/[\D]/g, '');

				this.value = val;

				result();

			});

		});

// remove
		Array.prototype.forEach.call(cart.querySelectorAll('.cart__item-remove'), function(el){

			var item = el.closest('.cart__item');

			el.addEventListener('click',function(){

				item.style.height = item.clientHeight + 'px';

				item.addEventListener(JACKYS.cssAnimation('transition'),function(){

					item.remove();
					result();

				});

				item.classList.add('cart__item--remove');

			});

		});

	}

// mirror
	Array.prototype.forEach.call(cart.querySelectorAll('[data-mirror]'), function(el){

		el.addEventListener('blur', function(){

			document.querySelector('#' + el.getAttribute('data-mirror')).value = el.value;

		});

	});

})(document.querySelector('.cart'));*/