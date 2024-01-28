
function toggleMenu() {
    var menuIcon = document.getElementById("menu");

    // Ajoute ou supprime la classe "cross" pour styliser l'icône
    menuIcon.classList.toggle("cross");
  }
// Liste des pages
var pages = [
    "../accueil.html",    // Remplacez ".." par le chemin relatif correct
    "../contact.html",
    "../famille.html",
    "../index.html"
];

var currentPageIndex = 0; // Indice de la page actuelle

// Fonction pour aller à la page précédente
function pagePrecedente() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        console.log("Aller à la page précédente:", pages[currentPageIndex]);
        window.location.href = pages[currentPageIndex];
    } else {
        console.log("Impossible d'aller à la page précédente, déjà sur la première page.");
    }
}

// Fonction pour aller à la page suivante
function pageSuivante() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        console.log("Aller à la page suivante:", pages[currentPageIndex]);
        window.location.href = pages[currentPageIndex];
    } else {
        console.log("Impossible d'aller à la page suivante, déjà sur la dernière page.");
    }
}
