function toggleSearch() {
    var searchInput = document.getElementById("searchInput");
    if (searchInput.style.display === "none") {
        searchInput.style.display = "inline-block";
        searchInput.focus(); // Focus sur le champ de saisie lorsque visible
    } else {
        searchInput.style.display = "none";
    }
}