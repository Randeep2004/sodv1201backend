document.addEventListener('DOMContentLoaded', async () => {
    try {
      const token = localStorage.getItem('accessToken'); // Get the JWT token from localStorage
  
      // Fetch properties data from backend with JWT token included in headers
      const response = await fetch('http://localhost:3000/user/properties', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in Authorization header
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error fetching properties');
      }
  
      const properties = await response.json();
  
      const container = document.getElementById('container');
  
      // Loop through each property and create a card
      properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
  
        // Create elements for property details
        const title = document.createElement('h3');
        title.textContent = property.address;
        const neighborhood = document.createElement('p');
        neighborhood.textContent = 'Neighborhood: ' + property.neighborhood;
        const squareFeet = document.createElement('p');
        squareFeet.textContent = 'Square Feet: ' + property.squareFeet;
        const parkingGarage = document.createElement('p');
        parkingGarage.textContent = 'Public Transportation: ' + property.parkingGarage;
        const publicTransportation = document.createElement('p');
        publicTransportation.textContent = 'Public Transportation: ' + property.publicTransportation;
        const availabilityDate = document.createElement('p');
        availabilityDate.textContent = 'Availability Date: ' + new Date(property.availabilityDate).toLocaleDateString('en-US',  ({ year: 'numeric', month: 'short', day: 'numeric' }) );
        const leaseTerm = document.createElement('p');
        leaseTerm.textContent = 'Lease Term (in Months): ' + property.leaseTerm;
        const price = document.createElement('p');
        price.textContent = 'Price: $' + property.price;
        // Add more details as needed
  
        // Append elements to card
        card.appendChild(title);
        card.appendChild(neighborhood);
        card.appendChild(squareFeet);
        card.appendChild(parkingGarage);
        card.appendChild(publicTransportation);
        card.appendChild(availabilityDate);
        card.appendChild(leaseTerm);
        card.appendChild(price);
        // Append card to container
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  });
  