//image = 'http://www.geo.uzh.ch/~gboo/netap/img/catMarker.png';


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    //center: {lat: 37.78036, lng: -122.44688},
    center: {lat: -33.9, lng: 151.2}
  });

  setMarkers(map); 

 } 

var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
//TODO: remove once info window works
  //var infowindow = null;

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
//TODO: make these my locations for rooftops
//TODO: push in location 

var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function setMarkers(map) {

  infowindow = new google.maps.InfoWindow({
    content: contentString
  });
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
    anchor: new google.maps.Point(50, 50),
    
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    //TODO: not going into the this function, WWHHYY
    //trying closure 
   google.maps.event.addListener(beach, 'click', function (innerKey) {
   console.log("sooo grumpy")
//  adding .html to the marker object.
      return function(){
          infowindow[innerKey].open(map, beaches[innerKey])
        //infowindow.setContent(this.html);
        //infowindow.open(map, this);
      }
    }[i]);
  

    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
      animation: google.maps.Animation.DROP


    });
  }
}

// beaches.addListener('click', toggleBounce);

// function toggleBounce() {
//   if (beaches.getAnimation() !== null) {
//     beaches.setAnimation(null);
//   } else {
//    beaches.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }



  // var image = 'http://www.geo.uzh.ch/~gboo/netap/img/catMarker.png';
  // var marker = new google.maps.Marker({
  //   position: {lat: 37.78036, lng: -122.44688},
  //   map: map,
  //   icon: image,
  //   animation: google.maps.Animation.DROP
  // });
   //marker.addListener('click', toggleBounce);

//bounce function to animate marker  
// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }






//DROP SET TIME OUT FUNCTION 
// so that the markers drop at a different rate
// function drop() {
//   for (var i =0; i < markerArray.length; i++) {
//     setTimeout(function() {
//       addMarkerMethod();
//     }, i * 200);
//   }
// }


//removing a marker
//marker.setMap(null);