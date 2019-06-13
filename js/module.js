var formSubmit = document.getElementById('submit-info');
formSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    var nameSet = document.getElementById('name-input').value;
    var emailSet = document.getElementById('email-input').value;
    localStorage.setItem('name', nameSet);
    localStorage.setItem('email', emailSet);
})