document.addEventListener('DOMContentLoaded', async () => {
    try {
        const workspaceSelect = document.getElementById('property-type');

        // Fetch user's properties and populate the dropdown
        const response = await fetch('http://localhost:3000/user/workspaces');
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
        const properties = await response.json();

        properties.forEach(property => {
            const option = document.createElement('option');
            option.value = property._id; // Assuming property has an _id field
            option.textContent = property.address; // Display property address in dropdown
            workspaceSelect.appendChild(option);
        });

        // Handle form submission
        const form = document.getElementById('modify-workspace');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const workspaceId = workspaceSelect.value;
            const type = form.type.value; // Retrieve type from input field
            const individuals = form.individuals.value; // Retrieve individuals from input field
            const smoking = form.smoking.value; // Retrieve smoking value from radio button
            const availabilityDate = form.availabilityDate.value; // Retrieve availabilityDate from input field
            const leaseTerm = form.leaseTerm.value; // Retrieve leaseTerm from input field
            const price = form.price.value; // Retrieve price from input field

            // Send updated property data to the server
            const response = await fetch(`http://localhost:3000/property/${workspaceId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type, individuals, smoking, availabilityDate, leaseTerm, price }),
            });

            console.log('Response status:', response.status);
            const responseData = await response.json();
            console.log('Response data:', responseData);

            if (response.ok) {
                alert('Workspace updated successfully');
                // Redirect or perform any other action upon successful update
            } else {
                throw new Error('Failed to update workspace');
            }
        });

        // Handle button click
        const modifyButton = document.getElementById('modify');
        modifyButton.addEventListener('click', () => {
            form.dispatchEvent(new Event('submit')); // Dispatch a submit event to trigger form submission
        });
    } catch (error) {
        console.error('Error:', error.message);
        // Handle error, display error message to the user, etc.
    }
});
