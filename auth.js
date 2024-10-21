document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', signup);
    }
});

function login(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert('Login failed: ' + (data.error || 'Unknown error'));
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

function signup(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Signup successful! Please log in.');
            window.location.href = 'login.html';
        } else {
            alert('Signup failed: ' + (data.error || 'Unknown error'));
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}