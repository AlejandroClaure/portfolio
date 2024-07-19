document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_1alec1'; // Sustituye "YOUR_SERVICE_ID" con tu Service ID de EmailJS
    const templateID = 'template_d7zgrey'; // Sustituye "YOUR_TEMPLATE_ID" con tu Template ID de EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensaje enviado exitosamente!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            console.error('FAILED...', error);
            alert('Error al enviar el mensaje, por favor intenta nuevamente.');
        });
});