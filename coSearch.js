document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchResultsDiv = document.getElementById('searchResults');
    const sortForm = document.getElementById('sortForm');
    const sortResultsDiv = document.getElementById('sortResults');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = document.getElementById('searchTerm').value;
        if(searchTerm=="address" || searchTerm== "neighborhood"){
        searchTerm = document.getElementById('searchTerm').value.trim().toLowerCase();
    };
        const searchBy = document.getElementById('searchBy').value;

        fetch(`http://localhost:3000/search?criteria=${searchBy}&term=${searchTerm}`)
            .then(response => response.json())
            .then(searchResults => {
                displaySearchResults(searchResults);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    function displaySearchResults(results) {
        searchResultsDiv.innerHTML = ''; // Clear previous results

        if (results.length > 0) {
            results.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('search-item'); // Add a class for styling
                resultDiv.innerHTML = `
                    <p><strong>Address:</strong> ${result.address}</p>
                    <p><strong>Availability Date:</strong> ${result.availabilityDate}</p>
                    <p><strong>Lease Term:</strong> ${result.leaseTerm}</p>
                    <p><strong>Price:</strong> ${result.price}</p>
                    <p><strong>Squarefeet:</strong> ${result.squareFeet}</p>
                `;
                searchResultsDiv.appendChild(resultDiv);
            });
        } else {
            searchResultsDiv.textContent = 'No results found.';
        }
    }
    sortForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const sortBy = document.getElementById('sortBy').value;

        fetch(`http://localhost:3000/sort?criteria=${sortBy}`)
            .then(response => response.json())
            .then(sortedResults => {
                displaySortedResults(sortedResults);
            })
            .catch(error => console.error('Error fetching sorted data:', error));
    });

    function displaySortedResults(sortedResults) {
        sortResultsDiv.innerHTML = ''; // Clear previous sorted results

        if (sortedResults.length > 0) {
            sortedResults.forEach(sortedResult => {
                const sortedResultDiv = document.createElement('div');
                sortedResultDiv.classList.add('sorted-item'); // Add a class for styling
                sortedResultDiv.innerHTML = `
                    <p><strong>Address:</strong> ${sortedResult.address}</p>
                    <p><strong>Availability Date:</strong> ${sortedResult.availabilityDate}</p>
                    <p><strong>Lease Term:</strong> ${sortedResult.leaseTerm}</p>
                    <p><strong>Price:</strong> ${sortedResult.price}</p>
                    <p><strong>Squarefeet:</strong> ${sortedResult.squareFeet}</p>
                `;
                sortResultsDiv.appendChild(sortedResultDiv);
            });
        } else {
            sortResultsDiv.textContent = 'No sorted results found.';
        }
    }
});
