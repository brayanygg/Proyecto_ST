//Modulo de Jesus

// Obtener el elemento del contenedor de las tarjetas por su ID
const containerCard = document.getElementById('containerCards');

// Crear un arreglo vacío para almacenar las tarjetas
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
  };

// Asignar eventos de clic a las tarjetas y botones de cerrar
Object.entries(cardToTabMapping).forEach(([cardId, tabId]) => {
    const card = document.getElementById(cardId);
    const closeBtn = document.querySelector(`#${tabId} .close`);
  
    // Agregar un evento de clic a la tarjeta
    card.addEventListener("click", () => {
      // Verificar si la ventana tiene un ancho superior a 400px
      if (!window.matchMedia("(max-width: 400px)").matches) {
        // Llamar a la función openTab para abrir la pestaña correspondiente
        openTab(tabId);
      }
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

  //Modulo Hender

  function openModal(modalId,transicion){
    var modal = document.getElementById(modalId);
    var transicion = document.getElementById(transicion);
    modal.showModal();
    transicion.style.opacity = "1";
  };
  function cerrarModal(modalId,transicion){
    var close = document.getElementById(modalId);
    var transicion = document.getElementById(transicion);
    transicion.style.opacity = "0";
    close.close();
  }