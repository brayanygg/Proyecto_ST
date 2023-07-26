//MODULO BRAYAN JAVASCRIPT.
const saludo = document.querySelector(".saludo");
let user = "";

//DECLARACION DE CONSTANTES PARA EL CHAT DE PRGUNTAS.
const chatI = document.querySelector(".chat-input textarea"); 
const enviarPBtn = document.querySelector(".chat-input span"); 
const chatbox = document.querySelector(".chatbox"); 
const abrirChat = document.querySelector(".preguntas");
const seccionDudas = document.querySelector(".seccion_dudas");
const cerrarChat = document.querySelector(".cerrar-btn");

let mensajeChat;
const inHeight = chatI.scrollHeight;

//DECLARACION DE CONSTANTES PARA LA VENTANA MODAL DEL INICIO DE SESION Y REGISTRO.
const abrirModal = document.querySelector('.inicioS');
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

const abrirInicioP = document.querySelector(".paralelo-in");
const abrirRegistroP = document.querySelector(".paralelo-reg");
const abrirParalelo = document.querySelector(".btn-tog");
const seccionParalelo = document.querySelector(".cabecera-btn");
const detector = document.querySelector(".detector");

detector.addEventListener("click", (e) => {
    if(e.target === detector){
        seccionParalelo.classList.remove("show--paralelo");
    }
})
abrirParalelo.addEventListener("click", () => {
    seccionParalelo.classList.toggle("show--paralelo");
    abrirParalelo.classList.toggle("rotate");
})


const crearChatLi = (mensajeU, nombreClase) => {
   const chatLi = document.createElement("li");
   chatLi.classList.add("chatb", nombreClase);
   let contenidoChat = nombreClase === "out" ? `<p>${mensajeU}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${mensajeU}</p>`;
   chatLi.innerHTML = contenidoChat;
   return chatLi;
}
const manejoC = () => {
    mensajeChat = chatI.value.trim();
    if (!mensajeChat) {
    return;
    }
    chatI.value = "";
    chatI.style.height = `${inHeight}px`;

    chatbox.appendChild(crearChatLi(mensajeChat, "out"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        chatbox.appendChild(crearChatLi("Tu pregunta sera procesada y respondida lo más pronto posible...", "in"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
}
chatI.addEventListener("input", () => {
    chatI.style.height = `${inHeight}px`;
    chatI.style.height = `${chatI.scrollHeight}px`; 
});
chatI.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800){
        e.preventDefault();
        manejoC();
    }
});
abrirChat.addEventListener("click", () => {
    seccionDudas.classList.toggle("chat--show");
});
cerrarChat.addEventListener("click", () => {

    seccionDudas.classList.remove("chat--show");
});
enviarPBtn.addEventListener("click", manejoC);

//DECLARACION DE CONSTANTES PARA LA VENTANA MODAL DEL INICIO DE SESION Y REGISTRO.
const abrirModal = document.querySelector('.inicioS');
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
const msjsection = document.getElementById("filtre")

//INICIO DE SESION

abrirInicioP.addEventListener('click', (e)=>{
    e.preventDefault();
    modalInicioS.classList.add('modal--show');
});

//ESCUCHA DEL EVENTO CLICK SOBRE LA BARRA DE NAVEGACION PARA MOSTRAR LA VENTANA MODAL.
abrirModal.addEventListener('click', (e)=>{
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
        msjsection.style.display = "none";
    }
})

//REGISTRO

abrirRegistroP.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRes.classList.add('modal--showRes');
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

//Modulo de Jesus

// Declaracion de constantes para obtener el elemento del contenedor de las tarjetas por su ID
const containerCard = document.getElementById('containerCards');

// Creación de arreglos vacío para almacenar las tarjetas
let storageCards = [];

// Definición de la clase Card
class Card {

// Constructor de la clase Card
// Se utilizan los parámetros para asignar los valores a las propiedades de la instancia
    constructor(id, photo, title, text, date) {
        this.id = id;
        this.photo = photo;
        this.title = title;
        this.text = text;
        this.date = date;
    }
}

