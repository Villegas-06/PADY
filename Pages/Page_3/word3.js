//Option 3

let object = ["Bolsa", "Camara", "Libro",
    "Botella", "Vela", "Cascabel",
    "Control", "Copa", "Mesa",
    "Cama", "Arma", "Reloj",
    "Lampara", "Espejo", "Lentes",
    "Pluma", "Guantera", "Navaja",
    "Libreta", "Vara", "Monedas",
    "Collar", "Skate", "Botas",
    "Auriculares", "Mapa",
    "Cuadro", "Auriculares", "Skate", "Reloj de bolsillo",
    "Tijeras", "Daga", "Poción", "Abanico", "Maleta",
    "Lentes/Gafas", "Bebida", "Máscara", "Tiara", "Lazo",
    "Campana", "Farol", "Velas", "Tapabocas", "Guantes", "Capa"];

let action = ["Dormir", "Saltar", "Soñar",
    "Jugar", "Descansar", "Bailar",
    "Correr", "Volar", "Silbar",
    "Buscar", "Cantar", "Cocinar",
    "Escribir", "Caminar", "Leer",
    "Hablar", "Caer", "Escuchar",
    "jugar", "Despertar", "Beber", "Comer",
    "Apuñalar", "Cantar", "Levitar", "Disparar",
    "Reir", "Llorar", "Traicionar"];

let scenery = ["Teatro", "Cancha", "Estadio",
    "Carretera", "Campo", "Selva",
    "Monte nevado", "Cueva", "Montaña",
    "Mar", "Playa", "Volcan",
    "Espacio", "Luna", "Japón",
    "Restaurante", "Jardín", "Techo",
    "Castillo", "Sótano", "Callejón",
    "Isla", "Habitación", "Ciudad",
    "Terraza", "Cueva", "Laguna", "Cabaña",
    "Granja", "Cascada", "Habitación", "Terraza",
    "Reino", "Lugar favorito", "Profundidades/Submarino", "Puente"];


const dataObject = new Set(object);
const dataAction = new Set(action);
const dataScenery = new Set(scenery);

let withoutRepeatObject = [...dataObject];
let withoutRepeatAction = [...dataAction];
let withoutRepeatScenery = [...dataScenery];


console.log(`${object} ---> Pagina 3 --> Objeto`);
console.log(`${action} ---> Pagina 3 --> Accion`);
console.log(`${scenery} ---> Pagina 3 --> Escenario`);


function randomWord() {
    let randomWordObject = object[Math.floor(Math.random() * withoutRepeatObject.length)];
    let randomWordAction = action[Math.floor(Math.random() * withoutRepeatAction.length)];
    let randomWordScenery = scenery[Math.floor(Math.random() * withoutRepeatScenery.length)];
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWordObject + "  +  " + randomWordAction +
        "  +  " + randomWordScenery + "</h3>"
}


