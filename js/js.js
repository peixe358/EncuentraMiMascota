/scrollspy

$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
});


//maps
function initialize() {
        var myLatLng = new google.maps.LatLng (-22.817104,-47.069731,17);
        var mapOptions = {
          center: myLatLng,
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
        });
          setInterval(function(){
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }, 1000);
}
google.maps.event.addDomListener(window, 'load', initialize);