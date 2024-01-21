function toggleSearch() {
    var searchContainer = document.getElementById("search-container");
    var searchInput = document.getElementById("search-input");

    if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
        searchContainer.style.display = "flex";
        searchInput.focus(); // Met le focus sur la zone de recherche quand elle est affichée
    } else {
        searchContainer.style.display = "none";
        searchInput.value = ""; // Réinitialise la valeur de la zone de recherche lorsque vous la masquez
    }
}// Assurez-vous que la petite croix est cachée initialement
document.getElementById('clearMenuButton').classList.add('hidden');

function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    var menuIcon = document.getElementById("menu");
    var clearMenuButton = document.getElementById('clearMenuButton');

    if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "block";
        menuIcon.classList.add('hidden'); // Cacher l'icône du menu

        // Afficher la petite croix
        clearMenuButton.classList.remove('hidden');
    } else {
        menuList.style.display = "none";
        menuIcon.classList.remove('hidden'); // Afficher l'icône du menu

        // Cacher la petite croix
        clearMenuButton.classList.add('hidden');
    }
}

function clearMenu() {
    // Ajoutez la logique pour effacer le menu ici
    var menuList = document.getElementById("menu-list");
    menuList.innerHTML = ""; // Efface la liste des liens

    // Rétablir l'état initial du bouton de menu
    toggleMenu();
}