// Creación de instancias de la clase Card
let card1 = new Card('procesadorCard', './assets/ComputersPartsImg/Pocesador.jpg', 'Procesador', 'Es el cerebro de todo el funcionamiento del sistema, el encargado de dirigir todas las tareas que lleva a cabo el equipo y de ejecutar el código de los diferentes programas, coordinando las operaciones de entrada/salida, realizando cálculos, tomando decisiones y controla el flujo de datos dentro del..', '01/01/2000');
let card2 = new Card('memoriaRamCard', './assets/ComputersPartsImg/Memoria Ram.jpg', 'Memoria RAM', 'Es un tipo de memoria volátil y de acceso aleatorio utilizada por los computadores para almacenar temporalmente los datos y las instrucciones que se están utilizando en ese momente permite acceder y leer los datos de manera rápida, lo que facilita el funcionamiento eficiente de los programas...', '01/01/2000');
let card3 = new Card('motherboardCard', './assets/ComputersPartsImg/tarjeta-madre.jpg', 'Tarjeta Madre', 'La tarjeta madre es la placa principal de una computadora. Conecta y coordina todos los componentes esenciales, como el procesador, la memoria y los dispositivos, permitiendo su funcionamiento integrado y eficiente para ejecutar programas y almacenar datos temporalmente.', '01/01/2000');
let card4 = new Card('powerSupplyCard', './assets/ComputersPartsImg/Fuentedepoder.jpg ', 'Fuente de Poder', 'Es un componente fundamental en un sistema informático que suministra la energía eléctrica necesaria para alimentar y hacer funcionar todos los demás componentes, como el procesador, la tarjeta gráfica o dispositivos de almacenamiento para un correcto funcion...', '01/01/2000');
let card5 = new Card('storageCard', './assets/ComputersPartsImg/disco duro.jpg', 'Unidad de almacenamiento', 'Son dispositivos electrónicos que permiten guardar y recuperar datos digitales. Puede ser un disco duro, una unidad de estado sólido (SSD) o una unidad óptica. Almacena archivos, programas y sistemas operativos, facilitando el acceso a la informacion...', '01/01/2000');
let card6 = new Card('screenCard', './assets/ComputersPartsImg/Monitorjpg.jpg', 'Monitor', 'El monitor de un ordenador es un dispositivo de salida visual que muestra información generada por el equipo. Proporciona una interfaz visual para la visualización de imágenes, textos, gráficos y videos, permitiendo la interacción con el sistema operativo y las aplicaciones instaladas.', '01/01/2000');
let card7 = new Card('keyboardCard', './assets/ComputersPartsImg/Teclado.jpg', 'Teclado', 'Es un periférico de entrada compuesto por una disposición de teclas que permite al usuario ingresar datos y comandos al sistema. Es fundamental para la escritura de texto, la navegación y el control de funciones especiales, facilitando la interacción con la computadora.', '01/01/2000');
let card8 = new Card('mouseCard', './assets/ComputersPartsImg/Raton.jpg ', 'Ratón', 'El ratón de un ordenador es un dispositivo de entrada que se utiliza para controlar el cursor en la pantalla. Con su movimiento y botones, permite al usuario seleccionar, arrastrar y hacer clic en objetos y elementos gráficos, facilitando la navegación y la interacción con el sistema operativo y las...', '01/01/2000');
let card9 = new Card('graphicsCard', './assets/ComputersPartsImg/Tarjeta Grafica.jpg ', 'Tarjeta Gráfica', 'También conocida como GPU (Unidad de Procesamiento Gráfico), es un componente del ordenador encargado de procesar y generar imágenes, gráficos y vídeos en el monitor. Mejora el rendimiento visual, acelera tareas gráficas y permite juegos y aplicaciones exigentes en términos de gráficos.', '01/01/2000');
let card10 = new Card('networkCard', './assets/ComputersPartsImg/Tarjeta de Red.jpg ', 'Tarjeta de Red', 'También conocida como adaptador de red, es un componente de hardware que permite la conexión de un ordenador a una red de área local (LAN) o a Internet. Facilita la comunicación y transferencia de datos entre dispositivos a través de protocolos de red, como Ethernet o Wi-Fi', '01/01/2000');

// Agregar las instancias de Card al arreglo storageCards
storageCards.push(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10);

