function callingAJAX(data) {
    $.ajax({
        url: urlType,
        data: {
            format: 'json'
        },
        dataType: "jsonp",
        success: function(data) {
            console.log(data)

            locNM = data.current_observation.observation_location.city
            NMlat = data.current_observation.observation_location.latitude
            NMlon = data.current_observation.observation_location.longitude
            tempF = data.current_observation.dewpoint_f
            console.log(data.current_observation.dewpoint_f)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus, +' | ' + errorThrown);
        }
    });
}

var THE_ANIMALS = {
    narwhal: {
        image: "https://wallazee.global.ssl.fastly.net/images/variant/20130718-774e5790ba7e48e298c9c49e9ffaedeaddf477eb4f6278828dd4d43-1024.png",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94117.json",
        dimension: newBounds(37.661708 , -122.44688, 37.78036, -122.2853560)
    },
    cat: {
        image: "https://d1v8u1ev1s9e4n.cloudfront.net/553f3a0d5ccacf195e0a7f02",
        zipcode: "http://api.wunderground.com/api/fafc315f4b0ce36b/conditions/geolookup/q/94112.json",
        dimension: newBounds(37.761708 , -122.44688, 37.88036, -122.2853560)
    }
}
for(var key in THE_ANIMALS){
    callingAJAX(ZIPCODES[key].zipcode);

}

//Add Comment C