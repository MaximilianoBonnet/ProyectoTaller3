// obtiene los elementos del DOM
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

// agrega un evento de escucha al formulario de inicio de sesión
form.addEventListener('submit', e => {
    e.preventDefault(); // evita el comportamiento predeterminado del formulario

    // obtiene los valores de los campos de entrada
    const email = emailInput.value;
    const password = passwordInput.value;

    // envía la solicitud de inicio de sesión al servidor
    fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de inicio de sesión');
            }
            // redirige al usuario al dashboard
            window.location.href = '/dashboard';
        })
        .catch(error => {
            console.error(error);
            // muestra un mensaje de error al usuario
            alert('Error de inicio de sesión. Inténtalo de nuevo.');
        });
});