// apiKey 200468098-d3b92bb22cd80b7ec7b0b1c7d30741cd
// lon: -119.78
// lat: 36.74

var getTrails = 'https://www.hikingproject.com/data/get-trails?'; // endpoint
var latitude = 'lat=36.74'; // lat/long of fresno
var longitude = '&lon=-119.78';
var distance = '&maxDistance=50'; // max distance from fresno
var sort = '&sort=distance'; // sort parameter
var results = '&maxResults=10'; // #of results
var apiKey = '&key=200468098-d3b92bb22cd80b7ec7b0b1c7d30741cd'; // apiKey
var url = getTrails + latitude + longitude + distance + sort + results + apiKey; //concat variables to url
console.log(url); // display url for test purposes

// making the http request, using the url variable and returning the 
// requested data
var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  //data is the JSON root, trails is the first object, and the array
  // inside trails holds the objects that are individual hiking trails
  let trails = data.trails; 
  console.log(trails);

  // looping through all of the member objects of the array
  for (var i = 0; i < trails.length; i++){

    // taking the relevant info from the objects, then calling the id's 
    // inside the HTML elements and setting the object info on the elements
    
    var img = trails[0].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img").src = img;

    var name = trails[0].name; // grab name of trail
    document.getElementById("trail-name").innerHTML = name;

    var location = trails[0].location; // grab location of trail
    document.getElementById('trail-loc').innerHTML = location;

    var summary = trails[0].summary; // grab summary
    document.getElementById('trail-desc').innerHTML = summary;

    var trailUrl = data.trails[0].url; // grab link to trail
    document.getElementById('trail-url').innerHTML = trailUrl;

    console.log(img, name, summary, trailUrl); // display data for test purposes

  };

}

request.send()