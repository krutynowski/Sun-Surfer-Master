

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    //center: {lat: 37.78036, lng: -122.44688},
    center: {lat: -33.9, lng: 151.2}   
  });

  setMarkers(map); 

 } 

 


var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4, '<IMG BORDER="0" ALIGN="Left" SRC="https://a.deviantart.net/avatars/p/i/pikiyo.png?3"> I am grumpy merh merh merh'],
  ['Coogee Beach', -33.923036, 151.259052, 5, 'This is b.'],
  ['Cronulla Beach', -34.028249, 151.157507, 3, 'This is c.'],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2, 'Im working yes yes yes yse.'],
  ['Maroubra Beach', -33.950198, 151.259302, 1, 'Please work.']
];

function setMarkers(map) {
  
// Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://a.deviantart.net/avatars/p/i/pikiyo.png?3',
    // This marker is 50 pixels wide by 50 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image 
    anchor: new google.maps.Point(100, 100),
    
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

//iffy 
// (function(){
var beach;
var infowindows = [];
// block level scope via let 
  for (let i = 0; i < beaches.length; i++) {
   beach = beaches[i];
   console.log(beach)
  
   infowindows.push(new google.maps.InfoWindow({
    content: beach[4]
   }));

     
  //TODO:
//The on click event is on the left ear, need to adjust the ancor so it works on the whole icon
    
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
      animation: google.maps.Animation.DROP
    });
    //console.log(marker)
   

   google.maps.event.addListener(marker, 'click', function (innerKey) {
   // debugger
   console.log("sooo grumpy")
   console.log(innerKey)

      // opening info window
        // infowindow.open(map, beaches[innerKey])
         //infowindow.setContent(marker.content);
        //infowindow.setContent(marker.beach[4]) 
        infowindows[i].open(map, this);
      // }
    });

  }
  // console.log(i)
  // console.log(infowindows[i].getContent());
 // })()
}




 