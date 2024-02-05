const searchInput = document.querySelector('#searchForm input');
const menuLinks = document.querySelectorAll('#menu a');
const messageBox = document.getElementById('messageBox');

searchInput.addEventListener('input', filterMenuLinks);

function filterMenuLinks() {
    const searchTerm = searchInput.value.toLowerCase();
    let linksVisible = 0;

    menuLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        const linkVisible = linkText.includes(searchTerm);

        link.style.display = linkVisible ? 'block' : 'none';

        if (linkVisible) {
            linksVisible++;
        }
    });

    if (linksVisible === 0) {
        // Aucun lien correspondant trouvé, afficher un message
        showMessage("Aucun lien correspondant trouvé.");
    } else {
        // S'il y a des liens visibles, effacer le message
        showMessage("");
    }
}

function showMessage(message) {
    // Mettre à jour le contenu de la div avec l'id 'messageBox'
    messageBox.textContent = message;
    // Vous pouvez également utiliser innerHTML si le message contient du balisage HTML
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
