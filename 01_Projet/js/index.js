
$(document).ready(function() { 
    $("#intro_text").typed({
         strings: ["Je suis étudiant.", "Je suis web designer.", "Je suis photographe.", "Je suis développeur."],
        loop: true,
    });
    
    $('#lightSlider').lightSlider({
        item:3,
        loop:true,
        slideMove:1,
        slideMargin:6,
        centerSlide: true,
        pager: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
    });  
    
}); 


function scrollIntro() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("intro").className = "invisible";
  }else if (document.body.scrollTop < 1000 || document.documentElement.scrollTop < 1000) {
    document.getElementById("intro").className = "visible"; 
  }
}


window.onscroll = function (){scrollIntro()};