//MODULO BRAYAN JAVASCRIPT.

//DECLARACION DE CONSTANTES PARA LA VENTANA MODAL DEL INICIO DE SESION Y REGISTRO.
const openModal = document.querySelector('.inicioS');
const modalInicioS = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

const openModalRes = document.querySelector('.registroM');
const modalRes = document.querySelector('.modalRes');
const closeModalRes = document.querySelector('.modal__closeRes');

//ESCUCHA DEL EVENTO CLICK SOBRE LA BARRA DE NAVEGACION PARA MOSTRAR LA VENTANA MODAL.
openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalInicioS.classList.add('modal--show');
});

//ESCUCHA DEL EVENTO CLICK SOBRE LA "X" DEL INICIO DE SESION PARA CERRAR LA VENTANA MODAL.
closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalInicioS.classList.remove('modal--show');
});

//ESCUCHA DEL EVENTO CLICK SOBRE LA ZONA EXTERIOR DEL INICIO DE SESION PARA CERRAR LA VENTANA MODAL.
modalInicioS.addEventListener('click', (e)=>{
    e.preventDefault();
    modalInicioS.classList.remove('modal--show');
});

//ESCUCHA DEL EVENTO CLICK SOBRE LA BARRA DE NAVEGACION PARA MOSTRAR LA VENTANA MODAL.
openModalRes.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRes.classList.add('modal--showRes');
});

//ESCUCHA DEL EVENTO CLICK SOBRE LA "X" DEL INICIO DE SESION PARA CERRAR LA VENTANA MODAL.
closeModalRes.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRes.classList.remove('modal--showRes');
});

modalRes.addEventListener('click', (e) =>{
    e.preventDefault();
    modalRes.classList.remove('modal--showRes');
})