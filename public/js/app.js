$(document).ready(function() {
    const signupBtn = $('#signupBtn');

    signupBtn.on('click', function(event) {
        event.preventDefault();
        $.post('/api/users/signup', {
            username: usernameField.val().trim(),
            password: passwordField.val().trim,
        });
        window.location.href = '/homepage';
    });

});