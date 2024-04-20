document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('.signup-form');
    const errorMessage = document.getElementById('error-message'); // Error message container

    signupForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const role = document.getElementById('role').value;

        // Create user object
        const user = {
            username: username,
            email: email,
            password: password,
            phone: phone,
            role: role
        };

        try {
            // Send a POST request to your backend endpoint
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

             // Change '/success' to your actual success page URL
         if (response.status === 400) {
                // Email already exists, display error message
                errorMessage.textContent = 'Email already exists';
            } else {
                // Other errors, display generic message
                errorMessage.textContent = 'Registration failed. Please try again later.';
            }
        } catch (err) {
            // Network or server error
            console.error('Error:', err);
            errorMessage.textContent = 'Registration failed. Please check your network connection.';
        }
    });
});
