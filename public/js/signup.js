$(document).ready(function() {
    const signupBtn = $('#signupBtn');
    const emailField = $('#emailField');
    const usernameField = $('#usernameField');
    const passwordField = $('#passwordField');
    


    signupBtn.on('click', function(event) {
        event.preventDefault();
        $.post('/api/users/signup', {
            username: usernameField.val().trim(),
            password: passwordField.val().trim(),
        });
        window.location.href = '/homepage';
    });


});