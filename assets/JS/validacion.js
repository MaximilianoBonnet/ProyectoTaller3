const form = document.querySelector('.register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar el campo de nombre
    const nameValue = nameInput.value.trim();
    if (!/^[a-zA-Z\s]{1,120}$/.test(nameValue)) {
        alert('El nombre debe contener sólo letras mayúsculas o minúsculas y espacios, y no debe tener más de 120 caracteres.');
        nameInput.focus();
        return;
    }

    // Validar el campo de correo electrónico
    const emailValue = emailInput.value.trim();
    if (!/^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailValue)) {
        alert('El correo electrónico no tiene un formato válido.');
        emailInput.focus();
        return;
    }

    // Validar que las contraseñas coincidan
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue !== confirmPasswordValue) {
        alert('Las contraseñas no coinciden.');
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        passwordInput.focus();
        return;
    }

    // Si llegamos aquí, el formulario es válido y podemos enviar los datos
    alert('El formulario se ha enviado exitosamente.');
    form.submit();
});