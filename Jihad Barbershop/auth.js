// auth.js

// Event listener for login form submission
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get the form data
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Simulate API call for login (using localStorage for demo purposes)
    loginUser(email, password);
});

// Event listener for signup link click
document.querySelector('.signup-link a').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link action
    window.location.href = 'signup.html'; // Redirect to signup page
});

// Function to simulate user login
function loginUser(email, password) {
    // Normally, you'd send a POST request to the backend here with the email and password
    // For demo, using localStorage (you'd validate with server-side logic in real life)

    // Check if user exists in localStorage (demo logic)
    const user = localStorage.getItem('user');

    if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.email === email && parsedUser.password === password) {
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to the dashboard or home page
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('User does not exist');
    }
}

// Function to simulate user signup
function signupUser(email, password) {
    // Normally, you'd send a POST request to the backend here to create a new user
    // For demo, using localStorage (you'd save the new user data to your server in real life)

    const newUser = { email: email, password: password };

    // Save new user to localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Signup successful! Please log in.');
    window.location.href = 'login.html'; // Redirect back to login page
}
// Event listener for signup form submission
document.querySelector('.signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get the form data
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    // Simulate API call for signup (using localStorage for demo purposes)
    signupUser(email, password);
});
