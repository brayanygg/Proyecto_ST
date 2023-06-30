//Modulo de Jesus
//Clase para almacenar en inyectar el contenido al html(cards)
const containerCard = document.getElementById('containerCards');
let storageCards = [];

class Card {
    constructor(id, photo, title, text, date) {
        this.id = id;
        this.photo = photo;
        this.title = title;
        this.text = text;
        this.date = date;
    }
}

let card1 = new Card('procesadorCard', './assets/Pocesador.jpg', 'Procesador', 'Es el cerebro de todo el funcionamiento del sistema, el encargado de dirigir todas las tareas que lleva a cabo el equipo y de ejecutar el código de los diferentes programas, coordinando las operaciones de entrada/salida, realizando cálculos, tomando decisiones y controla el flujo de datos dentro del..', '01/01/2000');
let card2 = new Card('memoriaRamCard', '../assets/Pocesador.jpg', 'Memoria RAM', 'Es un tipo de memoria volátil y de acceso aleatorio utilizada por los computadores para almacenar temporalmente los datos y las instrucciones que se están utilizando en ese momente permite acceder y leer los datos de manera rápida, lo que facilita el funcionamiento eficiente de los programas...', '01/01/2000');
let card3 = new Card('motherboardCard', './assets/Pocesador.jpg', 'Tarjeta Madre', 'La tarjeta madre es la placa principal de una computadora. Conecta y coordina todos los componentes esenciales, como el procesador, la memoria y los dispositivos, permitiendo su funcionamiento integrado y eficiente para ejecutar programas y almacenar datos temporalmente.', '01/01/2000');
let card4 = new Card('powerSupplyCard', './assets/Pocesador.jpg', 'Fuente de Poder', 'Es un componente fundamental en un sistema informático que suministra la energía eléctrica necesaria para alimentar y hacer funcionar todos los demás componentes, como el procesador, la tarjeta gráfica o dispositivos de almacenamiento para un correcto funcion...', '01/01/2000');
let card5 = new Card('storageCard', './assets/Pocesador.jpg', 'Unidad de almacenamiento', 'Son dispositivos electrónicos que permiten guardar y recuperar datos digitales. Puede ser un disco duro, una unidad de estado sólido (SSD) o una unidad óptica. Almacena archivos, programas y sistemas operativos, facilitando el acceso...', '01/01/2000');
let card6 = new Card('screenCard', './assets/Pocesador.jpg', 'Monitor', 'El monitor de un ordenador es un dispositivo de salida visual que muestra información generada por el equipo. Proporciona una interfaz visual para la visualización de imágenes, textos, gráficos y videos, permitiendo la interacción con el sistema operativo y las aplicaciones instaladas.', '01/01/2000');
let card7 = new Card('keyboardCard', './assets/Pocesador.jpg', 'Teclado', 'Es un periférico de entrada compuesto por una disposición de teclas que permite al usuario ingresar datos y comandos al sistema. Es fundamental para la escritura de texto, la navegación y el control de funciones especiales, facilitando la interacción con la computadora.', '01/01/2000');
let card8 = new Card('mouseCard', './assets/Pocesador.jpg', 'Ratón', 'El ratón de un ordenador es un dispositivo de entrada que se utiliza para controlar el cursor en la pantalla. Con su movimiento y botones, permite al usuario seleccionar, arrastrar y hacer clic en objetos y elementos gráficos, facilitando la navegación y la interacción con el sistema operativo y las...', '01/01/2000');
let card9 = new Card('graphicsCard', './assets/Pocesador.jpg', 'Tarjeta Gráfica', 'También conocida como GPU (Unidad de Procesamiento Gráfico), es un componente del ordenador encargado de procesar y generar imágenes, gráficos y vídeos en el monitor. Mejora el rendimiento visual, acelera tareas gráficas y permite juegos y aplicaciones exigentes en términos de gráficos.', '01/01/2000');
let card10 = new Card('networkCard', './assets/Pocesador.jpg', 'Tarjeta de Red', 'También conocida como adaptador de red, es un componente de hardware que permite la conexión de un ordenador a una red de área local (LAN) o a Internet. Facilita la comunicación y transferencia de datos entre dispositivos a través de protocolos de red, como Ethernet o Wi-Fi', '01/01/2000');

