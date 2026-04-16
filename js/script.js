// OCULTAR Y MOSTRAR CATEGORÍAS
    function mostrarCategoria(categoria) {

    const secciones = document.querySelectorAll(".categoria");

    secciones.forEach(sec => {
        sec.classList.remove("activa");
        sec.style.display = "none";
    });

    const activa = document.getElementById(categoria);

    activa.style.display = "block";

    setTimeout(() => {
        activa.classList.add("activa");
    }, 50);
}

function volverCatalogo() {

    const secciones = document.querySelectorAll(".categoria");

    secciones.forEach(sec => {
        sec.classList.remove("activa");
        sec.style.display = "none";
    });
}

window.addEventListener("scroll", function () {

    const categorias = document.querySelectorAll(".card-categoria");

    categorias.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            card.classList.add("visible");
        }
    });

});

function enviarCita() {

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const fecha = document.getElementById("fecha").value;
    const detalles = document.getElementById("detalles").value;
    const servicio = document.getElementById("servicioSeleccionado")?.innerText || "General";

    if (!nombre || !telefono || !fecha) {
        alert("🇩‌🇪‌🇧‌🇪‌🇸‌ 🇷‌🇪‌🇱‌🇱‌🇪‌🇳‌🇦‌🇷‌ 🇱‌🇴‌🇸‌ 🇨‌🇦‌🇲‌🇵‌🇴‌🇸‌ 🇷‌🇪‌🇶‌🇺‌🇪‌🇷‌🇮‌🇩‌🇴‌🇸‌ 🇵‌🇦‌🇷‌🇦‌ 🇦‌🇬‌🇪‌🇳‌🇩‌🇦‌🇷‌ 🇹‌🇺‌ 🇨‌🇮‌🇹‌🇦‌ 🇨‌🇴‌🇳‌ 🇵‌🇪‌🇷‌🇫‌🇪‌🇨‌🇨‌🇮‌🇴‌🇳‌ ♥");
        return;
    }

    const numero = "573042828467"; // 🔥 CAMBIA ESTO

    const mensaje = `Hola, me gustaria agendar cita contigó ❘ 

Nombre: ${nombre} ❘
Teléfono: ${telefono} ❘
Fecha: ${fecha} ❘
Detalles: ${detalles}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}

function mostrarCitas() {

    const lista = document.getElementById("listaCitas");

    if (!lista) return; // evita errores

    lista.innerHTML = "";

    const citas = JSON.parse(localStorage.getItem("citas")) || [];

    citas.forEach(cita => {

        const div = document.createElement("div");
        div.classList.add("cita-item");

        div.innerHTML = `
            <strong>Servicio:</strong> ${cita.servicio}<br>
            <strong>Nombre:</strong> ${cita.nombre}<br>
            <strong>Teléfono:</strong> ${cita.telefono}<br>
            <strong>Fecha:</strong> ${cita.fecha}<br>
            <strong>Detalles:</strong> ${cita.detalles}
        `;

        lista.appendChild(div);
    });
}

window.addEventListener("load", function () {
    mostrarCitas();
});

function abrirCitaDirecto() {
    document.getElementById("formCita").style.display = "flex";

    // opcional: limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("detalles").value = "";

    // limpiar servicio
    document.getElementById("servicioSeleccionado").innerText = "Agendar cita";
}

function abrirCitaDirecto() {
    document.getElementById("formCita").style.display = "flex";
}

function cerrarCita() {
    document.getElementById("formCita").style.display = "none";
}