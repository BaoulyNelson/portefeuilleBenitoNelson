
function toggleMenu() {
    var menuIcon = document.getElementById('menu-icon');
    menuIcon.classList.toggle('active');
    
    // Autres actions à effectuer lorsque le menu est ouvert ou fermé
    // Par exemple, ouvrir ou fermer le menu lui-même
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Ajouter un gestionnaire d'événement pour écouter les clics sur les liens de navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement de lien par défaut
        
        var targetId = this.getAttribute('href').substring(1); // Obtenir l'ID de la section cible
        
        // Masquer toutes les sections sauf la section cible
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active'); // Retirer la classe 'active' de toutes les sections
        });
        document.getElementById(targetId).classList.add('active'); // Ajouter la classe 'active' à la section cible
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.getElementById("searchIcon");
    var searchForm = document.getElementById("searchForm");
    var searchInput = searchForm.querySelector("input");
    var searchButton = searchForm.querySelector("button");

    // Au clic sur l'icône de recherche
    searchIcon.addEventListener("click", function() {
        // Masquer l'icône de recherche
        searchIcon.style.display = "none";
        // Afficher le champ de recherche
        searchInput.style.display = "block";
        // Afficher le bouton de recherche
        searchButton.style.display = "inline";
        // Focus sur le champ de recherche
        searchInput.focus();
    });

    // Au clic sur l'icône de suppression (effacer)
    document.getElementById("clearIcon").addEventListener("click", function() {
        // Réinitialiser le formulaire
        searchForm.reset();
        // Masquer le champ de recherche
        searchInput.style.display = "none";
        // Masquer le bouton de recherche
        searchButton.style.display = "none";
        // Afficher à nouveau l'icône de recherche
        searchIcon.style.display = "inline";
    });
});

function updateCharCount() {
    var textarea = document.getElementById('message');
    var charCountElement = document.getElementById('charCount');
    var currentLength = textarea.value.length;
    var maxLength = textarea.maxLength;

    charCountElement.textContent = currentLength + '/' + maxLength;
}

