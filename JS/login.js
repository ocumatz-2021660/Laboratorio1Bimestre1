
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-registro');
    const btnRegistro = document.querySelector('.btn-registro');
    const logo = document.querySelector('.contenedor-logo');
    const registro = document.querySelector('.contenedor-registro');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {

            const correo = document.getElementById('correo-usuario').value;
            const nombre = document.getElementById('nombre-usuario').value;

            localStorage.setItem('usuarioCorreo', correo);
            localStorage.setItem('usuarioNombre', nombre);

            window.location.href = "Contactos.html";
        });
    }
        if (btnRegistro) {
        btnRegistro.addEventListener('click', function() {
            logo.classList.add('animar-logo');
            registro.classList.add('animar-registro');
            
                btnRegistro.classList.replace ('btn-registro','btn-desactivado'); 

        });
    }
});