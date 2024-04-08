// Récupérez les éléments DOM nécessaires
const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("mySearch");
const messageElement = document.getElementById("message");

// Cachez le formulaire de recherche initialement
searchForm.style.display = "none";

// Ajoutez un gestionnaire d'événement de clic à l'icône de recherche
searchIcon.addEventListener("click", function () {
  // Affichez le formulaire de recherche
  searchForm.style.display = "block";
  // Définissez le focus sur le champ de recherche
  searchInput.focus();
});

// Ajoutez un gestionnaire d'événement de saisie au champ de recherche
searchInput.addEventListener("input", function () {
  // Obtenez la valeur saisie par l'utilisateur
  var searchValue = searchInput.value.trim().toLowerCase();

  // Obtenez tous les liens de la barre de navigation
  var navLinks = document.querySelectorAll("ul li a");

  // Variable pour vérifier si un lien correspond à la valeur saisie
  var linkFound = false;

  // Parcourez les liens et filtrez-les en fonction de la valeur saisie
  for (var i = 0; i < navLinks.length; i++) {
    var linkText = navLinks[i].textContent.trim().toLowerCase();

    // Vérifiez si le texte du lien contient la valeur saisie
    if (linkText.includes(searchValue)) {
      // Rendre le lien visible
      navLinks[i].style.display = "block";
      linkFound = true;
    } else {
      // Cacher le lien
      navLinks[i].style.display = "none";
    }
  }

  // Affichez un message si aucun lien ne correspond à la valeur saisie
  if (!linkFound) {
    messageElement.textContent = "Aucun résultat trouvé.";
    messageElement.style.color = "red"; // Définir la couleur du texte en rouge
    messageElement.style.backgroundColor = "white"; // Définir le fond en blanc
  } else {
    messageElement.textContent = ""; // Réinitialisez le message si un lien correspond à la valeur saisie
  }
});


