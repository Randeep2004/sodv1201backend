document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search');
    const workspacesButton = document.getElementById('workspaces');

    searchButton.addEventListener('click', function () {
       
        window.location.href = 'coworkrSearch.html';
    });

    workspacesButton.addEventListener('click', function () {
        
        window.location.href = 'colistwokspace.html';
    });
});