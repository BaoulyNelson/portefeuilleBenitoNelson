// Fonction pour ouvrir le panneau de navigation
function openNav() {
    var sideNav = document.querySelector(".sidenav");
    var screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        sideNav.style.width = "100%";
    } else {
        sideNav.style.width = "50%";
    }
}

// Fonction pour fermer le panneau de navigation
function closeNav() {
    var sideNav = document.querySelector(".sidenav");
    sideNav.style.width = "0";
}

function toggleSearch() {
    var searchForm = document.getElementById("searchForm");
    var searchInput = document.getElementById("mySearch");
    if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "block";
        searchInput.focus(); // Place le curseur dans le champ de recherche
        openNav(); // Ouvre également le panneau de navigation lorsque le formulaire de recherche est affiché
    } else {
        searchForm.style.display = "none";
    }
}


    function filterLinks() {
        var input = document.getElementById("mySearch");
        var filter = input.value.toLowerCase();
        var ul = document.getElementById("navLinks");
        var li = ul.getElementsByTagName("li");
        var messageDiv = document.getElementById("searchResultMessage");

        var found = false; // Variable pour vérifier si des liens correspondent à la recherche

        for (var i = 0; i < li.length; i++) {
            var a = li[i].getElementsByTagName("a")[0];
            var txtValue = a.textContent || a.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                li[i].style.display = ""; // Affiche le lien s'il correspond à la recherche
                found = true;
            } else {
                li[i].style.display = "none"; // Masque le lien s'il ne correspond pas à la recherche
            }
        }

        // Affiche le message approprié en fonction des résultats de la recherche
        if (found) {
            messageDiv.innerText = ""; // Efface le message s'il y a des liens correspondants
        } else {
            messageDiv.innerText = "Aucun résultat trouvé pour \"" + filter + "\""; // Affiche un message si aucun lien ne correspond à la recherche
        }

        if (filter === "") {
            for (var i = 0; i < li.length; i++) {
                li[i].style.display = ""; // Affiche tous les liens lorsque le champ de recherche est vide
            }
            messageDiv.innerText = ""; // Efface le message s'il n'y a pas de recherche en cours
        }
    }

    // JavaScript pour afficher l'année courante
    document.getElementById("current-year").textContent = new Date().getFullYear();
    // Ajoutez ce code à votre fichier JavaScript ou dans une balise <script> dans votre HTML
    document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById('backToTopBtn');

        // Affiche ou masque la flèche en fonction du défilement
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        };

        // Fait défiler la page vers le haut lorsque la flèche est cliquée
        button.addEventListener('click', function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Obtenez tous les liens de la barre de navigation
        var navLinks = document.querySelectorAll(".sidenav a:not(.closebtn)");
    
        // Obtenez toutes les sections principales
        var mainSections = document.querySelectorAll("#main section");
    
        // Masquez toutes les sections principales sauf celle avec l'ID "accueil"
        mainSections.forEach(function(section) {
            if (section.id !== "accueil") {
                section.style.display = "none";
            }
        });
    
    

    // Parcourez les liens et ajoutez un gestionnaire d'événement de clic à chacun
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Masquez toutes les sections principales
            mainSections.forEach(function (section) {
                section.style.display = "none";
            });

            // Obtenez l'ID de la section cible à partir de l'ancre dans le lien
            var targetId = link.getAttribute("href").substring(1);

            // Affichez uniquement la section cible
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
            }

            // Fermez le panneau de navigation après avoir cliqué sur un lien
            closeNav();
        });
    });
});

    function updateWordCount() {
        var message = document.getElementById("message").value;
        var wordCount = message.trim().split(/\s+/).length;
        if (message.trim() === "") {
            document.getElementById("wordCount").textContent = "0/100 words";
        } else {
            document.getElementById("wordCount").textContent = wordCount + "/100 words";
        }
    }

    function validateForm() {
        var message = document.getElementById("message").value;
        var wordCount = message.trim().split(/\s+/).length;
        if (wordCount > 100) {
            alert("Please limit your message to 100 words.");
            return false;
        }
        return true;
    }
    const passwordInput = document.getElementById('password');
    const minLength = document.getElementById('minLength');
    const lowercase = document.getElementById('lowercase');
    const uppercase = document.getElementById('uppercase');
    const number = document.getElementById('number');
    const specialChar = document.getElementById('specialChar');

    const minLengthIcon = document.getElementById('minLengthIcon');
    const lowercaseIcon = document.getElementById('lowercaseIcon');
    const uppercaseIcon = document.getElementById('uppercaseIcon');
    const numberIcon = document.getElementById('numberIcon');
    const specialCharIcon = document.getElementById('specialCharIcon');

    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;

        minLength.style.display = password.length >= 8 ? 'none' : 'block';
        lowercase.style.display = /[a-z]/.test(password) ? 'none' : 'block';
        uppercase.style.display = /[A-Z]/.test(password) ? 'none' : 'block';
        number.style.display = /\d/.test(password) ? 'none' : 'block';
        specialChar.style.display = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'none' : 'block';

        minLengthIcon.classList.toggle('show', password.length >= 8);
        lowercaseIcon.classList.toggle('show', /[a-z]/.test(password));
        uppercaseIcon.classList.toggle('show', /[A-Z]/.test(password));
        numberIcon.classList.toggle('show', /\d/.test(password));
        specialCharIcon.classList.toggle('show', /[!@#$%^&*(),.?":{}|<>]/.test(password));
    });


    // Fonction pour obtenir la date actuelle au format "jour dd mois yyyy"
function getCurrentDate() {
    var now = new Date();
    
    var days = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
    var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    
    var day = days[now.getDay()];
    var date = now.getDate().toString().padStart(2, '0');
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    
    return day + ' ' + date + ' ' + month + ' ' + year;
}

// Mettre à jour la date actuelle
function updateDate() {
    var currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        currentDateElement.textContent = getCurrentDate();
    }
}

// Mettre à jour la date initiale
updateDate();
