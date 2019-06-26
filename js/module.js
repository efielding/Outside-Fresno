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
})