document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('side-panel').style.left = '0';
    document.body.classList.add('no-scroll');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('side-panel').style.left = '-250px';
    document.body.classList.remove('no-scroll');
});
