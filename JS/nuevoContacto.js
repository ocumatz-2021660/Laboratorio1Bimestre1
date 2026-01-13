function abrirNuevoContacto() {
    document.getElementById("pestaña-emergente").style.display = "flex";
}

function cerrarNuevoContacto() {
    document.getElementById("pestaña-emergente").style.display = "none";
}

function abrirDetalleContacto() {
    const ventanaEmergente = parent.document.getElementById("pestana-detalle");

    if (ventanaEmergente) {
        ventanaEmergente.style.display = "flex";
    }
}

function cerrarDetalleContacto() {
    document.getElementById("pestana-detalle").style.display = "none";
}