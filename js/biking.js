// Set the width of the sidebar to 250px and the left margin of the page content to 250px to make the content inside 'main' slide over
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

// Set the width of the sidebar to 0 and the left margin of the page content to 0 
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Log In
var user = localStorage.getItem("name");
var welcome = 'Welcome ' + user + "!";
document.getElementById("test").innerHTML = welcome;