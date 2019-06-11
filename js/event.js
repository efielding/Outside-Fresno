var api = 'https://api.openweathermap.org/data/2.5/weather?q='; // api endpoint
var city = 'Fresno';
var apiKey = '&appid=fe9a422805a990c7b90f9de0efcc182b'; // api key assigned to account
var units = '&units=imperial'; // express temps in farenheit
var url = api + city + units + apiKey; // concatenate api elements into url 
console.log(url);

let request =  new XMLHttpRequest();

request.open('GET', url, true);

request.onload = function() {
let data = JSON.parse(this.response);

let icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'; // url for icon and its place in the json obj
let iconImage = document.getElementById('icon').src = icon;

let weather = data.weather[0].description;
document.getElementById('weather').innerHTML = weather;

let temp = data.main.temp;
let formattedTemp = Math.round(temp);
console.log(formattedTemp);
document.getElementById('temp').innerHTML = formattedTemp + '°';}

request.send();