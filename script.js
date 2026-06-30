// ===== MENÚ HAMBURGUESA =====
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// ===== FORMULARIO DE CONTRATACIÓN =====
const form = document.getElementById('contrato-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const email = document.getElementById('email').value.trim();
        const origen = document.getElementById('origen').value.trim();
        const destino = document.getElementById('destino').value.trim();
        const fecha = document.getElementById('fecha').value;
        const pasajeros = document.getElementById('pasajeros').value;
        const tipo = document.getElementById('tipo').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !telefono || !origen || !destino || !fecha || !pasajeros || !tipo) {
            alert('Por favor, complete todos los campos obligatorios (*)');
            return;
        }

        const confirmacion = document.getElementById('mensaje-confirmacion');
        confirmacion.style.display = 'block';
        confirmacion.scrollIntoView({ behavior: 'smooth' });

        // (Opcional) Enviar por WhatsApp
        const mensajeWhatsApp = `Hola EcoRuta, quiero contratar un servicio:
Nombre: ${nombre}
Teléfono: ${telefono}
Origen: ${origen}
Destino: ${destino}
Fecha: ${fecha}
Pasajeros: ${pasajeros}
Tipo: ${tipo}
Observaciones: ${mensaje || 'Ninguna'}`;

        // Descomenta la línea de abajo para activar el envío a WhatsApp
        // window.open(`https://wa.me/53512345678?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
    });
}