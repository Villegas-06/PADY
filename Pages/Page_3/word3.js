//Option 3

let object = ["Bolsa", "Camara", "Libro",
    "Botella", "Vela", "Cascabel",
    "Control", "Copa", "Mesa",
    "Cama", "Arma", "Reloj",
    "Lampara", "Espejo", "Lentes",
    "Pluma", "Guantera", "Navaja",
    "Libreta", "Vara", "Monedas",
    "Collar", "Skate", "Botas",
    "Auriculares", "Mapa"];

let action = ["Dormir", "Saltar", "Soñar",
    "Jugar", "Descansar", "Bailar",
    "Correr", "Volar", "Silbar",
    "Buscar", "Cantar", "Cocinar",
    "Escribir", "Caminar", "Leer",
    "Hablar", "Caer", "Escuchar",
    "jugar"];

let scenery = ["Teatro", "Cancha", "Estadio",
    "Carretera", "Campo", "Selva",
    "Monte nevado", "Cueva", "Montaña",
    "Mar", "Playa", "Volcan",
    "Espacio", "Luna", "Japón",
    "Restaurante", "Jardín", "Techo",
    "Castillo", "Sótano", "Callejón",
    "Isla", "Habitación", "Ciudad",
    "Terraza", "Cueva"];


function randomWord() {
    let randomWordObject = object[Math.floor(Math.random() * object.length)];
    let randomWordAction = action[Math.floor(Math.random() * action.length)];
    let randomWordScenery = scenery[Math.floor(Math.random() * scenery.length)];
    console.log(randomWord)
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWordObject + "  +  " + randomWordAction +
        "  +  " + randomWordScenery + "</h3>"
}


