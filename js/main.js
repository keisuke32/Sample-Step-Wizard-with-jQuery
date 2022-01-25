(function ($) {

	"use strict";

	$(window).on('load', function () {
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350);
		$(window).scroll();
	});
	
	/* Check and radio input styles */
	$('input.icheck').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey'
	});
	
	/* Scroll to top small screens: change the top position offset based on your content*/
	var $Scrolbt = $('button.backward,button.forward');
	var $Element = $('html, body');

	if (window.innerWidth < 800) {
		$Scrolbt.on("click", function () {
			$Element.animate({
				scrollTop: 100
			}, "slow");
			return false;
		});
	}
	
	/* Form submit loader */
    $('form').on('submit',function() {
        var form = $("form#wrapped");
        form.validate();
        if (form.valid()) {
            $("#loader_form").fadeIn();
        }
    });
	
	/*  Image popups */
	$('.magnific-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup 
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});
	});
	
	/* Price Calculator */
	$("#wrapped").PriceCalc();
	//	Adds Total price and details to hidden inputs that can be used to e-mail data	
	$("form :input, form textarea, form select").change(function () {
	    setTimeout(function () {
	        var total = $('#total_value').html();
	        $('#hidden_total').val(total);
	    }, 150);
	});

	(function() {
		'use strict';
	  
		function ctrls() {
		  var _this = this;
	  
		  this.counter = 1;
		  this.els = {
			decrement: document.querySelector('.ctrl__button--decrement'),
			counter: {
			  container: document.querySelector('.ctrl__counter'),
			  num: document.querySelector('.ctrl__counter-num'),
			  input: document.querySelector('.ctrl__counter-input')
			},
			increment: document.querySelector('.ctrl__button--increment')
		  };
	  
		  this.decrement = function() {
			var counter = _this.getCounter();
			var nextCounter = (_this.counter > 1) ? --counter : counter;
			_this.setCounter(nextCounter);
		  };
	  
		  this.increment = function() {
			var counter = _this.getCounter();
			var nextCounter = (counter < 9999999999) ? ++counter : counter;
			_this.setCounter(nextCounter);
		  };
	  
		  this.getCounter = function() {
			return _this.counter;
		  };
	  
		  this.setCounter = function(nextCounter) {
			_this.counter = nextCounter;
		  };
	  
		  this.debounce = function(callback) {
			setTimeout(callback, 100);
		  };
	  
		  this.render = function(hideClassName, visibleClassName) {
			_this.els.counter.num.classList.add(hideClassName);
	  
			setTimeout(function() {
			  _this.els.counter.num.innerText = _this.getCounter();
			  _this.els.counter.input.value = _this.getCounter();
			  _this.els.counter.num.classList.add(visibleClassName);
			}, 100);
	  
			setTimeout(function() {
			  _this.els.counter.num.classList.remove(hideClassName);
			  _this.els.counter.num.classList.remove(visibleClassName);
			}, 200);
		  };
	  
		  this.ready = function() {
			_this.els.decrement.addEventListener('click', function() {
			  _this.debounce(function() {
				_this.decrement();
				_this.render('is-decrement-hide', 'is-decrement-visible');
			  });
			});
	  
			_this.els.increment.addEventListener('click', function() {
			  _this.debounce(function() {
				_this.increment();
				_this.render('is-increment-hide', 'is-increment-visible');
			  });
			});
	  
			_this.els.counter.input.addEventListener('input', function(e) {
			  var parseValue = parseInt(e.target.value);
			  if (!isNaN(parseValue) && parseValue >= 1) {
				_this.setCounter(parseValue);
				_this.render();
			  }
			});
	  
			_this.els.counter.input.addEventListener('focus', function(e) {
			  _this.els.counter.container.classList.add('is-input');
			});
	  
			_this.els.counter.input.addEventListener('blur', function(e) {
			  _this.els.counter.container.classList.remove('is-input');
			  _this.render();
			});
		  };
		};
	  
		// init
		var controls = new ctrls();
		document.addEventListener('DOMContentLoaded', controls.ready);
	  })();

})(window.jQuery);