/*selecciona todoos los btn de inscribirse
const btnInscribirse = document.querySelectorAll('.abrir_modal');

//obtencion de la referencia al modal
const modal = document.querySelector('.modal');

//funcion para adicionar la clase al modal
const abrirModal = () => modal.classList.add('verModal');
btnInscribirse.forEach(boton => {
    boton.addEventListener('click', (evt) => {
        evt.preventDefault();
        abrirModal();
    });
});

//boton cerrar de la ventana modal
const cerrarModal = document.querySelector('.cerrar-modal');
cerrarModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('verModal')
});*/

// Selecciona todos los botones de inscribirse
const btnInscribirse = document.querySelectorAll('.abrir_modal');

// Obtención de la referencia al modal
const modal = document.querySelector('.modal');

// Obtención de la referencia al contenido de inscripción final
const finalInscripcion = document.querySelector('.final__inscripcion');

// Función para abrir el modal y mostrar el contenido de inscripción final
const abrirModal = () => {
    modal.classList.add('verModal');
    setTimeout(() => {
        finalInscripcion.classList.add('mostrar-final');
    }, 500); // Cambiar el valor de 500 según la duración de tu transición CSS
};

// Agregar Event Listeners a los botones de inscribirse
btnInscribirse.forEach(boton => {
    boton.addEventListener('click', (evt) => {
        evt.preventDefault();
        abrirModal();
    });
});

// Obtención de la referencia al botón de cerrar el modal
const cerrarModal = document.querySelector('.cerrar-modal');

// Función para cerrar el modal y ocultar el contenido de inscripción final
const cerrarYocultar = () => {
    modal.classList.remove('verModal');
    finalInscripcion.classList.remove('mostrar-final');
};

// Agregar Event Listener al botón de cerrar el modal
cerrarModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    cerrarYocultar();
});


