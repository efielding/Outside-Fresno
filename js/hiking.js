// apiKey 200468098-d3b92bb22cd80b7ec7b0b1c7d30741cd
// lon: -119.78
// lat: 36.74

var getTrails = 'https://www.hikingproject.com/data/get-trails?'; // endpoint
var latitude = 'lat=36.74'; // lat/long of fresno
var longitude = '&lon=-119.78';
var distance = '&maxDistance=50'; // max distance from fresno
var sort = '&sort=distance'; // sort parameter
var results = '&maxResults=50'; // #of results
var apiKey = '&key=200468098-d3b92bb22cd80b7ec7b0b1c7d30741cd'; // apiKey
var url = getTrails + latitude + longitude + distance + sort + results + apiKey; //concat variables to url
console.log(url); // display url for test purposes




var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  //data is the JSON root, trails is the first object, and the array
  // inside trails holds the objects that are individual hiking
  let trails = data.trails;
  console.log(trails);

  for (var i = 0; i < trails.length; i++) {

    // trail from first index
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


    // trail from second index
    var img = trails[1].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-1").src = img;

    var name = trails[1].name; // grab name of trail
    document.getElementById("trail-name-1").innerHTML = name;

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

    // trail from index 3
    var img3 = trails[3].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-3").src = img3;

    var name3 = trails[3].name; // grab name of trail
    document.getElementById("trail-name-3").innerHTML = name3;

    var location3 = trails[3].location; // grab location of trail
    document.getElementById('trail-loc-3').innerHTML = location3;

    var summary3 = trails[3].summary; // grab summary
    document.getElementById('trail-desc-3').innerHTML = summary3;

    var trailUrl3 = data.trails[3].url; // grab link to trail
    document.getElementById('trail-url-3').href = trailUrl3;

    // trail from index 4
    var img4 = trails[4].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-4").src = img4;

    var name4 = trails[4].name; // grab name of trail
    document.getElementById("trail-name-4").innerHTML = name4;

    var location4 = trails[4].location; // grab location of trail
    document.getElementById('trail-loc-4').innerHTML = location4;

    var summary4 = trails[4].summary; // grab summary
    document.getElementById('trail-desc-4').innerHTML = summary4;

    var trailUrl4 = data.trails[4].url; // grab link to trail
    document.getElementById('trail-url-4').href = trailUrl4;


    // trail from index 23 (needed a trail with photo)
    var img5 = trails[23].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-5").src = img5;

    var name5 = trails[23].name; // grab name of trail
    document.getElementById("trail-name-5").innerHTML = name5;

    var location5 = trails[23].location; // grab location of trail
    document.getElementById('trail-loc-5').innerHTML = location5;

    var summary5 = trails[23].summary; // grab summary
    document.getElementById('trail-desc-5').innerHTML = summary5;

    var trailUrl5 = data.trails[23].url; // grab link to trail
    document.getElementById('trail-url-5').href = trailUrl5;

    // trail from index 6
    var img6 = trails[6].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-6").src = img6;

    var name6 = trails[6].name; // grab name of trail
    document.getElementById("trail-name-6").innerHTML = name6;

    var location6 = trails[6].location; // grab location of trail
    document.getElementById('trail-loc-6').innerHTML = location6;

    var summary6 = trails[6].summary; // grab summary
    document.getElementById('trail-desc-6').innerHTML = summary6;

    var trailUrl6 = data.trails[6].url; // grab link to trail
    document.getElementById('trail-url-6').href = trailUrl6;

    // trail from index 10 (needed an index with a photo)
    var img7 = trails[10].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-7").src = img7;

    var name7 = trails[10].name; // grab name of trail
    document.getElementById("trail-name-7").innerHTML = name7;

    var location7 = trails[10].location; // grab location of trail
    document.getElementById('trail-loc-7').innerHTML = location7;

    var summary7 = trails[10].summary; // grab summary
    document.getElementById('trail-desc-7').innerHTML = summary7;

    var trailUrl7 = data.trails[10].url; // grab link to trail
    document.getElementById('trail-url-7').href = trailUrl7;

    // trail from index 11 (needed an index with a photo)
    var img8 = trails[11].imgMedium;// grab small/med size img of trail
    document.getElementById("trail-img-8").src = img8;

    var name8 = trails[11].name; // grab name of trail
    document.getElementById("trail-name-8").innerHTML = name8;

    var location8 = trails[11].location; // grab location of trail
    document.getElementById('trail-loc-8').innerHTML = location8;

    var summary8 = trails[11].summary; // grab summary
    document.getElementById('trail-desc-8').innerHTML = summary8;

    var trailUrl8 = data.trails[11].url; // grab link to trail
    document.getElementById('trail-url-8').href = trailUrl8;
  };

}

request.send()