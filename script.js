document.getElementById('searchIcon').addEventListener('click', function () {
    document.getElementById('searchBar').focus();
});

document.getElementById('searchBar').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        // Ici, vous pouvez ajouter la logique de recherche
        alert('Recherche en cours : ' + this.value);
    }
});
