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

    // trail from index 0
    var img = trails[0].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img").src = img;
  
    var name = trails[0].name; // grab name of trail
    document.getElementById("trail-name").innerHTML = name;
  
    var location = trails[0].location; // grab location of trail
    document.getElementById('trail-loc').innerHTML = location;
  
    var summary = trails[0].summary; // grab summary
    document.getElementById('trail-desc').innerHTML = summary;
  
    var trailUrl = data.trails[0].url; // grab link to trail
    document.getElementById('trail-url').href = trailUrl;


    //trail from index 1
    var img = trails[1].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-1").src = img;
  
    var name1 = trails[1].name; // grab name of trail
    document.getElementById("trail-name-1").innerHTML = name1;
  
    var location = trails[1].location; // grab location of trail
    document.getElementById('trail-loc-1').innerHTML = location;
  
    var summary = trails[1].summary; // grab summary
    document.getElementById('trail-desc-1').innerHTML = summary;
  
    var trailUrl = data.trails[1].url; // grab link to trail
    document.getElementById('trail-url-1').href = trailUrl;
    
    // trail from index 2
    var img2 = trails[2].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-2").src = img2;
  
    var name2 = trails[2].name; // grab name of trail
    document.getElementById("trail-name-2").innerHTML = name2;
  
    var location2 = trails[2].location; // grab location of trail
    document.getElementById('trail-loc-2').innerHTML = location2;
  
    var summary2 = trails[2].summary; // grab summary
    document.getElementById('trail-desc-2').innerHTML = summary2;
  
    var trailUrl2 = data.trails[2].url; // grab link to trail
    document.getElementById('trail-url-2').href = trailUrl2;



  };

}

request.send()