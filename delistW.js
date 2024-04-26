document.addEventListener('DOMContentLoaded', () => {
    const delistForm = document.getElementById('delist-form');
    const propertyTypeSelect = document.getElementById('property-type');

  
    // Fetch user's properties and populate the select options
    fetch('http://localhost:3000/user/workspaces')
      .then(response => response.json())
      .then(properties => {
        properties.forEach(property => {
          const option = document.createElement('option');
          option.value = property._id; // Assuming property._id is the unique identifier for properties
          option.textContent = property.address; // Display property address in the select option
          propertyTypeSelect.appendChild(option);
        });
      })
      .catch(error => console.error('Error fetching user properties:', error));
  
    // Handle form submission
    delistForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const workspaceId = document.getElementById('property-type').value;
    
        try {
          const response = await fetch(` http://localhost:3000/dworkspace/${workspaceId}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            const message = await response.text();
            const container = document.getElementById('container');
            container.innerHTML = `<p>${message}</p>`;
          } else {
            const errorMessage = await response.text();
            console.error('Error:', errorMessage);
          }
        } catch (error) {
          console.error('Error deleting workspace:', error);
        }
      });
  });
  