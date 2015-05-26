//Maps
    function initialize() {
        var myLatLng = new google.maps.LatLng (-22.8137813, -47.0639391,19);
        var mapOptions = {
          center: myLatLng,
          zoom: 16
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