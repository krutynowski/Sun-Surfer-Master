var tempF;
var locNM; 
var NMlat;
var NMlon;
var map;
var locations;


var areaOverlays = []
var tempOverlays = []


//CUSTOM OVERLAY START


var neighborhoods  = [

    {
        name: "Outer Richmond",
        image: "/hoodOverlays/oRichmond.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94121.json",
        dimension: newBounds(37.76623674, -122.51496642, 37.79252937, -122.4725271)  
    },
    {   
        name: "Presidio",
        image: "/hoodOverlays/presidio.png",
        // image: "https://d1v8u1ev1s9e4n.cloudfront.net/553f3a0d5ccacf195e0a7f02",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94129.json",
        dimension: newBounds(37.777891, -122.4920386, 37.81530176, -122.43670545)
    },
    {   
        name: "Marina",
        image: "/hoodOverlays/marina.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94123.json",
        dimension: newBounds(37.78760081, -122.45402952, 37.8113986, -122.41143442)
    },
    {   
        name: "North Beach",
        image: "/hoodOverlays/northBeach.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94133.json",
        dimension: newBounds(37.78183721, -122.43198395, 37.81039082, -122.39009174)
    },
    {   
        name: "Inner Richmond",
        image: "/hoodOverlays/innerRichmond.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94118.json",
        dimension: newBounds(37.76871501, -122.48717258, 37.79433718, -122.44001002)
    },
    {   
        name: "Pacific Heights",
        image: "/hoodOverlays/pacificHeights.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94115.json",
        dimension: newBounds(37.77777043, -122.44674683, 37.7989493, -122.4131012)
    },
    {   
        name: "Sunset",
        image: "/hoodOverlays/sunSet.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94122.json",
        dimension: newBounds(37.72673718, -122.5142616, 37.77661441, -122.44490024)
    },
    {   
        name: "Lake Merced",
        image: "/hoodOverlays/lakeMerced.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94132.json",
        dimension: newBounds(37.67477129, -122.5100384, 37.73741279, -122.46705271)
    },
    {   
        name: "Haight",
        image: "/hoodOverlays/haight.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94117.json",
        dimension: newBounds(37.75704423, -122.45479667, 37.787891, -122.41585593)
    },
    {   
        name: "Twin Peaks",
        image: "/hoodOverlays/twinPeaks.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94131.json",
        dimension: newBounds(37.71641605, -122.47399766, 37.76759374, -122.42340088)
    },
    {   
        name: "Castro",
        image: "/hoodOverlays/catro.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94114.json",
        dimension: newBounds(37.75375119, -122.4508667, 37.76759374, -122.42340088)
    },
    {   
        name: "Noe Valley",
        image: "/hoodOverlays/noeValley.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94114.json",
        dimension: newBounds(37.72795579, -122.45390074, 37.76759374, -122.41680088)
    },
    {   
        name: "Downtown",
        image: "/hoodOverlays/downtown.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94104.json",
        dimension: newBounds(37.77453168, -122.41888019, 37.794525, -122.40182741)
    },
    {   
        name: "SOMA",
        image: "/hoodOverlays/soma.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94105.json",
        dimension: newBounds(37.76826868, -122.42324696, 37.79588148, -122.3850945)

    },
    {   
        name: "Potrero",
        image: "/hoodOverlays/potrero.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94107.json",
        dimension: newBounds(37.74457549, -122.40673393, 37.77729555, -122.37532202)
    },
    {   
        name: "Mission",
        image: "/hoodOverlays/mission.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94110.json",
        dimension: newBounds(37.74447156, -122.43206489, 37.77666736, -122.39715738)
    },
    {   
        name: "Bernal",
        image: "/hoodOverlays/bernal.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94110.json",
        dimension: newBounds(37.72513144, -122.43904388, 37.75320829, -122.40151324)
    },
    {   
        name: "Hunters Point",
        image: "/hoodOverlays/huntersPoint.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94124.json",
        dimension: newBounds(37.70799807, -122.4139595, 37.75210041, -122.35397721)
    },
    {   
        name: "Excelsior",
        image: "/hoodOverlays/exelsior.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94134.json",
        dimension: newBounds(37.68517884, -122.4614488, 37.73825403, -122.3913002)
    },
    {   
        name: "Ingleside",
        image: "/hoodOverlays/ingleside.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94112.json",
        dimension: newBounds(37.68241277, -122.47761183, 37.73316793, -122.43309975)
    },

    ]

    var weatherStations = [
       
        {
            name: "Outer Richmond",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94121.json",
            dimension: newBounds(37.77907284, -122.49831173, 37.7843167, -122.49144519)
        },
        {
            name: "Presidio",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94129.json",
            dimension: newBounds(37.79183082, -122.45950028, 37.79707468, -122.45263447)
        },
        {
            name: "Marina",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94123.json",
            dimension: newBounds(37.79689882, -122.44073868, 37.80214268, -122.43387287)
        },
        {   
            name: "North Beach",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94133.json",
            dimension: newBounds(37.79811961, -122.41447449, 37.80336347, -122.40760868000001)
        },
        {
            name: "Inner Richmond",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94118.json",
            dimension: newBounds(37.77835452, -122.46885784, 37.78359838, -122.46199203)
        },
        {
            name: "Pacific Heights",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94115.json",
            dimension: newBounds(37.78964147, -122.43052483, 37.79488533, -122.42365902)
        },
        {   
            name: "Sunset",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94122.json",
            dimension: newBounds(37.75117239, -122.4833107, 37.75641625, -122.47644489000001)
        },
        {   
            name: "Lake Merced",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94132.json",
            dimension: newBounds(37.72071975, -122.4832593, 37.72596361, -122.47639349)
        },
        {   
            name: "Haight",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94117.json",
            dimension: newBounds(37.77193596, -122.44674683, 37.77717982, -122.43988102)
        },
        {   
            name: "Twin Peaks",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94131.json",
            dimension: newBounds(37.7432997, -122.4553299, 37.74854356, -122.44846409)
        },
        {   
            name: "Castro",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94114.json",
            dimension: newBounds(37.75451515, -122.43582977, 37.75975901, -122.42896396)
        },
         {   
            name: "Noe Valley",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94114.json",
            dimension: newBounds(37.74397841, -122.43164062, 37.74922227, -122.42477481)
        },
        {   
            name: "Downtown",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94104.json",
            dimension: newBounds(37.79070783, -122.41019538, 37.79595169, -122.40332957000001)
        },
        {   
            name: "SOMA",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94103.json",
            dimension: newBounds(37.78078111, -122.40493722, 37.78602497, -122.39807141)
        },
        {   
            name: "Potrero",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94107.json",
            dimension: newBounds(37.76542253, -122.40142822, 37.77066639, -122.39456241)
        },
        {   
            name: "Mission",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94110.json",
            dimension: newBounds(37.76263845, -122.42324696, 37.76788231, -122.41638115)
        },
         {   
            name: "Bernal",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94110.json",
            dimension: newBounds(37.73447587, -122.42048264, 37.73971973, -122.41361683000001)
        },
        {   
            name: "Hunters Point",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94124.json",
            dimension: newBounds(37.72878748, -122.38837321, 37.73403134, -122.3815074)
        },
        {   
            name: "Excelsior",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94134.json",
            dimension: newBounds(37.71929028, -122.43076212, 37.72453414, -122.42389631)
        },
        {   
            name: "Ingleside",
            image: " ",
            zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94112.json",
            dimension: newBounds(37.72091971, -122.46269113, 37.72616357, -122.45582532)
        },

        ]
    

