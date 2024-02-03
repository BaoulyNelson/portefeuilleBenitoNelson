// Fonction pour afficher la section correspondante et masquer les autres
function showSection(sectionId) {
    // Cacher toutes les sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Afficher la section correspondante
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
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
// Récupérer les éléments DOM
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const clearIcon = document.getElementById('clearIcon');

// Ajouter des écouteurs d'événements
searchIcon.addEventListener('click', showSearchInput);
clearIcon.addEventListener('click', clearSearch);
searchInput.addEventListener('input', updateClearIconVisibility);

// Fonction pour afficher la barre de recherche
function showSearchInput() {
    searchInput.style.display = 'block';
    searchIcon.style.display = 'none';
    clearIcon.style.display = 'block';
}

// Fonction pour effacer la recherche
function clearSearch() {
    searchInput.value = '';
    searchInput.style.display = 'none';
    searchIcon.style.display = 'block';
    clearIcon.style.display = 'none';
}

// Fonction pour mettre à jour la visibilité de l'icône de suppression
function updateClearIconVisibility() {
    if (searchInput.value.trim() !== '') {
        clearIcon.style.display = 'block';
    } else {
        clearIcon.style.display = 'none';
    }
}