storageCards.push(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10);

storageCards.forEach(Card => {
    let inf =
        `
        <div class="cards open" id="${Card.id}">
            <picture>
                <img src="${Card.photo}">
            </picture>
            <div>
                <h3>${Card.title}</h3>
                <p>${Card.text}</p>
                <footer>
                    <span class="fecha">${Card.date}</span>
                </footer>
            </div>
        </div>
        `;

    containerCard.innerHTML += inf;
});

/*
//clase para inyectar contenido html (tabs)
const containerTab = document.getElementById('containerTabs');
let storageTabs = [];

class Tab {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}

let tab1 = new Tab('procesadorTab', 'Procesador', '');

storageTabs.push(tab1);

storageCards.forEach(Card => {
    let infTab =
        `
        <div class="cards open" id="${Card.id}">
            <picture>
                <img src="${Card.photo}">
            </picture>
            <div>
                <h3>${Card.title}</h3>
                <p>${Card.text}</p>
                <footer>
                    <span class="fecha">${Card.date}</span>
                </footer>
            </div>
        </div>
        `;

    containerTab.innerHTML += infTab;
});
*/

// Función para abrir una pestaña emergente
function openTab(tabId) {
    const tab = document.getElementById(tabId);
    tab.style.opacity = "1";
    tab.style.visibility = "visible";
    const tabContent = tab.querySelector(".tab");
    tabContent.classList.remove("tab_close");
  }
  
  // Función para cerrar una pestaña emergente
  function closeTab(tabId) {
    const tab = document.getElementById(tabId);
    tab.style.opacity = "0";
    tab.style.visibility = "hidden";
    const tabContent = tab.querySelector(".tab");
    tabContent.classList.add("tab_close");
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
  
    card.addEventListener("click", () => {
      openTab(tabId);
    });
  
    closeBtn.addEventListener("click", () => {
      closeTab(tabId);
    });
  });