// Iterar sobre el arreglo storageCards y generar el HTML correspondiente para cada tarjeta
storageCards.forEach(Card => {
    let inf =
        `
            <div class="cards open" id="${Card.id}">    
                <picture class="card-image" >
                    <img src="${Card.photo}">
                </picture>
                <h3>${Card.title}</h3>
                    <div class="card-info">
                        <p class="text">${Card.text}</p>
                        <footer>
                            <span class="fecha">${Card.date}</span>
                        </footer>
                    </div>
           </div>    
        
        `;
    // Agregar el HTML generado al contenedor containerCard
    containerCard.innerHTML += inf;
});

//Generar Tarjetas dinamicas Modulo 4 Noticias
const containerNews = document.getElementById('containerCardsNews');
let storageNews = [];

class CardNews {
  constructor(title, text, id) {
    this.title = title;
    this.text = text;
    this.id = id;
  }
}
    

    let cardsnew1 = new CardNews('Intel dice Adios a su serie CoreI!' , 'Intel ha oficializado que ya no utilizará la denominación "Core i" para susprocesadores.', 'newCardOne');
    let cardsnew2 = new CardNews('¿la computación cuántica?', 'La computación cuántica. ¿Se avecina la nueva era de la computación? ', 'newCardTwo' );
    let cardsnew3 = new CardNews('chatGpt5 una IA conversacional', 'Nuevas funciones de esta IA que podrian cambiar la comunicacion humana-computadora.', 'newCardThree');
    let cardsnew4 = new CardNews('Riesgos en la IA?', 'Grandes referentes dle mundo dudan de la seguridad de la IA y llaman a su detención ', 'newCardFour');
    let cardsnew5 = new CardNews('Nueva Funcion de ChatBot Bing', 'Mira las nuevas funciones del chatbot bing desarrollado por Microsoft para sus usuarios.', 'newCardFive' );
    let cardsnew6 = new CardNews('Ordenador gaming Lenovo rebajado 1100€!', 'Este ordenador gaming de Lenovo con una RTX 3060 de 12GB está ahora rebajado a 1.100 euros ', 'newCardSix' );
    let cardsnew7 = new CardNews('Como volver tu Wifi mas potente', 'Si buscas una solución rápida, barata y práctica para amplificar tu red WiFi, solo necesitas una lata de vacía.', 'newCardSeven' );
    let cardsnew8 = new CardNews('Intel presenta un Chip para IA', 'El fabricante reveló los detalles del chip que impulsara los modelos de Inteligencia Artificial ', 'newCardEigth' );
    let cardsnew9 = new CardNews('Microsoft acaba la peor funcion de windows11', 'La compañía va a hacer un cambio importante en la integración de Microsoft Teams que llegó con Windows 11.', 'newCardNine');
    let cardsnew10 = new CardNews('Acusan a OpenAi por robar datos personales!', 'Una demanda para OpenAi por robar datos personales de forma ilegal para entrenar su IA', 'newCardTen' );
    let cardsnew11 = new CardNews(' Instagram tendrá su propio ChatGPT', 'Instagram ha comenzado a probar la integración con un chatbot de inteligencia artificial, a lo ChatGPT.', 'newCardEleven');
    let cardsnew12 = new CardNews('PCI-Express6.0 El nuevo standard.', 'PCI-Express 6.0: todo lo que necesitas saber del nuevo estándar en PC', 'newCardTwelve');
    
    storageNews.push(cardsnew1, cardsnew2, cardsnew3, cardsnew4, cardsnew5, cardsnew6, cardsnew7, cardsnew8, cardsnew9, cardsnew10, cardsnew11, cardsnew12);
    
    storageNews.forEach(CardNews => {
        let infNew = `
          <div class="cardNew"> 
            <h4 class="titlenew" >${CardNews.title}</h4>
            <p class= "textnew" >${CardNews.text}</p>
            <footer class="ftoNew">
              <button class="open" id="${CardNews.id}">Leer más →</button>
            </footer>
          </div>
        `;
        
        containerNews.innerHTML += infNew;
      });


//Generar Tarjetas dinamicas Modulo 5 TUTORIAL
const containerVids = document.getElementById('containerTutorials')
let storageVids = [];

