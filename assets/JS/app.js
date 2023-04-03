// Función para validar el formulario de inicio de sesión
function validarInicioSesion() {
    // Obtener los valores del formulario
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    // Validar que los campos no estén vacíos
    if (usuario == "" || password == "") {
        alert("Debe completar todos los campos.");
        return false;
    }

    // Validar que el usuario y la contraseña sean correctos
    // En este ejemplo, se compara con valores fijos
    if (usuario != "usuario" || password != "password") {
        alert("El usuario o la contraseña son incorrectos.");
        return false;
    }

    // Si todo es válido, se retorna true para enviar el formulario
    return true;
}

// Función para validar el formulario de restaurar contraseña
function validarRestaurarContraseña() {
    // Obtener el valor del campo de email
    var email = document.getElementById("email").value;

    // Validar que el campo no esté vacío
    if (email == "") {
        alert("Debe completar el campo de email.");
        return false;
    }

    // Enviar un mensaje de confirmación al usuario
    alert("Se ha enviado un email con instrucciones para restaurar su contraseña.");

    // Si todo es válido, se retorna true para enviar el formulario
    return true;
}

// Función para cerrar la sesión del usuario
function cerrarSesion() {
    // Realizar las acciones necesarias para cerrar la sesión
    // En este ejemplo, simplemente se redirige a la página de inicio de sesión
    window.location.href = "login.html";
}