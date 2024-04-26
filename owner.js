document.addEventListener('DOMContentLoaded', function () {
    const listPropertyBtn = document.getElementById('listProperty');
    const listPropertyRentBtn = document.getElementById('listPropertyRent');
    const modifyWorkspaceBtn = document.getElementById('modifyWorkspace');
    const modifyPropertyBtn = document.getElementById('modifyProperty');
    const delistPropertyBtn = document.getElementById('delistProperty');
    const delistWorkspaceBtn = document.getElementById('delistWorkspace');
    const listWorkspacesBtn = document.getElementById('listWorkspaces');
    const listPropertiesBtn = document.getElementById('listProperties');
    
    listPropertyBtn.addEventListener('click', function () {
        window.location.href = 'listPropert.html'; 
    });

    listPropertyRentBtn.addEventListener('click', function () {
        window.location.href = 'listPRent.html'; 
    });
    modifyWorkspaceBtn.addEventListener('click', function () {
        window.location.href = 'modifyWorkspace.html'; 
    });
    modifyPropertyBtn.addEventListener('click', function () {
        window.location.href = 'modifyProperty.html'; 
    });
    delistPropertyBtn.addEventListener('click', function () {
        window.location.href = 'delistProperty.html'; 
    });
    delistWorkspaceBtn.addEventListener('click', function () {
        window.location.href ='delistWorkspace.html'; 
    });
    listWorkspacesBtn.addEventListener('click', function () {
        window.location.href = 'workspace.html'; 
    });
    listPropertiesBtn.addEventListener('click', function () {
        window.location.href = 'properties.html'; 
    });
    
    

});