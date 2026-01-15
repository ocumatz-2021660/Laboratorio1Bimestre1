
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-registro');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {

            const correo = document.getElementById('correo-usuario').value;
            const nombre = document.getElementById('nombre-usuario').value;

            localStorage.setItem('usuarioCorreo', correo);
            localStorage.setItem('usuarioNombre', nombre);

            window.location.href = "Contactos.html";
        });
    }
});