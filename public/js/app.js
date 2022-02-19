$(document).ready(function() {
    const signinBtn = $('#signinBtn');
    const logoutBtn = $('#logout')

    signinBtn.on('click', function(event) {
        event.preventDefault();
        $.post('/api/users/login', {
            username: usernameField.val().trim(),
            password: passwordField.val().trim(),
        });
        window.location.href = '/homepage';
    });

});