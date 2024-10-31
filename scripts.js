// Seleccionamos los botones y las cards
const agregarBtn = document.querySelector("button:nth-child(1)");
const reservarBtn = document.querySelector("button:nth-child(2)");
const eliminarBtn = document.querySelector("button:nth-child(3)");
const cards = document.querySelectorAll(".card");

// Variable para controlar la acción seleccionada
let accionSeleccionada = null;

// Función para manejar la selección de acción
function seleccionarAccion(accion) {
    accionSeleccionada = accion;

    // Resaltar el botón seleccionado
    agregarBtn.classList.toggle("selected", accion === "agregar");
    reservarBtn.classList.toggle("selected", accion === "reservar");
    eliminarBtn.classList.toggle("selected", accion === "eliminar");
}

// Asignar eventos a los botones
agregarBtn.addEventListener("click", () => seleccionarAccion("agregar"));
reservarBtn.addEventListener("click", () => seleccionarAccion("reservar"));
eliminarBtn.addEventListener("click", () => seleccionarAccion("eliminar"));

// Función para manejar el estado de una card
async function cambiarEstado(card) {
    const estadoActual = card.classList;
    const numeroEspacio = card.dataset.numero;
    const nombreElemento = card.querySelector('.nombre');
    const matriculaElemento = card.querySelector('.matricula');
    const horaElemento = card.querySelector('.hora');
    const fechaElemento = card.querySelector('.fecha');

    if (accionSeleccionada === "agregar") {
        if (!estadoActual.contains("occupied") && !estadoActual.contains("reserved")) {
            // Cargar datos desde el JSON
            const datos = await cargarDatos();
            const { nombre, matricula } = datos;
            
            card.classList.add("occupied");
            card.classList.remove("reserved");
            card.querySelector('.card-text').textContent = `Espacio ${numeroEspacio} - Ocupado`;
            nombreElemento.textContent = `Nombre - ${nombre}`;
            matriculaElemento.textContent = `Matrícula - ${matricula}`;

            const ahora = new Date();
            const horaActual = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const fechaActual = ahora.toLocaleDateString('es-ES'); // Formato DD/MM/YYYY
            horaElemento.textContent = `Hora - ${horaActual}`;
            fechaElemento.textContent = `Fecha - ${fechaActual}`;
        }
    } else if (accionSeleccionada === "reservar") {
        if (!estadoActual.contains("occupied") && !estadoActual.contains("reserved")) {
            // Cargar datos desde el JSON
            const datos = await cargarDatos();
            const { nombre, matricula } = datos;

            card.classList.add("reserved");
            card.classList.remove("occupied");
            card.querySelector('.card-text').textContent = `Espacio ${numeroEspacio} - Reservado`;
            nombreElemento.textContent = `Nombre - ${nombre}`;
            matriculaElemento.textContent = `Matrícula - ${matricula}`;

            // Actualizar la hora y la fecha al reservar
            const ahora = new Date();
            const horaActual = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const fechaActual = ahora.toLocaleDateString('es-ES'); // Formato DD/MM/YYYY
            horaElemento.textContent = `Hora - ${horaActual}`;
            fechaElemento.textContent = `Fecha - ${fechaActual}`;
        }
    } else if (accionSeleccionada === "eliminar") {
        if (estadoActual.contains("occupied") || estadoActual.contains("reserved")) {
            card.classList.remove("occupied", "reserved");
            card.querySelector('.card-text').textContent = `Espacio ${numeroEspacio} - Vacío`;
            nombreElemento.textContent = `Nombre - XXXXXXXX`;
            matriculaElemento.textContent = `Matrícula - XXXXXXXX`;
            horaElemento.textContent = `Hora - XX:XX`;
            fechaElemento.textContent = `Fecha - XX/XX/XXXX`;
        }
    }

    // Desactivar la acción seleccionada después de cada operación
    desactivarAccion();
}

// Función para cargar datos desde el JSON
async function cargarDatos() {
    const response = await fetch('info.json');
    const datos = await response.json();
    return datos;
}

// Función para desactivar la acción seleccionada
function desactivarAccion() {
    accionSeleccionada = null;

    // Quitar el resalte de los botones
    agregarBtn.classList.remove("selected");
    reservarBtn.classList.remove("selected");
    eliminarBtn.classList.remove("selected");
}

// Agregar evento a cada card
cards.forEach((card, index) => {
    card.dataset.numero = index + 1; // Añadir número de espacio
    card.querySelector('.card-text').textContent = `Espacio ${index + 1} - Vacío`;
    card.addEventListener("click", () => cambiarEstado(card));
});
