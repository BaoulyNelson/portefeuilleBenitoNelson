// Fonction pour filtrer les liens en temps réel et rendre les liens cliquables
document.getElementById('searchInput').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase();
  var searchResults = document.getElementById('searchResults');
  var found = false;

  // Effacer les résultats précédents
  searchResults.innerHTML = '';

  // Parcourir les liens et vérifier s'ils contiennent le terme de recherche
  document.querySelectorAll('#side-panel a').forEach(function(link) {
    var linkText = link.textContent.toLowerCase();
    if (linkText.includes(searchTerm)) {
      found = true;
      var preview = document.createElement('div');
      var linkElement = document.createElement('a');
      linkElement.href = link.href; // Lien cliquable
      linkElement.textContent = linkText;
      preview.appendChild(linkElement);
      searchResults.appendChild(preview);
    }
  });

  // Afficher un message si aucun résultat n'a été trouvé
  if (!found) {
    var message = document.createElement('div');
    message.textContent = 'Aucun résultat trouvé.';
    searchResults.appendChild(message);
  }
});

// Fonction pour afficher la section correspondante lorsqu'un lien est cliqué
document.querySelectorAll('#side-panel a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    var sectionId = this.getAttribute('href').substring(1); // Obtenir l'identifiant de la section correspondante
    var sectionToShow = document.getElementById(sectionId); // Récupérer la section correspondante
    if (sectionToShow) {
      // Masquer toutes les sections et afficher uniquement la section correspondante
      document.querySelectorAll('section').forEach(function(section) {
        section.style.display = 'none';
      });
      sectionToShow.style.display = 'block';
    }
  });
});
