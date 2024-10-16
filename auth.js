// auth.js

function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Here you would typically validate the credentials with a server
    // For this example, we'll just check if email and password are not empty
    if (email && password) {
        // Store user info in localStorage (this is not secure, just for demo purposes)
        localStorage.setItem('user', JSON.stringify({ email }));
        
        // Show success message
        alert('Login successful!');
        
        // Redirect to index.html after a short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000); // 1 second delay
    } else {
        alert('Please enter both email and password');
    }
}

function signup(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Here you would typically send the signup info to a server
    // For this example, we'll just store it in localStorage
    localStorage.setItem('user', JSON.stringify({ email }));
    alert('Signup successful! Please log in.');
    // Add this line to redirect to login page after signup
    window.location.href = 'login.html';
}

// Add event listeners to forms
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