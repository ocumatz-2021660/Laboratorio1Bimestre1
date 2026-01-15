let tareas = JSON.parse(localStorage.getItem('mis_tareas')) || [];
 
function renderizarTareas() {
    const cuerpoTabla = document.getElementById('lista-tareas');
    cuerpoTabla.innerHTML = '';
 
    tareas.sort((a, b) => a.prioridad - b.prioridad);
 
    tareas.forEach((tarea, index) => {
        let clasePrioridad = tarea.prioridad == 1 ? 'prioridad-alta' : (tarea.prioridad == 2 ? 'prioridad-media' : 'prioridad-baja');
        let textoPrioridad = tarea.prioridad == 1 ? 'Alta' : (tarea.prioridad == 2 ? 'Media' : 'Baja');
 
        cuerpoTabla.innerHTML += `
            <tr class="fila-contacto">
                <td class="${clasePrioridad}">${textoPrioridad}</td>
                <td>${tarea.texto}</td>
                <td class="opciones">
                    <button class="btn-detalles" onclick="prepararEdicion(${index})">Editar</button>
                    <button class="btn-detalles" style="border-color: #f54949; color: #f54949" onclick="eliminarTarea(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
   
    localStorage.setItem('mis_tareas', JSON.stringify(tareas));
}
 
function guardarTarea() {
    const texto = document.getElementById('nueva-tarea').value;
    const prioridad = document.getElementById('prioridad-tarea').value;
    const indice = document.getElementById('indice-tarea').value;
 
    if (texto === "") return alert("Escribe una tarea");
 
    if (indice === "-1") {
        // CREAR
        tareas.push({ texto, prioridad: parseInt(prioridad) });
    } else {
        // EDITAR
        tareas[indice] = { texto, prioridad: parseInt(prioridad) };
        document.getElementById('indice-tarea').value = "-1";
        document.getElementById('btn-accion').innerText = "Agregar";
    }
 
    document.getElementById('nueva-tarea').value = '';
    renderizarTareas();
}
 
