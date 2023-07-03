//MODULO BRAYAN JAVASCRIPT.
const saludo = document.querySelector(".saludo");
let user = "";

//DECLARACION DE CONSTANTES PARA LA VENTANA MODAL DEL INICIO DE SESION Y REGISTRO.
const openModal = document.querySelector('.inicioS');
const modalInicioS = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

const openModalRes = document.querySelector('.registroM');
const modalRes = document.querySelector('.modalRes');
const closeModalRes = document.querySelector('.modal__closeRes');

const crearCuenta = document.getElementById("crearC");

//DECLARACION DE CONSTANTES PARA LA VALIDACION DE LOS FORMULARIOS DE REGISTRO E INICIO DE SESION
const nameL = document.getElementById("nombre");
const contra = document.getElementById("contraseña");
const formulario = document.getElementById("form");
const parrafo = document.getElementById("alertas");

const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const pass = document.getElementById("contra");
const formuR = document.getElementById("formR");
const parrafoR = document.getElementById("warnings");

//INICIO DE SESION

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
    if(e.target === modalInicioS){
        modalInicioS.classList.remove('modal--show');
    };
});

//EVENTO ESCUCHA DE SUBMIT PARA VALIDAR FORMULARIO DE INICIO DE SESION.
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let warnings = ""; 
    let entrar = false;
    parrafo.innerHTML = "";

    if(nameL.value.length < 2 || nameL.value.length > 14){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }

    if(contra.value.length < 8){
        warnings += `La contraseña no es valida <br>`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        user = `Hola,`+ " " + nameL.value;
        modalInicioS.classList.remove('modal--show');
        saludo.innerHTML = user;
    }
})

//REGISTRO

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

//ESCUCHA DEL EVENTO CLICK SOBRE LA ZONA EXTERIOR DEL REGISTRO PARA CERRAR LA VENTANA MODAL.
modalRes.addEventListener('click', (e) =>{
    if(e.target === modalRes){
        modalRes.classList.remove('modal--showRes');
    };
})
crearCuenta.addEventListener('click', (e) =>{
    e.preventDefault();
    modalInicioS.classList.remove('modal--show');
    modalRes.classList.add('modal--showRes');
})

//EVENTO ESCUCHA DE SUBMIT PARA VALIDAR FORMULARIO DE REGISTRO.
formuR.addEventListener("submit", (e) =>{
    e.preventDefault();
    let warnings = ""; 
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafoR.innerHTML = "";

    if(nombre.value.length < 2 || nombre.value.length > 14){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if(!regexEmail.test(correo.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`;
        entrar = true;
    }
    if(entrar){
        parrafoR.innerHTML = warnings;
    }else{
        modalRes.classList.remove('modal--showRes');
    }
})
