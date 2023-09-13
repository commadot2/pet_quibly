$(function() {

	// <script src="libs/wow.min.js"></script>
	new WOW().init();

	// mnu mobile hamburger open
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			// version without toggling right
			// $('.mnu_top').animate({width: 'toggle'}, 2000);

			// we are toggling right because .mnu_top position is absolute,
			// and without this toggling slide will underrun
			$('.mnu_top').animate({width: 'toggle', right: '-5px'}, 150); // -5px is how user will see
		} else {
			// version without toggling right
			// $('.mnu_top').animate({width: 'toggle'}, 2000);

			$('.mnu_top').animate({width: 'toggle', right: '-50px'}, 150); // -50px is outside the screen
		}
		});
	// mnu mobile hamburger open

	// reviews tabs
	const revDivs = document.querySelectorAll('.nav_rev div');
	revDivs.forEach((div) => {
		div.addEventListener('click', function() {
			const current_active_div = document.querySelector('.nav_rev div.active');
			current_active_div.classList.remove('active');
			div.classList.add('active');


			const current_active_item_id = current_active_div.getAttribute('data-revid');
			const current_active_item = document.getElementById(current_active_item_id);
			current_active_item.classList.remove('active');

			const new_item_id = div.getAttribute('data-revid');
			const new_item = document.getElementById(new_item_id);

			new_item.classList.add('active');
		});	 
	});
	// reviews tabs
	
	// click animation for items
	const navRev = document.querySelector('.nav_rev');
	const navItems = navRev.querySelectorAll('div'); //select all div elements inside .nav_rev

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.add('animate'); //add 'animate' class to the clicked element
			setTimeout(() => {
				item.classList.remove('animate'); //remove 'animate' class after 500ms
			}, 200);
		});
	});
	// click animation for items

	// anchor
	$('a.anchor').on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop:  $($anchor.attr('href')).offset().top
		}, {
			duration: 750,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	})
	
	// acnhor
});

