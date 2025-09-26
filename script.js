

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("reserva-form");
    const mensaje = document.getElementById("form-mensaje");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const telefono = form.telefono.value.trim();
        const fecha = form.fecha.value;
        const hora = form.hora.value;

        if (!nombre || !email || !telefono || !fecha || !hora) {
            mensaje.style.color = "red";
            mensaje.textContent = "Por favor completa todos los campos obligatorios.";
            return;
        }

        mensaje.style.color = "green";
        mensaje.textContent = `¡Gracias ${nombre}! Tu reserva ha sido enviada correctamente.`;

        form.reset();
    });





    const galeriaGrid = document.querySelector(".galeria-grid");

    function rotarGaleria() {

        galeriaGrid.style.transition = "opacity 0.5s ease";
        galeriaGrid.style.opacity = "0";

        setTimeout(() => {
            
            const primerItem = galeriaGrid.querySelector(".galeria-item");
            galeriaGrid.appendChild(primerItem);

            galeriaGrid.style.opacity = "1";
        }, 500);
    }

    setInterval(rotarGaleria, 3000);

});