// var iconImg = [

// iconImg[parseInt(tempF)]

//   "0.png", "file/path/to/1/png", "2", "3", "4", "5", "6", "7", "8", "9", "10",
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

// var iconImg = {
//   '60': 'http://image.flaticon.com/icons/png/128/146/146200.png',

//   '61': 'https://cdn3.iconfinder.com/data/icons/weather-91/64/1-06-128.png'
// }

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

promisesArray.push()

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
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
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
                "color": "#26C6DA"
                // "color": "#27b0cd"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
});

  

    
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
         // tempOverlay.image_ = 'tempIcons/' + parseInt(tempF) + '.png'
        // then console.log the temperature 
         // store dewpoint in a variable
         // pass into the draw function as a parameter with if else
         console.log(tempF)

          
              
          var tempOverlay = new hoodOverlay(weatherStations[index].dimension, weatherStations[index].image, map)
          
          function iconSet(){
            var intTemp = parseInt(tempF)
            return tempOverlay.image_ = 'tempIcons/' + intTemp + '.png'
            } iconSet()

               // if  (tempF === 64) {
               //  console.log('testing')
               //    // tempOverlay.temp = "60"
               //    tempOverlay.image_ = iconImg["61"];
               //    }
               //    else if ( tempF === 51 ){
               //      // tempOverlay.temp = "61"
               //      tempOverlay.image_ = iconImg["60"]
               //      }
               //      else {
               //      console.log('its cold')
               //    }
               //    tempOverlays.push(tempOverlay)
                

          // basePath = "/public/folder/myIcon."
          // start = 40
          // end = 90
          // function iconArrayGen(basePath, start, end){          
          //     for (i=0; i<iconImg.length; i++){
          //        if (i >= start && i < end) {
          //           iconImg.appendChild(basePath + i + ".png")
          //        } else {
          //           iconImg.appendChild(basePath + i ".png")
          //        }

          //   }
          // } tempOverlays.image = iconImg[tempF]


            var areaOverlay = new hoodOverlay(neighborhoods [index].dimension, neighborhoods [index].image, map)             

              if (tempF <= 49){
              areaOverlay.temp = "forties"
              // ovarlay
              } 
              if  (tempF >= 50 && tempF <= 53) {
                areaOverlay.temp = "lowFifties"
              }
              else if  (tempF >= 54 && tempF <= 57) {
                areaOverlay.temp = "midFifties"
              }
              else if  (tempF >= 58 && tempF <= 61) {
                areaOverlay.temp = "highFifties"
              }
              else if  (tempF >= 62 && tempF <= 65) {
                areaOverlay.temp = "lowSixties"
              }
              else if  (tempF >= 66 && tempF <= 69) {
                areaOverlay.temp = "highSixties"
              }
              else if  (tempF >= 70 && tempF <= 74) {
                areaOverlay.temp = "lowSeventees"
              }
              else if  (tempF >= 75 && tempF <= 79) {
                areaOverlay.temp = "highSeventees"
              }
              else if   (tempF >= 80 ) {
                areaOverlay.temp = "eighties"
        }
          areaOverlays.push(areaOverlay)

      })
      return $.get("/public_spaces")
    //console.log(data.current_observation.observation_location.city)

    //chaining to the promise my request to my database 
  }).then(function(data){
    locations = data.map(function(location){
        return [location["name"], parseFloat(location["latitude"]), parseFloat(location["longitude"]), location["zIndex"], location["description"]]
    })
    console.log(locations)
    setMarkers(map);
    // FUNCTION TO PLACE IMG
  })
}

