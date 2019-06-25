// nav button
function openNav(){
  document.getElementById("main").style.marginLeft = "250px";
  console.log(openNav);
}

// Log In

// code for modal to grab name and email and save to local storage
var formSubmit = document.getElementById('submit-info');
formSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    // grabbing name and email from the form in html
    var nameSet = document.getElementById('name-input').value;
    var emailSet = document.getElementById('email-input').value;
    // saving to local storage and naming key
    localStorage.setItem('name', nameSet);
    localStorage.setItem('email', emailSet);
    // grabbing name and calling div id to insert into div
    document.getElementById("test").innerHTML = localStorage.getItem("name");
    var user = localStorage.getItem("name");
    var welcome = 'Welcome, ' + user + "!";
    document.getElementById("test").innerHTML = welcome;
})

// display name
var user = localStorage.getItem("name");
var welcome = 'Welcome, ' + user + "!";
document.getElementById("test").innerHTML = welcome;


// display name

var user = localStorage.getItem("name");

if (user != null){
var welcome = 'Welcome '+ user + "!";
document.getElementById("test").innerHTML = welcome;
document.getElementById('login').style.visibility = "hidden";
}else{
  document.getElementById("test").innerHTML = 'Welcome!';
}

// weather 
// variables for each element of api call and api key
var api = 'https://api.openweathermap.org/data/2.5/weather?q='; // api endpoint
var city = 'Fresno';
var apiKey = '&appid=fe9a422805a990c7b90f9de0efcc182b'; // api key assigned to account
var units = '&units=imperial'; // express temps in farenheit
var url = api + city + units + apiKey; // concatenate api elements into url 
console.log(url); // display url

var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  

  var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + 
    '.png';// url for icon and its place in the json obj
  var iconImage = document.getElementById('icon').src = icon; // set the img on the #icon element

  var weather = data.weather[0].description; // grab weather description
  document.getElementById('weather').innerHTML = weather; // set var weather on #weather element

  var temp = data.main.temp; // grap temp data
  var formattedTemp = Math.round(temp); // round temp up/down to int
    console.log(formattedTemp); // display temp as int
  document.getElementById('temp').innerHTML = formattedTemp + '°'; // display temperature as an int in #temp
}
request.send()