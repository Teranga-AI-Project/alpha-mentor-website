/* Sélectionne le bouton de bascule du menu mobile */
const mobileToggle = document.getElementById('mobileToggle');
/* Sélectionne le menu mobile */
const mobileMenu = document.getElementById('mobileMenu');

/* Gère le basculement du menu mobile */
mobileToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');

    /* Changer l'icône du toggle lors de l'ouverture/fermeture du menu */
    if (mobileMenu.classList.contains('active')) {
        mobileToggle.textContent = '✕';
        mobileToggle.setAttribute('aria-expanded', 'true');
    } else {
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
});

/* Fermer le menu mobile lors du clic sur un lien du menu */
document.querySelectorAll('.nav__mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    });
});

/* Fermer le menu mobile lors du clic à l'extérieur */
document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav');

    /* Vérifier si le clic est à l'extérieur de toute la navigation */
    if (!nav.contains(event.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
});

/* Fermer le menu mobile lors du redimensionnement de la fenêtre */
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
});

/* Gestion du clavier pour l'accessibilité */
mobileToggle.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        mobileToggle.click();
    }
});

/* Fermer le menu avec la touche Escape */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus(); /* Remettre le focus sur le bouton */
    }
});

/* Sélectionne l'élément pour afficher l'année */
const yearElement = document.getElementById('current-year');

/* Récupère l'année actuelle */
const currentYear = new Date().getFullYear();

/* Insère l'année dans l'élément */
yearElement.textContent = currentYear;