
var initializeMap = function() {
  var mapOptions = {
    center: concordeLatLng,
    zoom: 15,
    streetViewControl: true,
    mapMaker: true,
    heading: 20,
    
  };
  
  var map = new google.maps.Map(document.getElementById("js-map"), mapOptions);

  var marker = new google.maps.Marker({
   position: concordeLatLng,
   map: map,
  icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });        
}

var concordeLatLng = new google.maps.LatLng(50.822394, -0.137651);
google.maps.event.addDomListener(window, 'load', initializeMap);