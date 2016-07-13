//TODO:
//info bubbles! 

var tempF;
var locNM; 
var NMlat;
var NMlon;

//uniformed to other map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    zoomControl: true,
    center: {lat: 37.78036, lng: -122.44688}  
  });

  setMarkers(map); 

 } 

//TODO: Start coping from overlay file with the overlay array and animals 

var locations = [

  ['SOMA', 37.77852, -122.40991539999999, 4, '<IMG BORDER="0" ALIGN="Left" SRC="http://a.deviantart.net/avatars/p/i/pikiyo.png?3"> SOMA'],
  ['NOPA', 7.77573,  -122.44248, 5, 'NOPA.'],
  ['Down Town',37.77493, -122.41942, 3, 'Down Town'],
  ['Mission', 37.75986, -122.41480, 2, 'Mission'],
  ['Potrero', 37.76626,  -122.40789, 1, 'Potrero']
];

function setMarkers(map) {
  
// Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'http://a.deviantart.net/avatars/p/i/pikiyo.png?3',
    // This marker is 50 pixels wide by 50 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image 
    // anchor: new google.maps.Point(100, 100),
    
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    // coords: [[0,0],[0,50],[50,50], [50,0]],
    type: 'poly'
  };


var location;
var infowindows = [];
// block level scope via let 
  for (let i = 0; i < locations.length; i++) {
   location = locations[i];
   console.log(location)
  
   infowindows.push(new google.maps.InfoWindow({
    content: location[4]
    }));

     
  //TODO:
//The on click event is on the left ear, need to adjust the ancor so it works on the whole icon
    
    var marker = new google.maps.Marker({

      position: {lat: location[1], lng: location[2]},
      map: map,
      icon: image,
      shape: shape,
      title: location[0],
      zIndex: location[3],
      animation: google.maps.Animation.DROP
    });
    //console.log(marker)
   

   google.maps.event.addListener(marker, 'click', function (innerKey) {
   // debugger
   console.log("sooo grumpy")
   console.log(innerKey)
    infowindows[i].open(map, this);
     
    });
  }
}




 