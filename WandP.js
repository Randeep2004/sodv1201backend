document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch properties data from backend without authentication
        const response = await fetch('http://localhost:3000/user/properties', {
            method: 'GET',
            headers: {
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
            parkingGarage.textContent = 'Parking Garage: ' + property.parkingGarage;
            const publicTransportation = document.createElement('p');
            publicTransportation.textContent = 'Public Transportation: ' + property.publicTransportation;
            const availabilityDate = document.createElement('p');
            availabilityDate.textContent = 'Availability Date: ' + new Date(property.availabilityDate).toLocaleDateString('en-US', ({ year: 'numeric', month: 'short', day: 'numeric' }));
            const leaseTerm = document.createElement('p');
            leaseTerm.textContent = 'Lease Term (in Months): ' + property.leaseTerm;
            const price = document.createElement('p');
            price.textContent = 'Price: $' + property.price;
            // Add more details as needed
            const div = document.createElement('div');
            // Create a contact button
            const contactButton = document.createElement('button');
            contactButton.textContent = 'Contact Owner';
            contactButton.addEventListener('click', () => {
                // Display the phone number of the owner
                
            div.innerText='Phone Number: ' + property.owner;
            });

            // Append elements to card
            card.appendChild(title);
            card.appendChild(neighborhood);
            card.appendChild(squareFeet);
            card.appendChild(parkingGarage);
            card.appendChild(publicTransportation);
            card.appendChild(availabilityDate);
            card.appendChild(leaseTerm);
            card.appendChild(price);
            card.appendChild(contactButton); // Append contact button to card
            card.appendChild(div);
            // Append card to container
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching properties:', error);
    }

    // Fetch workspaces data from backend
    fetch('http://localhost:3000/user/workspaces')
        .then(response => response.json())
        .then(workspaces => {
            const container = document.getElementById('container');

            // Loop through each workspace and create a card
            workspaces.forEach(workspace => {
                const card = document.createElement('div');
                card.classList.add('workspace-card');

                // Create elements for workspace details
                const title = document.createElement('h3');
                title.textContent = workspace.address;
                const type = document.createElement('p');
                type.textContent = 'Type: ' + workspace.type;
                const individuals = document.createElement('p');
                individuals.textContent = 'Individuals: ' + workspace.individuals;
                const availabilityDate = document.createElement('p');
                availabilityDate.textContent = 'Availability Date: ' + new Date(workspace.availabilityDate).toLocaleDateString('en-US', ({ year: 'numeric', month: 'short', day: 'numeric' }));
                const leaseTerm = document.createElement('p');
                leaseTerm.textContent = 'Lease Term (in Months): ' + workspace.leaseTerm;
                const price = document.createElement('p');
                price.textContent = 'Price: $' + workspace.price;
                // Add more details as needed
                const div=document.createElement('div');
                // Create a contact button
                const contactButton = document.createElement('button');
                contactButton.textContent = 'Contact Owner';
                contactButton.addEventListener('click', () => {
                    // Display the phone number of the owner
                    
                    div.innerText='Phone Number: ' + workspace.owner;
                });

                // Append elements to card
                card.appendChild(title);
                card.appendChild(type);
                card.appendChild(individuals);
                card.appendChild(availabilityDate);
                card.appendChild(leaseTerm);
                card.appendChild(price);
                card.appendChild(contactButton); // Append contact button to card
                card.appendChild(div);
                // Append card to container
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching workspaces:', error));
});
