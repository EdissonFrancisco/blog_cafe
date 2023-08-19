// Seleccionar elementos del DOM
const btnInscribirse = document.querySelectorAll('.abrir_modal');
const modal = document.querySelector('.modal');
const formulario = document.querySelector('.formulario');
const inscripcionCompleta = document.querySelector('.final__inscripcion');
const btnCerrar = document.querySelector('.cerrar-modal');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const numCC = document.querySelector('#numCC');
const pais = document.querySelector('#pais');
const genero = document.querySelector('#genero');

// Datos del formulario
const datos = {
    nombre: '',
    email: '',
    numCC: '',
    pais: '',
    genero: ''
};

// Función para mostrar el modal
const mostrarModal = () => modal.classList.add('verModal');

// Función para cerrar el modal
const cerrarModal = () => modal.classList.remove('verModal');

// Evento para abrir el modal al hacer clic en "Inscribirse"
btnInscribirse.forEach(boton => {
    boton.addEventListener('click', (evt) => {
        evt.preventDefault();
        inscripcionCompleta.classList.remove('mostrar-final');
        inscripcionCompleta.classList.add('ocultar');
        formulario.classList.remove('ocultar');
        mostrarModal();
    });
});

// Evento para cerrar el modal al hacer clic en "Cerrar"
btnCerrar.addEventListener('click', (evt) => {
    evt.preventDefault();
    cerrarModal();
    limpiarCampos();
});

// Evento para actualizar datos cuando se ingresa texto en los campos
nombre.addEventListener('input', leertexto);
email.addEventListener('input', leertexto);
numCC.addEventListener('input', leertexto);
pais.addEventListener('input', leertexto);
genero.addEventListener('input', leertexto);

function leertexto(e) {
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

// Evento para enviar el formulario
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Validar formulario
    const { nombre, email, numCC, pais, genero } = datos;
    if (nombre === '' || email === '' || numCC === '' || pais === '' || genero === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    }
    mosstrarEnviado(e);
});

function mostrarError(mensaje) {
    const error = document.createElement('p'); // Corregido: cambia 'P' a 'p'
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    // Desaparece después de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

function mosstrarEnviado(evt) {
    evt.preventDefault();
    formulario.classList.add('ocultar');
    inscripcionCompleta.classList.remove('ocultar');
    inscripcionCompleta.classList.add('mostrar-final');
    limpiarCampos();
    // Llamando a cerrarModal después de 1.5 segundos
    setTimeout(() => {
        cerrarModal();
    }, 1500);
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    nombre.value = '';
    email.value = '';
    numCC.value = '';
    pais.value = '';
    genero.value = '';
    // También puedes restablecer los valores en el objeto datos si es necesario
    datos.nombre = '';
    datos.email = '';
    datos.numCC = '';
    datos.pais = '';
    datos.genero = '';
}
