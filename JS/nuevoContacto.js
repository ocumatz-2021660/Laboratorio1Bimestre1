/*Guardar Usuario/ */

function cargarDatosPerfil() {
    const nombre = localStorage.getItem('usuarioNombre');
    const correo = localStorage.getItem('usuarioCorreo');

    if (nombre && correo) {
            document.getElementById('nombreUsuarioMenu').innerText = nombre;
            document.getElementById('correoUsuarioMenu').innerText = correo;        
    }    
}

function MenuUsuario() {
    const menu = document.getElementById('menu-usuario');
    if (menu) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
}

function cerrarSesion() {
    localStorage.clear();
    window.location.href = "../HTML/index.html"; 
}

cargarDatosPerfil();


/*Nuevo contactos*/ 
function abrirNuevoContacto() {
    document.getElementById("pestaña-emergente").style.display = "flex";
}

function cerrarNuevoContacto() {
    document.getElementById("pestaña-emergente").style.display = "none";
}

/*Detalles contacto*/ 
function abrirDetalleContacto() {
    const ventanaEmergente = parent.document.getElementById("pestana-detalle");

    if (ventanaEmergente) {
        ventanaEmergente.style.display = "flex";
    }
}

function cerrarDetalleContacto() {
    document.getElementById("pestana-detalle").style.display = "none";
}

/* Favoritos */

function filtrarFavoritos() {
    const filas = document.querySelectorAll('.fila-contacto');

    filas.forEach(fila => {
        const checkbox = fila.querySelector('input[type="checkbox"]');
        
        if (checkbox.checked) {
            fila.style.display = ""; 
        } else {
            fila.style.display = "none"; 
        }
    });
}

function mostrarSoloFavoritos() {
    const iframe = document.querySelector('.vista-frame');
    if (iframe && iframe.contentWindow.filtrarFavoritos) {
        iframe.contentWindow.filtrarFavoritos();
    }
}

function mostrarTodosLosContactos() {
    const filas = document.querySelectorAll('.fila-contacto');

    filas.forEach(fila => {
        fila.style.display = ""; 
    });
}

function verInicio() {
    const iframe = document.querySelector('.vista-frame');

    if (iframe && iframe.contentWindow.mostrarTodosLosContactos) {
        iframe.contentWindow.mostrarTodosLosContactos();
    }
}
function mostrarTodoList(){
    window.location.href = "../HTML/TodoList.html"; 
}