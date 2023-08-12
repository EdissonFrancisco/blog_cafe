//selecciona todoos los btn de inscribirse
const btnInscribirse = document.querySelectorAll('.abrir_modal');
//obtencion de la referencia al modal
const modal = document.querySelector('.modal');
//obtencion de la referencia al boton enviar de la ventana modal
const btnEnviar = document.querySelector('.boton--enviar');
//seleccion referencia al formulario
const formulario = document.querySelector('.formulario');
//seleccion referencia al mensaje final
const inscripcionCompleta = document.querySelector('.final__inscripcion');

//funcion mostrar el modal
const mostrarModal = () => modal.classList.add('verModal');
//obtencion para cerrar de la ventana modal
const cerrarModal = () => modal.classList.remove('verModal');

//for para agregar opcion al boton de la vista principal
btnInscribirse.forEach(boton => {
    boton.addEventListener('click', (evt) => {
        evt.preventDefault();
        inscripcionCompleta.classList.remove('mostrar-final');
        inscripcionCompleta.classList.add('ocultar');
        formulario.classList.remove('ocultar');
        mostrarModal();
    });
});

//evento click para cerrar modal
document.querySelector('.cerrar-modal').addEventListener('click', (evt) => {
    evt.preventDefault();
    cerrarModal();
});

btnEnviar.addEventListener('click', (evt) => {
    evt.preventDefault();
    formulario.classList.add('ocultar');
    inscripcionCompleta.classList.remove('ocultar');
    inscripcionCompleta.classList.add('mostrar-final');
    //llamando a ocultarModal
    setTimeout(() => {
        cerrarModal();  // Cierra el modal después de 2 segundos
    }, 1500);
});
