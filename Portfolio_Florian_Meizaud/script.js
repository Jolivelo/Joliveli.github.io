$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});

function scrolled(){
    var header = document.querySelector('header');

	var windowHeight = document.body.clientHeight,
		currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	header.className = (currentScroll >= windowHeight - header.offsetHeight ) ? "fixed" : "";
}

addEventListener("scroll", scrolled, false);