class CardVids {

        constructor(video, title, text, date, art) {
          this.video = video
          this.title = title
          this.text = text
          this.date = date
          this.art = art
        }
    }
    

    let cardsvids1 = new CardVids('', 'Como cambiar el disco duro de un ordenador', 'Cambiar un disco duro puede ser una tarea necesaria para mejorar el rendimiento de tu computadora o cuando el disco existente está dañado o se queda sin espacio. Afortunadamente, reemplazar un disco duro en la mayoría de las computadoras modernas es un proceso relativamente sencillo y no requiere conocimientos técnicos avanzados.', '01/01/2000', 'Ordenadores');
    let cardsvids2 = new CardVids('', 'Como cambiar una placa madre', 'Cambiar la placa madre de una computadora puede ser una tarea crucial para actualizar o reparar el sistema. Aunque puede parecer intimidante, con la guía adecuada es un proceso accesible. Aprende los pasos esenciales, desde desconectar los cables hasta asegurar los tornillos, y experimenta la mejora de rendimiento y funcionalidad de tu PC.', '01/01/2000', 'Ordenadores');
    let cardsvids3 = new CardVids('', 'Como cambiar el disipador de un ordenador', 'Cuando el ventilador de tu PC comienza a fallar, cambiarlo es esencial para evitar problemas de sobrecalentamiento. Con unos simples pasos, como desconectar los cables de alimentación y desmontar el ventilador antiguo, puedes instalar uno nuevo. Mejorarás el flujo de aire interno, manteniendo tu computadora funcionando de manera óptima y prolongando su vida útil.', '01/01/2000.', 'Ordenadores');
    let cardsvids4 = new CardVids('', 'Como formatear un PC ', 'Formatear una PC es un procedimiento clave para restaurarla a su estado original y eliminar todos los datos almacenados. Con algunos pasos simples, como respaldar tus archivos, acceder a la configuración de inicio y seleccionar la opción de formateo, puedes comenzar con una instalación limpia del sistema operativo, mejorando el rendimiento y la estabilidad de tu computadora.', '01/01/2000', 'Ordenadores');
    let cardsvids5 = new CardVids('', 'Como limpiar y optimizar un ordenador', 'Optimizar tu ordenador es esencial para mejorar su rendimiento y eficiencia. Con algunos pasos simples, como desinstalar programas innecesarios, limpiar archivos temporales y desfragmentar el disco duro, puedes acelerar el tiempo de carga y la respuesta del sistema. Mantén tu ordenador funcionando de manera óptima y aprovecha al máximo su potencial.',  '01/01/2000', 'Ordenadores ');
    let cardsvids6 = new CardVids('', 'Como limpiar internamente un ordenador', 'En este tutorial, aprenderás a limpiar el interior de tu PC para optimizar su rendimiento. Te guiaremos para eliminar el polvo acumulado en componentes clave como ventiladores y disipadores. Mejorando la refrigeración y reduciendo el ruido, tu ordenador funcionará de manera más eficiente y prolongará su vida útil. ¡Sigue las instrucciones y disfruta de un sistema más rápido!', '01/01/2000', 'Ordenadores');
    let cardsvids7 = new CardVids('', 'Como reducir el consumo de ram y cpu de un PC', 'Reducir eficientemente el consumo de CPU y RAM es crucial para mejorar el rendimiento de tu ordenador. En este tutorial completo, descubrirás valiosos consejos prácticos, como cerrar aplicaciones innecesarias, desactivar programas de inicio automático y ajustar la configuración del sistema. Aprovecha los recursos de tu PC y disfruta de una experiencia más fluida y eficiente.', '01/01/2000', 'Ordenadores');
    let cardsvids8 = new CardVids('', 'Como reparar la tarjeta de video de un PC ', 'Reparar una tarjeta de vídeo defectuosa puede ser increíblemente útil para solucionar problemas de visualización en tu computadora. En este tutorial detallado, te mostraremos los pasos básicos, como verificar las conexiones, limpiar meticulosamente los contactos y actualizar los controladores. Sigue nuestras instrucciones y disfruta de una tarjeta de vídeo funcional', '01/01/2000', 'Ordenadores');
    
    storageVids.push(cardsvids1, cardsvids2, cardsvids3, cardsvids4, cardsvids5, cardsvids6, cardsvids7, cardsvids8 );
    
    storageVids.forEach(CardVids => {
        let infvids =
            `
        <div class="cardsVids" id="cardsVids" >
            <video controls>
                <source src="${CardVids.video}" type="video/mp4">
            </video> 
           <div class="textVids">
                <h3>${CardVids.title}</h3>
                <p>${CardVids.text}</p>
            </div>
                <footer class="footerVids" >
                    <span class="DateVids">
                        <p>${CardVids.date}</p>
                    </span>
                    <span class="clf">
                        <p>${CardVids.art}</p>
                    </span>
                </footer>
        </div>            
            `;
        
        containerVids .innerHTML += infvids;
    });
    