/*
//3
// Función para abrir la pestaña emergente del procesador
function openProcesadorTab() {
    document.getElementById("procesadorTab").style.opacity = "1";
    document.getElementById("procesadorTab").style.visibility = "visible";
    document.querySelector("#procesadorTab .tab").classList.remove("tab_close");
}

// Función para abrir la pestaña emergente de la memoria RAM
function openMemoriaRamTab() {
    document.getElementById("memoriaRamTab").style.opacity = "1";
    document.getElementById("memoriaRamTab").style.visibility = "visible";
    document.querySelector("#memoriaRamTab .tab").classList.remove("tab_close");
}

// Función para abrir la pestaña emergente de la motherboard
function openMotherboardTab() {
    document.getElementById("motherboardTab").style.opacity = "1";
    document.getElementById("motherboardTab").style.visibility = "visible";
    document.querySelector("#motherboardTab .tab").classList.remove("tab_close");
}

// Función para abrir la pestaña emergente de la Fuente de Poder
function openFuenteTab() {
    document.getElementById("powerSupplyTab").style.opacity = "1";
    document.getElementById("powerSupplyTab").style.visibility = "visible";
    document.querySelector("#powerSupplyTab .tab").classList.remove("tab_close");
}

// Función para abrir la pestaña emergente del Dispositivo de Almacenamiento
function openAlmacenamientoTab() {
    document.getElementById("storageTab").style.opacity = "1";
    document.getElementById("storageTab").style.visibility = "visible";
    document.querySelector("#storageTab .tab").classList.remove("tab_close");
}

function openScreenTab() {
    document.getElementById("screenTab").style.opacity = "1";
    document.getElementById("screenTab").style.visibility = "visible";
    document.querySelector("#screenTab .tab").classList.remove("tab_close");
}

function openkeyboardTab() {
    document.getElementById("keyboardTab").style.opacity = "1";
    document.getElementById("keyboardTab").style.visibility = "visible";
    document.querySelector("#keyboardTab .tab").classList.remove("tab_close");
}

function openMouseTab() {
    document.getElementById("mouseTab").style.opacity = "1";
    document.getElementById("mouseTab").style.visibility = "visible";
    document.querySelector("#mouseTab .tab").classList.remove("tab_close");
}

function opengraphicsTab() {
    document.getElementById("graphicsTab").style.opacity = "1";
    document.getElementById("graphicsTab").style.visibility = "visible";
    document.querySelector("#graphicsTab .tab").classList.remove("tab_close");
}

function openNetworkTab() {
    document.getElementById("networkTab").style.opacity = "1";
    document.getElementById("networkTab").style.visibility = "visible";
    document.querySelector("#networkTab .tab").classList.remove("tab_close");
}
// Evento de clic en la tarjeta del procesador
document.getElementById("procesadorCard").addEventListener("click", openProcesadorTab);

// Evento de clic en la tarjeta de la memoria RAM
document.getElementById("memoriaRamCard").addEventListener("click", openMemoriaRamTab);

// Evento de clic en la tarjeta de la motherboard
document.getElementById("motherboardCard").addEventListener("click", openMotherboardTab);

// Evento de clic en la tarjeta de la motherboard
document.getElementById("powerSupplyCard").addEventListener("click", openFuenteTab);

document.getElementById("storageCard").addEventListener("click", openAlmacenamientoTab);

document.getElementById("screenCard").addEventListener("click", openScreenTab);

document.getElementById("keyboardCard").addEventListener("click", openkeyboardTab);

document.getElementById("mouseCard").addEventListener("click", openMouseTab);

document.getElementById("graphicsCard").addEventListener("click", opengraphicsTab);

document.getElementById("networkCard").addEventListener("click", openNetworkTab);

// Evento de clic en el botón de cerrar pestaña emergente del procesador
document.querySelector("#procesadorTab .close").addEventListener("click", function() {
    document.getElementById("procesadorTab").style.opacity = "0";
    document.getElementById("procesadorTab").style.visibility = "hidden";
    document.querySelector("#procesadorTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#procesadorTab .tab").scrollTop = 0;
    }, 500);
});

// Evento de clic en el botón de cerrar pestaña emergente de la memoria RAM
document.querySelector("#memoriaRamTab .close").addEventListener("click", function() {
    document.getElementById("memoriaRamTab").style.opacity = "0";
    document.getElementById("memoriaRamTab").style.visibility = "hidden";
    document.querySelector("#memoriaRamTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#memoriaRamTab .tab").scrollTop = 0;
    }, 500);
});

// Evento de clic en el botón de cerrar pestaña emergente de la motherboard
document.querySelector("#motherboardTab .close").addEventListener("click", function() {
    document.getElementById("motherboardTab").style.opacity = "0";
    document.getElementById("motherboardTab").style.visibility = "hidden";
    document.querySelector("#motherboardTab .tab").classList.add("tab_close")

    setTimeout(function() {
        document.querySelector("#motherboardTab .tab").scrollTop = 0;
    }, 500);
});

// Evento de clic en el botón de cerrar pestaña emergente del Fuente de Poder
document.querySelector("#powerSupplyTab .close").addEventListener("click", function() {
    document.getElementById("powerSupplyTab").style.opacity = "0";
    document.getElementById("powerSupplyTab").style.visibility = "hidden";
    document.querySelector("#powerSupplyTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#powerSupplyTab .tab").scrollTop = 0;
    }, 500);
});
// Evento de clic en el botón de cerrar pestaña emergente de Dispositivo de Almacenamiento
document.querySelector("#storageTab .close").addEventListener("click", function() {
    document.getElementById("storageTab").style.opacity = "0";
    document.getElementById("storageTab").style.visibility = "hidden";
    document.querySelector("#storageTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#storageTab .tab").scrollTop = 0;
    }, 500);
});

// Evento de clic en el botón de cerrar pestaña emergente de Monitor
document.querySelector("#screenTab .close").addEventListener("click", function() {
    document.getElementById("screenTab").style.opacity = "0";
    document.getElementById("screenTab").style.visibility = "hidden";
    document.querySelector("#screenTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#screenTab .tab").scrollTop = 0;
    }, 500);
});

document.querySelector("#keyboardTab .close").addEventListener("click", function() {
    document.getElementById("keyboardTab").style.opacity = "0";
    document.getElementById("keyboardTab").style.visibility = "hidden";
    document.querySelector("#keyboardTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#keyboardTab .tab").scrollTop = 0;
    }, 500);
});

document.querySelector("#mouseTab .close").addEventListener("click", function() {
    document.getElementById("mouseTab").style.opacity = "0";
    document.getElementById("mouseTab").style.visibility = "hidden";
    document.querySelector("#mouseTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#mouseTab .tab").scrollTop = 0;
    }, 500);
});

document.querySelector("#graphicsTab .close").addEventListener("click", function() {
    document.getElementById("graphicsTab").style.opacity = "0";
    document.getElementById("graphicsTab").style.visibility = "hidden";
    document.querySelector("#graphicsTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#graphicsTab .tab").scrollTop = 0;
    }, 500);
});

document.querySelector("#networkTab .close").addEventListener("click", function() {
    document.getElementById("networkTab").style.opacity = "0";
    document.getElementById("networkTab").style.visibility = "hidden";
    document.querySelector("#networkTab .tab").classList.add("tab_close");

    setTimeout(function() {
        document.querySelector("#networkTab .tab").scrollTop = 0;
    }, 500);
});

*/
//2
/*function openProcesadorTab() {
    document.getElementById("procesadorTab").style.opacity = "1";
    document.getElementById("procesadorTab").style.visibility = "visible";
    document.querySelector("#procesadorTab .tab").classList.remove("tab_close");
}

// Función para abrir la pestaña emergente de la memoria RAM
function openMemoriaRamTab() {
    document.getElementById("memoriaRamTab").style.opacity = "1";
    document.getElementById("memoriaRamTab").style.visibility = "visible";
    document.querySelector("#memoriaRamTab .tab").classList.remove("tab_close");
}

// Evento de clic en la tarjeta del procesador
document.getElementById("procesadorCard").addEventListener("click", openProcesadorTab);

// Evento de clic en la tarjeta de la memoria RAM
document.getElementById("memoriaRamCard").addEventListener("click", openMemoriaRamTab);

// Evento de clic en el botón de cerrar pestaña emergente
document.querySelectorAll(".close").forEach(function(element) {
    element.addEventListener("click", function() {
        this.parentNode.parentNode.classList.add("tab_close");

        setTimeout(function() {
            document.querySelectorAll(".container_tab").forEach(function(element) {
                element.style.opacity = "0";
                element.style.visibility = "hidden";
            });
        }, 500);
    });
});
*/

//1
/*let close = document.querySelectorAll(".close")[0];
let open = document.querySelectorAll(".open")[0];
let tab = document.querySelectorAll(".tab")[0];
let container_tab = document.querySelectorAll(".container_tab")[0];

open.addEventListener("click", function(e) {
    e.preventDefault();
    container_tab.style.opacity = "1";
    container_tab.style.visibility = "visible";
    tab.classList.toggle("tab_close");
});

close.addEventListener("click", function() {
    tab.classList.toggle("tab_close");

    setTimeout(function(e){
    container_tab.style.opacity = "0";
    container_tab.style.visibility = "hidden";
    
}, 300);

});

window.addEventListener("click",function(e){
    console.log(e.target)
    if(e.target == container_tab) {
        tab.classList.toggle("tab_close");
    
    this.setTimeout(function(){
        container_tab.style.opacity = "0";
        container_tab.style.visibility = "hidden";
    }, 300)    

    }
    
})
*/





                        
