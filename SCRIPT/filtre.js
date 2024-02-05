const searchInput = document.querySelector('#searchForm input');
const menuLinks = document.querySelectorAll('#menu a');

searchInput.addEventListener('input', filterMenuLinks);

function filterMenuLinks() {
    const searchTerm = searchInput.value.toLowerCase();

    menuLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        const linkVisible = linkText.includes(searchTerm);

        link.closest('li').style.display = linkVisible ? 'block' : 'none';
    });
}

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
