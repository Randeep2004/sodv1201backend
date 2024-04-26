document.addEventListener('DOMContentLoaded', async () => {
    const propertySelect = document.getElementById('property-type');
  
    // Fetch user's properties and populate the dropdown
    const response = await fetch('http://localhost:3000/user/workspaces');
    const properties = await response.json();
  
    properties.forEach(property => {
      const option = document.createElement('option');
      option.value = property._id; // Assign the actual _id of the property
      option.textContent = property.address; // Display property address in dropdown
      propertySelect.appendChild(option);
    });
  
    // Handle form submission
    const form = document.getElementById('modify-property');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const propertyId = propertySelect.value; // Use the actual _id from the dropdown
      const address = form.address.value;
      const neighborhood = form.neighborhood.value;
      const squareFeet = form.squareFeet.value; // Get square feet value
      const parkingGarage = form.parkingGarage.checked; // Get parking garage checkbox value
      const publicTransportation = form.publicTransportation.checked; // Get public transportation checkbox value
      const availabilityDate = form.availabilityDate.value; // Get availability date value
      const leaseTerm = form.leaseTerm.value; // Get lease term value
      const price = form.price.value; // Get price value
    
      // Get other form field values as needed
  
      // Send updated property data to the server
      const response = await fetch(`http://localhost:3000/workspace/${propertyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  address, 
            neighborhood,
            squareFeet,
            parkingGarage,
            publicTransportation,
            availabilityDate,
            leaseTerm,
            price }),
      });
  
      if (response.ok) {
        alert('Property updated successfully');
        // Redirect or perform any other action upon successful update
      } else {
        alert('Error updating property');
      }
    });
});
