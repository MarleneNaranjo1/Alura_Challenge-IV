//Haz tú validación en javascript acá
// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor ingrese un email válido');
        return;
    }

    alert('Formulario enviado correctamente');
    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
