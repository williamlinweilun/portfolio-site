const button = document.getElementById('menu-toggle');
const links = document.querySelector('.menu-items');
const menuLinks = document.querySelectorAll('.menu-items li'); 

// MENU TOGGLE ON
button.addEventListener('click', function(event) {
    links.classList.toggle('toggled');
    event.stopPropagation(); 
});

// CLOSE MENU WHEN CLICKING ON LINK
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        links.classList.remove('toggled'); 
    });
});

// CLOSE MENU WHEN CLICKING OUTSIDE OF MENU
document.addEventListener('click', function(event) {
    if (!links.contains(event.target) && !button.contains(event.target)) { 
        links.classList.remove('toggled'); // Corrected variable reference
    }
});