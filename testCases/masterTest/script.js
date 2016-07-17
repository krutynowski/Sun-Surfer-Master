var tempF;
var locNM; 
var NMlat;
var NMlon;


//CUSTOM OVERLAY START

  
var areaOverlays = []
var tempOverlays = []

var neighborhoods  = [
    {
        name: "Outer Richmond",
        image: "public/hoodOverlays/oRichmond.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94121.json",
        dimension: newBounds(37.76623674, -122.51496642, 37.79252937, -122.4725271)  
    },
    {   
        name: "Presidio",
        image: "public/hoodOverlays/presidio.png",
        // image: "https://d1v8u1ev1s9e4n.cloudfront.net/553f3a0d5ccacf195e0a7f02",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94129.json",
        dimension: newBounds(37.778891, -122.4920386, 37.81480176, -122.43670545)
    },
    // {   
    //     name: "Marina",
    //     image: "public/hoodOverlays/marina.png",
    //     zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94123.json",
    //     dimension: newBounds(37.861708 , -122.48528481, 37.98036, -122.2853560)
    // },
    // {
    //     name: "HOOD",
    //     image: "public/hoodOverlays/name.png",
    //     zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/zip.json",
    //     dimension: newBounds(lat, long, lat, long)  
    // },
    ]

var weatherStations = [
    {
         image: " ",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94117.json",
        dimension: newBounds(37.661708 , -122.44688, 37.78036, -122.2853560)
    },
    {
        image: " ",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94112.json",
        dimension: newBounds(37.761708 , -122.44688, 37.88036, -122.2853560)
    }
    ]
// var iconImg = [

//   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
//   "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
//   "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
//   "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", 
//   "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", 
//   "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", 
//   "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", 
//   "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", 
//   "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", 
//   "91", "92", "93", "94", "95", "96", "97", "98", "99"
//   ]    

var iconImg = {
  '60': 'http://image.flaticon.com/icons/png/128/146/146200.png',

  '61': 'https://cdn3.iconfinder.com/data/icons/weather-91/64/1-06-128.png'
}

function getData(place){
   return $.ajax({
         // url: encodeURI("http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/q/CA/San_Francisco.json"), 
         url: encodeURI(place.zipcode), 
         
         data: {
           format: 'json'
           
         },
         dataType: "jsonp"
     });
} 

var promisesArray = []

promisesArray = neighborhoods.map(function(place){
  return getData(place)
})
    

var areaOverlays;
// Initialize the map and the custom overlay.
function newBounds(lat1, lng1, lat2, lng2){
    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(lat1 , lng1),
        new google.maps.LatLng(lat2, lng2)
    );
    return bounds;
}


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    zoomControl: true,
    center: {lat: 37.78036, lng: -122.44688},
    disableDefaultUI: true, 
    styles:  [
{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ff71"
            },
            {
                "gamma": "0.39"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#27b0cd"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
});

  
setMarkers(map);
    
    /** @constructor */
function hoodOverlay(bounds, image, map) {
  // Initialize all properties.
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;
  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;
  // Explicitly call setMap on this overlay.
  this.setMap(map);
}
  /**
   * onAdd is called when the map's panes are ready and the overlay has been
   * added to the map.
   */
hoodOverlay.prototype = new google.maps.OverlayView();

hoodOverlay.prototype.onAdd = function() {
  div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';
  
  // Create the img element and attach it to the div.
    var img = document.createElement('img');
      img.src = this.image_;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.position = 'absolute';
      div.appendChild(img);
      this.div_ = div;
    // Add the element to the "overlayLayer" pane.
    var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
  };
  
hoodOverlay.prototype.draw = function() {
  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();
  // Retrieve the south-west and north-east coordinates of this overlay
  // in LatLngs and convert them to pixel coordinates.
  // We'll use these coordinates to resize the div.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
  // Resize the image's div to fit the indicated dimensions.
  var div = this.div_;
    div.style.left = sw.x + 'px';
    div.style.top = ne.y + 'px';
    div.style.width = (ne.x - sw.x)  + 'px';
    div.style.height = (sw.y - ne.y) + 'px';
};
  // The onRemove() method will be called automatically from the API if
  // we ever set the overlay's map property to 'null'.
hoodOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};

Promise.all(promisesArray).then(function(resolvedArray){
    resolvedArray.forEach(function(data, index, arr){
         locNM = data.current_observation.observation_location.city
         NMlat = data.current_observation.observation_location.latitude
         NMlon = data.current_observation.observation_location.longitude 
         tempF = data.current_observation.dewpoint_f
        // then console.log the temperature 
         // store dewpoin in a variable
         // pass into the draw function as a parameter with if else
         console.log(tempF)

          
              
          var tempOverlay = new hoodOverlay(weatherStations[index].dimension, weatherStations[index].image, map)
          
          // function iconSet(){


          //      if  (tempF === 64) {
          //       console.log('testing')
          //         // tempOverlay.temp = "60"
          //         tempOverlay.image_ = iconImg["61"];
          //         }
          //         else if ( tempF === 51 ){
          //           // tempOverlay.temp = "61"
          //           tempOverlay.image_ = iconImg["60"]
          //           }
          //           else {
          //           console.log('its cold')
          //         }
          //         tempOverlays.push(tempOverlay)
                
          //   }iconSet() 

          // basePath = "/public/folder/myIcon."
          // start = 40
          // end = 90
          // function iconArrayGen(basePath, start, end){          
          //     for (i=0; i<iconImg.length; i++){
          //        if (iconImg >= sat && iconImg < end) {
          //           iconImg.appendChild(basePath + i + ".png")
          //        } else {
          //           iconImg.appendChild(basePath + i ".png")
          //        }

          //   }
          // }


            var areaOverlay = new hoodOverlay(neighborhoods [index].dimension, neighborhoods [index].image, map)             

              if ( tempF >= 49 && tempF < 52){
              areaOverlay.temp = "fifties"
              // ovarlay
              } 
              if  (tempF >= 53 && tempF < 66) {
                areaOverlay.temp = "sixties"
              }
              else {

               console.log('brrrrrr')
             } 

          areaOverlays.push(areaOverlay)
            
      })
      console.log(locNM)
    //console.log(data.current_observation.observation_location.city)
  })
}

google.maps.event.addDomListener(window, 'load', initMap)

setTimeout(function(){
  // console.log(overlays)
  for(areaOverlay of areaOverlays){
    console.log('hello')
    if (areaOverlay.temp  === "fifties" ){
    // if ( tempF >= 50 && tempF < 58){
      console.log(areaOverlay.temp, "cat")
      areaOverlay.div_.className = "catHead"
      } 
       if  ( areaOverlay.temp === "sixties") {
        console.log(areaOverlay.temp, "narwal")
        areaOverlay.div_.className = "narwhal"
      }
      else {
      console.log('its cold')
    }   
  }  
},4000)

//CUSTOM OVERLAY END


//LOCATION MARKERS + INFO WINDOWS START 
//TODO: implement logic that depending what type of location it recieves a different icon, 
//do this by adding additional value in the array 

var locations = [

    ['SOMA', 37.77852, -122.40991539999999, 4, '<IMG BORDER="0" ALIGN="Left" SRC="http://a.deviantart.net/avatars/p/i/pikiyo.png?3"> FUCKING AWESOME TECH'],
    ['NOPA', 37.77573,  -122.44248, 5, 'ITS COLD HERE.'],
    ['Down Town',37.77493, -122.41942, 3, 'NO PUBLIC RESTROOMS'],
    ['Mission', 37.75986, -122.41480, 2, 'FOOOOODDDD HERE'],
    ['Potrero', 37.76626,  -122.40789, 1, 'NATIVES']
    ];



// Adds markers to the map
function setMarkers(map) {  

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
// console.log(location)

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
        infowindows[i].open(map, this);
 
    });
   }
}
//MARKERS + INFO WINDOWS END


