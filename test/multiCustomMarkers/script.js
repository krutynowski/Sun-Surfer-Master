function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 37.78036, lng: -122.44688}
  });

var LOCATIONS = {
  oLocation: {
    title: "MERH",
    address: "9 Loyola",
    city: "SF",
    zipcode: "94117"
  }


}
var content = {
 sContent : 
  '<h2>' + LOCATIONS.oLocation.title + '</h2>' +
  '<br />' +
  '<p>' +
    LOCATIONS.oLocation.address + 
    '<br />' +
    LOCATIONS.oLocation.city +
    '<br />' +
    LOCATIONS.oLocation.zip +
  '</p>'


}

var infoWindow = new google.maps.InfoWindow({ content: sContent });
Raw

var marker1 = new google.maps.Marker({
    position: {lat: 37.78036, lng: -122.44688},
    map:      map,
    //title:    markers[i][0],
    info:     content.sContent
});

google.maps.event.addListener( marker1, 'click', function() {

   infoWindow.setContent( this.info );
   infoWindow.open( map, this );

});
}