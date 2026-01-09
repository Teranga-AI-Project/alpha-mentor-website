document.addEventListener('DOMContentLoaded', function () {

    // 🔹 Initialisation EmailJS (Public Key)
    emailjs.init('NKyrhz9ZgssgTJzVX');

    // 🔹 Récupération des éléments
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('formModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeBtn = document.querySelector('#formModal .close');

    // 🔹 Soumission du formulaire
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // 🔹 Valeurs des champs
        const name = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone_number').value.trim();
        const sujet = document.getElementById('sujet').value.trim();
        const message = document.getElementById('message').value.trim();

        // 🔹 Validation simple
        if (!name || !email || !phone || !sujet || !message) {
            modalMessage.textContent = 'Veuillez remplir tous les champs !';
            modalMessage.className = 'error';
            modal.style.display = 'flex';
            return;
        }

        // 🔹 Paramètres envoyés à EmailJS
        const params = {
            name: name,
            email: email,
            phone: phone,
            sujet: sujet,
            message: message,
            time: new Date().toLocaleString('fr-FR'),
            to_email: 'contact@alpha-mentor.net'
        };

        // 🔹 Envoi EmailJS
        emailjs.send('service_ynowyuc', 'template_lpz2j0a', params)
            .then(function () {
                modalMessage.textContent = 'Message envoyé avec succès !';
                modalMessage.className = 'success';
                form.reset();
                modal.style.display = 'flex';
            })
            .catch(function (error) {
                modalMessage.textContent = "Erreur lors de l'envoi. Veuillez réessayer.";
                modalMessage.className = 'error';
                modal.style.display = 'flex';
                console.error('EmailJS error:', error);
            });
    });

    // 🔹 Fermer le modal (croix)
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // 🔹 Fermer le modal (clic extérieur)
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});

