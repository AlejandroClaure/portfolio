document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = "Enviando...";

    emailjs.sendForm('service_1alec1', 'template_d7zgrey', this)
        .then(function() {
            statusMessage.textContent = "Mensaje enviado correctamente.";
            document.getElementById('contact-form').reset(); // Limpia los campos del formulario
        }, function(error) {
            statusMessage.textContent = "Error al enviar el mensaje: " + JSON.stringify(error);
        });
});
