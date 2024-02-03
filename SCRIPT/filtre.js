const searchInput = document.getElementById('searchInput');
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
