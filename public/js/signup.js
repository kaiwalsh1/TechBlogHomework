$(document).ready(function() {
    const signupBtn = $('#signupBtn');
    const emailField = $('#emailField');
    const usernameField = $('#usernameField');
    const passwordField = $('#passwordField');
    

    // Ajax Request
    signupBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/users/signUp', {
            email: emailField.val(),
            username: usernameField.val(),
            password: passwordField.val(),
        });  
        window.location.href = '/login'; 
    });
});