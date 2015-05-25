$(document).ready(function() {	
	
	redimensionar();
	
	$('.carousel').css( "margin-bottom", 0 );
	$('body').css( "padding-bottom", 0 );
	$('.carousel-caption').css( "margin-bottom", 0 );
	$('.carousel-caption').css( "padding-bottom", '20%' );
		
    });
	
function redimensionar() {

    heightScreen = $( window ).height();
	
	$('.carousel-inner').css( "height", heightScreen );
	$('.carousel .item').css( "height", heightScreen );
	$('.carousel').css( "height", heightScreen );

	$('#map-canvas').css( "height", heightScreen/2 );	
	}
	
window.onresize =  redimensionar;