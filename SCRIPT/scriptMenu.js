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

// Ajouter un gestionnaire d'événements clic aux liens dans le panneau latéral
document.querySelectorAll('#side-panel a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut de l'ancre
        event.preventDefault();
        // Obtenir l'identifiant de la section à afficher à partir de l'attribut href
        var sectionId = this.getAttribute('href').substring(1);
        // Afficher la section correspondante
        showSection(sectionId);
    });
});
