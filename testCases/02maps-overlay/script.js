var state = {
      tempF: undefined,
      locNM: undefined,
      //so on

      locations: []
};


//config object for locations
const config = {}

//constructor for locations
function Location(name, url, animal){
  this.name = name;
  this.url = url;
  this.animalImage = animal;
  // methods
  this.checkState = checkState(this.url);
  this.test = function test(){
    if ( tempF >= 50 && tempF < 58){
       div.className = "catHead"
       } 
       if  (tempF >= 58 && tempF < 65) {
         div.className = "narwhal"
       }
       else {
       console.log('its cold')
     }

  };
}




//define methods that are necessary for everything else


//define init
function init(){
  //call any methods you've defined here
}






init();