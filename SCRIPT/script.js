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
}

function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    var menuIcon = document.getElementById("menu");

    if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "block";
        menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Changer à l'icône de la croix
    } else {
        menuList.style.display = "none";
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Revenir à l'icône du menu
    }
}

