/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

	$(".image").hover(
	  function () {
	    $(this).addClass('icon fa-play');
	  },
	  function () {
	    $(this).removeClass('icon fa-play');
	  }
	);


	$('.image').on('click', function(ev) {

		var elem = ev.target;

		elem.classList.remove('icon');
		elem.classList.remove('fa-play');


		var video = elem.children[0];
		video.classList.remove('hidden');
		elem.children[0].src += "&autoplay=1";

		elem.removeChild(elem.children[1]);

	    ev.preventDefault();

	});

})(jQuery);