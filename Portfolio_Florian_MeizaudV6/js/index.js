// -------------------------
// Animation de l'accordéon
// Non adapté a IE8/9
// ------------------------


(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
    
    if(thisAnswer === null){
        thisAnswer = e.target.parentNode.parentNode.nextElementSibling;
        var thisQuestion = e.target.parentNode;
    }
    
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
    
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();



// ----------  SLIDER

$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 4,

});

// ----------- Rechargement de page sur clic du header

$('.heading-primary').click(function() {
    location.reload();
});

// ----------- Animation texte header sur passage de curseur

var dance = {
  
  init: function() {
    this.dance();
  },
  
  config: {
    newSize: 0.3,
  },
  
  dance: function(config) {
    var newText = '',
        h1 = $('.heading-primary h5'),
        text = h1.text(),
        oldSize = h1.css('letter-spacing'),
        length = text.length,
        i;
  
    for( i = 0; i < length; i++ ) {
      
      newText += '<span>' + text.charAt(i) + '</span>';    
    }
    
    h1.html(newText);
    
    h1.on('mouseenter mouseleave', 'span', function(e) {
      var span = $(this);
      
      if( e.type == 'mouseenter') {
         
        span.stop(true,false).animate({letterSpacing: dance.config.newSize + 'rem'});
        
      } else if( e.type == "mouseleave" ) {
        
        span.animate({letterSpacing: oldSize});
      }  
    });
  }
};

$(function() {
  dance.init();
});