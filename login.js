document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent form submission

        // Get the email, password, and role values from the form
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const role = document.getElementById('login-role').value;

        try {
            // Make a POST request to your backend API endpoint for login
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, role })
            });

            // Check if the response is successful
             if (response.status === 401) {
                // Email or password is incorrect, display error message
                errorMessage.textContent = 'Invalid credentials. Please check again.';
             }
             else if(response.status === 500){
                errorMessage.textContent = 'password is not matching';
             }
          
        } catch (error) {
            console.error('Error logging in:', error);
            // Display an error message to the user
            errorMessage.textContent = 'An error occurred while logging in. Please try again later.';
        }
    });
});