// Función para abrir una pestaña emergente
function openTab(tabId) {
    // Obtener el elemento de la pestaña por su ID
    const tab = document.getElementById(tabId);
    
    // Cambiar el estilo de la pestaña para hacerla visible
    tab.style.opacity = "1";
    tab.style.visibility = "visible";
    
    // Obtener el contenido de la pestaña y quitar la clase "tab_close"
    const tabContent = tab.querySelector(".tab");
    tabContent.classList.remove("tab_close");
  }
  
  // Función para cerrar una pestaña emergente
  function closeTab(tabId) {
    // Obtener el elemento de la pestaña por su ID
    const tab = document.getElementById(tabId);
    
    // Cambiar el estilo de la pestaña para ocultarla
    tab.style.opacity = "0";
    tab.style.visibility = "hidden";
    
    // Obtener el contenido de la pestaña y agregar la clase "tab_close"
    const tabContent = tab.querySelector(".tab");
    tabContent.classList.add("tab_close");
    
    // Desplazar el contenido de la pestaña hacia arriba
    setTimeout(() => {
      tabContent.scrollTop = 0;
    }, 500);
  }

// Mapeo de las tarjetas con las pestañas correspondientes
const cardToTabMapping = {
    procesadorCard: "procesadorTab",
    memoriaRamCard: "memoriaRamTab",
    motherboardCard: "motherboardTab",
    powerSupplyCard: "powerSupplyTab",
    storageCard: "storageTab",
    screenCard: "screenTab",
    keyboardCard: "keyboardTab",
    mouseCard: "mouseTab",
    graphicsCard: "graphicsTab",
    networkCard: "networkTab",
    
    newCardOne: "newTabOne",
    newCardTwo: "newTabTwo",
    newCardThree: "newTabThree",
    newCardFour: "newTabFour",
    newCardFive: "newTabFive",
    newCardSix: "newTabSix",
    newCardSeven: "newTabSeven",
    newCardEigth: "newTabEigth",
    newCardNine: "newTabNine",
    newCardTen: "newTabTen",
    newCardEleven: "newTabEleven",
    newCardTwelve: "newTabTwelve",
    
  };

// Asignar eventos de clic a las tarjetas y botones de cerrar
Object.entries(cardToTabMapping).forEach(([cardId, tabId]) => {
    const card = document.getElementById(cardId);
    const closeBtn = document.querySelector(`#${tabId} .close`);
  
    // Agregar un evento de clic a la tarjeta
    card.addEventListener("click", () => {
      // Verificar si la ventana tiene un ancho superior a 400px
     //// if (!window.matchMedia("(max-width: 400px)").matches) {
        // Llamar a la función openTab para abrir la pestaña correspondiente
        openTab(tabId);
     //// }
    });
  
    // Agregar un evento de clic al botón de cerrar
    closeBtn.addEventListener("click", () => {
      // Llamar a la función closeTab para cerrar la pestaña correspondiente
      closeTab(tabId);
    });
  
    // Agregar un evento de clic en cualquier parte de la ventana
    window.addEventListener("click", function (e) {
      const containerTab = document.getElementById(tabId);
      if (e.target == containerTab) {
        // Llamar a la función closeTab para cerrar la pestaña correspondiente
        closeTab(tabId);
      }
    });
  });



