
let livingBeing /*ser vivo*/ = ["Mujer", "Hombre", "No Binario",
    "Animal", "Planta", "Niñ@", "Animales antropomórficos", "Golem", 
    "Duende", "Hada", "Espíritu"];

let object = ["Bolsa", "Camara", "Libro",
    "Botella", "Vela", "Cascabel",
    "Control", "Copa", "Mesa",
    "Cama", "Arma", "Reloj",
    "Lampara", "Espejo", "Lentes",
    "Pluma", "Guantera", "Navaja",
    "Libreta", "Vara", "Monedas",
    "Collar", "Skate", "Botas",
    "Auriculares", "Mapa", "Llave", "Daga", 
    "Libro", "Farol", "Collar", "Cetro", "Cáliz", 
    "Amuleto", "Recipiente", "Guantes", "Espejo", 
    "Poción", "Flechas", "Arma", "Castillo", "Muñeco", 
    "Lazo", "Instrumento", "Trono", "Corona", "Tecnología", 
    "Portal", "Sombrilla/Paraguas", "Anillo", "Abanico", "Máscara", 
    "Cristales", "Mochila", "Cadenas", "Esposas", "Pergaminos", "Capa"];

let elementNature = ["Agua", "Tierra", "Fuego",
    "Aire", "Metal", "Goma",
    "Gas", "Electrico", "Naturaleza"];

let amountColors = ["Monocromático", "Complementarios", "Triada",
    "Análogos", "Adyacentes", "Tetraedica"];






function randomWord() {
    let randomWordLivingBeing = livingBeing[Math.floor(Math.random() * livingBeing.length)];
    let randomWordObject = object[Math.floor(Math.random() * object.length)];
    let randomWordElementNature = elementNature[Math.floor(Math.random() * elementNature.length)];
    let randomWordAmountColors = amountColors[Math.floor(Math.random() * amountColors.length)];
    console.log(randomWord)
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWordLivingBeing + "  +  " + randomWordObject + "  +  "
        + "<br> <br>" + randomWordElementNature + "  +  " + randomWordAmountColors + "</h3>"
}


