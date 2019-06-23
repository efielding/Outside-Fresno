// MAIN NAV
// function that moves all content in main div to the right when the menu is open
// then shows the menu
function openNav(){
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menu").classList.toggle("show");
  }
  
  // Sets the left margin of the main div content to 0 
  // then hides the menu
  function closeNav() {
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").classList.toggle("show");
  }
  
  // END OF MAIN NAV
  
  // LOG IN
  var user = localStorage.getItem("name");
  var welcome = 'Welcome, ' + user + "!";
  document.getElementById("test").innerHTML = welcome;
  
  // END OF LOG IN
  
  // START OF WATCH LIST
  
  var savedList = document.getElementById("save");
  savedList.addEventListener('click', function() {
    if (this.innerHTML == "Save to Watchlist") {
      this.innerHTML = "Saved";
    } else {
      this.innerHTML = "Save to Watchlist";
    }
  })
  
  // API FOR WEATHER
  
  // This is the code to add the current weather
  // Variables for each element of api call and API key
  var api = 'https://api.openweathermap.org/data/2.5/weather?q='; // API endpoint
  var city = 'Fresno';
  var apiKey = '&appid=fe9a422805a990c7b90f9de0efcc182b'; // API key assigned to account
  var units = '&units=imperial'; // Express temps in farenheit
  var url = api + city + units + apiKey; // Concatenate API elements into URL
  console.log(url); // display url
  
  var request = new XMLHttpRequest()
  
  
  request.open('GET', url, true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    
  
    var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + 
      '.png'; // Url for icon and its place in the json obj
    var iconImage = document.getElementById('icon').src = icon; // Set the img on the #icon element
  
    var weather = data.weather[0].description; // Grab weather description
    document.getElementById('weather').innerHTML = weather; // Set var weather on #weather element
  
    var temp = data.main.temp; // Grab temp data
    var formattedTemp = Math.round(temp); // Round temp up/down to integer
      console.log(formattedTemp); // Display temperature as integer
    document.getElementById('temp').innerHTML = formattedTemp + '°'; // Display temperature as an integer in #temperature
  }
  request.send()