(function ($) {
    "use strict";
	
    var $window = $(window); 
    var $body = $('body'); 
	
    /* Preloader Effect */
    $window.on("load", function() {
        $(".preloader").fadeOut(600, function() {
            /*Portfolio (filtering) */
            /* Init Isotope y filtrar por elementos fullstack */
            var $portfolio = $('.portfolio-boxes').isotope({
                itemSelector: '.portfolio-box',
                layoutMode: 'fitRows',
                filter: '.backend' // Mostrar solo los elementos con la clase fullstack al cargar la página
            });
        
            var $portfolionav = $(".portfolio-nav li a");
            $portfolionav.on('click', function (e) {
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $portfolio.isotope({ filter: filterValue }).isotope('layout'); // Añade 'layout' aquí para forzar el redibujado

                $portfolionav.removeClass("active-portfolio");
                $(this).addClass("active-portfolio");

                // Scroll hacia la sección de proyectos
                $('html, body').animate({
                    scrollTop: $('#proyectos').offset().top - 74 // Ajusta el valor si necesitas más o menos espacio superior
                }, 800);
            });
        });
    });
	
    /* slick nav */
    $('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});

    /* Top Menu */
    $(document).on('click','.navbar-nav li a, #responsive-menu ul li a',function(){
        if($(this).hasClass("has-popup")) return false;
        var id = $(this).attr('href');
        if($(id).length) {
            var h = parseFloat($(id).offset().top);
            $('body,html').stop().animate({
                scrollTop: h - 74
            }, 800);
            return false;
        }
    });

    /* Init Counter */
    $('.counter').counterUp({ delay: 10, time: 1000 });
	
    /* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);