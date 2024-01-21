function toggleSearch() {
    var searchContainer = document.getElementById("search-container");
    var searchInput = document.getElementById("searchInput");

    if (searchContainer.style.display === "flex") {
        searchContainer.style.display = "none";
    } else {
        searchContainer.style.display = "flex";
        searchInput.focus();
    }
}

// Gérer l'événement "entrée" pour déclencher la recherche
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});function performSearch() {
    // Récupérer le terme de recherche
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Liste des liens disponibles avec leur URL
    var links = [
        { text: "Accueil", url: "index.html" },
        { text: "Famille", url: "famille.html" },
        { text: "Contact", url: "contact.html" }
        // Ajoutez d'autres liens au besoin
    ];

    // Filtrer les liens en fonction du terme de recherche
    var matchingLinks = links.filter(function(link) {
        return link.text.toLowerCase().includes(searchTerm);
    });

    // Mettre à jour la section d'affichage des résultats
    var searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = "";

    if (matchingLinks.length > 0) {
        matchingLinks.forEach(function(link) {
            // Créer des éléments HTML pour afficher les résultats
            var resultItem = document.createElement("div");
            resultItem.innerHTML = "<a href='" + link.url + "'>" + link.text + "</a>";
            searchResultsContainer.appendChild(resultItem);
        });
    } else {
        // Aucune correspondance trouvée
        searchResultsContainer.innerHTML = "<p>Aucun résultat trouvé pour : " + searchTerm + "</p>";
    }
}

