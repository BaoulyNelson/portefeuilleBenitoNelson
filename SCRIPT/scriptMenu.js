function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuLinks = document.querySelector('.menu-links');

    if (menuIcon.classList.contains('active')) {
        // Si le menu est actif (croix affichée), réinitialiser l'apparence du menu
        menuIcon.classList.remove('active');
        menuLinks.style.display = 'none';
        // Cacher le contenu spécifique lorsque le menu est réinitialisé
        document.getElementById('content-container').innerHTML = '';
    } else {
        // Si le menu n'est pas actif, montrer le menu avec la croix
        menuIcon.classList.add('active');
        menuLinks.style.display = 'flex';
    }
}

function showContent(content) {
    console.log('showContent called with content:', content);
    var contentContainer = document.getElementById('content-container');
    
    // Effacer le contenu existant
    contentContainer.innerHTML = '';


// Réinitialiser l'apparence du menu après avoir choisi un lien
toggleMenu();
}