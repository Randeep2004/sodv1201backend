document.addEventListener('DOMContentLoaded', async () => {
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
      availabilityDate.textContent = 'Availability Date: '+ new Date(workspace.availabilityDate).toLocaleDateString('en-US',  ({ year: 'numeric', month: 'short', day: 'numeric' }) );;
      const leaseTerm = document.createElement('p');
      leaseTerm.textContent = 'Lease Term (in Months): ' + workspace.leaseTerm;
      const price = document.createElement('p');
      price.textContent = 'Price: $' + workspace.price;
      // Add more details as needed

      // Append elements to card
      card.appendChild(title);
      card.appendChild(type);
      card.appendChild(individuals);
      card.appendChild(availabilityDate);
      card.appendChild(leaseTerm);
      card.appendChild(price);
      // Append card to container
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching workspaces:', error));
});