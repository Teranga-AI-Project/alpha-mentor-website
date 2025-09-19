document.addEventListener('DOMContentLoaded', function () {
    // Initialisation d'EmailJS 
    emailjs.init('MpbTvarkPQ0JQqmrk');

    const form = document.getElementById('contactForm');
    const modal = document.getElementById('formModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeBtn = document.querySelector('.modal .close');

    // Gestion de la soumission du formulaire
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche la soumission par défaut

        // Récupération des valeurs des champs
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const phone_number = document.getElementById('phone_number').value;
        const sujet = document.getElementById('sujet').value;
        const message = document.getElementById('message').value;

        // Vérification des champs
        if (!nom || !email || !sujet || !message) {
            modalMessage.textContent = 'Veuillez remplir tous les champs !';
            modalMessage.classList.remove('success');
            modalMessage.classList.add('error');
            modal.style.display = 'flex';
            return;
        }

        // Paramètres pour EmailJS
        const params = {
            nom: nom,
            email: email,
            phone_number: phone_number,
            sujet: sujet,
            message: message,
            time: new Date().toLocaleString('fr-FR')
        };

        // Envoi de l'email
        emailjs.send('service_yowf74n', 'template_ildt7ev', params)
            .then(() => {
                modalMessage.textContent = 'Message envoyé avec succès !';
                modalMessage.classList.remove('error');
                modalMessage.classList.add('success');
                form.reset(); // Réinitialise le formulaire
                modal.style.display = 'flex';
            })
            .catch((error) => {
                modalMessage.textContent = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
                modalMessage.classList.remove('success');
                modalMessage.classList.add('error');
                modal.style.display = 'flex';
                console.error('Erreur EmailJS:', error);
            });
    });

    // Fermer le modal lors du clic sur la croix
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});