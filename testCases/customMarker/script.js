function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -33, lng: 151}
  });


  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Grumpy</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Grumpy</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
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
        '</p>'+
        '</div>'+
        '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var image = 'http://a.deviantart.net/avatars/p/i/pikiyo.png?3'
  
      var marker = new google.maps.Marker({
        position: {lat: -33.890, lng: 151.274},
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP
      });
      
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
}
