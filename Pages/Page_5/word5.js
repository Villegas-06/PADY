let livingBeing /*ser vivo*/ = ["Mujer", "Hombre", "No Binario",
    "Animal", "Planta"];

let companion = ["Animal Doméstico", "Animal Mutante", "Animal de Fantasía",
    "Cyborg Animal", "Animal Mitológico"];

let object = ["Bolsa", "Camara", "Libro",
    "Botella", "Vela", "Cascabel",
    "Control", "Copa", "Mesa",
    "Cama", "Arma", "Reloj",
    "Lampara", "Espejo", "Lentes",
    "Pluma", "Guantera", "Navaja",
    "Libreta", "Vara", "Monedas",
    "Collar", "Skate", "Botas",
    "Auriculares", "Mapa"];

let StyleOptional = ["Acuarela", "Digital", "Tradicional",
    "Oleo", "Pixel Art", "Sin Boceto",
    "Sin Borrar", "Solo Color"]



let subGenerOptional = ["Alta Fantasía <br> <br> Mundo Imaginario - Épica  -  Inspiración Medieval y Celta Ejemplos: El Señor De Los Anillos – The Witcher",
"Fantasía Oscura <br> <br> Atmosfera Sombría - Magia Negra - Mundo Imaginario Ejemplos: La Torres Oscura - Dark Souls",
"Fantasía Histórica <br> <br> Mundo Real - Momentos Históricos Datables - Criaturas Ejemplo: Inuyasha - Outlander",
"Cuentos de Hadas <br> <br> Mundo imaginario inspirado en la Realidad – Magia – Personajes Arquetípicos Ejemplo: Maléfica – Blanca Nieves",
"Steampunk <br> <br> Retrofuturismo –  Vapor y Engranajes – Inspiración en el siglo XlX  Ejemplo: Frankenstein - Bloodborne",
"Space Opera <br> <br> Planetas Imaginarios – Aventuras por el Espacio – Diversidad de Razas y Sociedades Ejemplo: La Guerra De Las Galaxias – Star Citizen",
"Baja Fantasia <br> <br> Magia – Entornos Urbanizados – Instituciones reconocibles Ejemplo: Harry Potter – Mary Poppins",
"Ciencia Ficción Distopica <br> <br> Inspiración en el mundo Real – Sociedades Opresivas – Revolucionarios Ejemplo: Los Juegos Del Hambre - Divergente",
"Conquista Terrestre <br> <br> Mundo Real – Invasión Extraterrestre – Reacción Militarizada Ejemplo: El Juego De Ender – La Guerra De Los Mundos",
"Grimdark <br> <br> Antiheroicidad – Mundo Imaginario – Dramatismo Ejemplo: Juego De Tronos – El Ángel De La Noche",
"Ciencia Ficción Post-Apocalíptico <br> <br> Inspiración en el mundo Real – Catástrofe – Decadencia Urbana Ejemplo: The Last Of Us – Guerra Mundial Z",
"Dieselpunk <br> <br> Retrofuturismo – Inspiración en la primera mitad del siglo XX -  Art Deco Ejemplo: Bioshock – Capitán América",
"Conquista Espacial <br> <br> Mundo Real – Tecnología Desarrollada – Colonización de otros Planetas Ejemplo: Frist Man – Apollo 13",
"Ciencia Ficción Ucrónica <br> <br> Mundo Real – Alteración de la Historia – Realidades alternativas Ejemplo: Fallout – 11.23.63",
"Ciencia Ficción Utópica <br> <br> Alto desarrollo Tecnológico – Futuro Posible – Inspiración en el mundo Real Ejemplo: Tron Legacy - Robots",
"Cyberpunk <br> <br> Biotecnología Avanzada – Distopia – Bajo nivel de Vida Ejemplo: Terminator - Blade Runner"];


function randomWord() {
    let randomWordLivingBeing = livingBeing[Math.floor(Math.random() * livingBeing.length)];
    let randomWordCompanion = companion[Math.floor(Math.random() * companion.length)];
    let randomWordObject = object[Math.floor(Math.random() * object.length)];
    let randomWordSubGenerOptional = subGenerOptional[Math.floor(Math.random() * subGenerOptional.length)];
    let randomWordStyle = StyleOptional[Math.floor(Math.random() * StyleOptional.length)];
    console.log(randomWord)
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWordLivingBeing + "  +  " + randomWordCompanion +
        "<br> <br>" + randomWordObject + "  +  " + randomWordStyle + "  +  "
        + "<br> <br>" + "<p id='textCenter'>" + randomWordSubGenerOptional + "</p>" + "</h3>"
}


