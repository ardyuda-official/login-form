document.querySelector('.login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill out both fields.');
        event.preventDefault();
    } else {
        // Optionally, add more validation or handle the login process
        console.log('Form Submitted');
    }
});