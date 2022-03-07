$(document).ready(function() {
    const signinBtn = $('#signinBtn');
    const logoutBtn = $('#logout')
    const usernameField2 = $('#usernameField2');
    const passwordField2 = $('#passwordField2');

    signinBtn.on('click', function(event) {
        event.preventDefault();
        $.post('/api/users/login', {
            username: usernameField2.val().trim(),
            password: passwordField2.val().trim(),
        });
        window.location.href = '/homepage';
    });

});