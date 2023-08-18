// Definir objeto para almacenar datos del formulario
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

// Obtener referencias a los elementos del formulario
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// Escuchar eventos de entrada en los campos del formulario
nombre.addEventListener('input', leertexto);
email.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

// Función para actualizar los datos en el objeto al escribir en los campos
function leertexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

// Obtener referencia al formulario
const formulario = document.querySelector('.formulario');

// Escuchar evento de envío del formulario
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar formulario
    const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    // Mostrar mensaje de envío correcto
    mosstrarEnviado('Mensaje enviado correctamente');
});

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    // Desaparece después de 3 segundos
    setTimeout(() => {
        error.remove();
    }, 3000);
}

// Función para mostrar mensaje de envío correcto
function mosstrarEnviado(mensaje) {
    const enviado = document.createElement('p');
    enviado.textContent = mensaje;
    enviado.classList.add('correcto');
    formulario.appendChild(enviado);
    limpiarCampos();
    // Desaparece después de 3 segundos
    setTimeout(() => {
        enviado.remove();
    }, 3000);
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    nombre.value = '';
    email.value = '';
    mensaje.value = '';
    // También puedes restablecer los valores en el objeto datos si es necesario
    datos.nombre = '';
    datos.email = '';
    datos.mensaje = '';
}