google.maps.event.addDomListener(window, 'load', initMap)

setTimeout(function(){
  // console.log(overlays)
  for(areaOverlay of areaOverlays){
    if (areaOverlay.temp  === "forties" ){
      areaOverlay.div_.className = "darkBlue"
      } 
       else if  ( areaOverlay.temp === "lowFifties") {
        console.log(areaOverlay.temp, "narhwal")
        areaOverlay.div_.className = "blue"
      }
      else if  ( areaOverlay.temp === "midFifties") {
        console.log(areaOverlay.temp, "pea")
        areaOverlay.div_.className = "teal"
      }
      else if  ( areaOverlay.temp === "highFifties") {
        console.log(areaOverlay.temp, "en")
        areaOverlay.div_.className = "green"
      }
      else if  ( areaOverlay.temp === "lowSixties") {
        console.log(areaOverlay.temp, "lim")
        areaOverlay.div_.className = "lime"
      }
      else if  ( areaOverlay.temp === "highSixties") {
        console.log(areaOverlay.temp, "mellow")
        areaOverlay.div_.className = "yellow"
      }
      else if  ( areaOverlay.temp === "lowSeventees") {
        console.log(areaOverlay.temp, "lo")
        areaOverlay.div_.className = "lightOrange"
      }
      else if  ( areaOverlay.temp === "highSeventees") {
        console.log(areaOverlay.temp, "or")
        areaOverlay.div_.className = "orange"
      }
      else if  ( areaOverlay.temp === "eighties") {
        console.log(areaOverlay.temp, "red")
        areaOverlay.div_.className = "red"
      }
      else {
      console.log('off the charts')
    }   
  }  
},6000)

//CUSTOM OVERLAY END


//LOCATION MARKERS + INFO WINDOWS START 
//TODO: implement logic that depending what type of location it recieves a different icon, 
//do this by adding additional value in the array 


// var locations = [

//     ['SOMA', 37.77852, -122.40991539999999, 4, '<IMG BORDER="0" ALIGN="Left" SRC="http://a.deviantart.net/avatars/p/i/pikiyo.png?3"> FUCKING AWESOME TECH'],
//     ['NOPA', 37.77573,  -122.44248, 5, 'ITS COLD HERE.'],
//     ['Down Town',37.77493, -122.41942, 3, 'NO PUBLIC RESTROOMS'],
//     ['Mission', 37.75986, -122.41480, 2, 'FOOOOODDDD HERE'],
//     ['Potrero', 37.76626,  -122.40789, 1, 'NATIVES']
//     ];


// Adds markers to the map
function setMarkers(map) {  

// Marker sizes are expressed as a Size of X,Y where the origin of the image
// (0,0) is located in the top left of the image.

// Origins, anchor positions and coordinates of the marker increase in the X
// direction to the right and in the Y direction down.
var image = {
  url: '/icons/placeIcon5.png',
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

      place: {
        location: {lat: location[1], lng: location[2]},
        query: location[0]
      },
      // position: {lat: location[1], lng: location[2]},
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


