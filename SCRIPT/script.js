function openNav() {
  var sideNav = document.querySelector(".sidenav");
  var mainContent = document.getElementById("main");
  var screenWidth = window.innerWidth;
  
  if (screenWidth <= 768) {
      sideNav.style.width = "100%";
      mainContent.style.marginLeft = "100%";
  } else {
      sideNav.style.width = "250px";
      mainContent.style.marginLeft = "250px";
  }
}
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Obtenez tous les liens de la barre de navigation
var navLinks = document.querySelectorAll("ul li a");

// Obtenez toutes les sections principales
var mainSections = document.querySelectorAll("#main section");

// Masquez toutes les sections principales par défaut
mainSections.forEach(function(section) {
  section.style.display = "none";
});

// Parcourez les liens et ajoutez un gestionnaire d'événement de clic à chacun
navLinks.forEach(function(link, index) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // Masquez toutes les sections principales
    mainSections.forEach(function(section) {
      section.style.display = "none";
    });

    // Obtenez l'ID de la section cible à partir de l'ancre dans le lien
    var targetId = link.getAttribute("href").substring(1);

    // Affichez uniquement la section cible
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
});
