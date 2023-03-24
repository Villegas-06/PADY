let livingBeing /*ser vivo*/ = ["Mujer", "Hombre", "No Binario",
    "Animal", "Animal Antropomórficos", "Niñ@"];

let companion = ["Ser/Animal", "Ser/Animal Mutante", "Ser/Animal de Fantasia", 
"Ser/Animal Cyborg", "Ser/Animal Mitologico"];

let object = ["Bolsa", "Camara", "Libro",
    "Botella", "Vela", "Cascabel",
    "Control", "Copa", "Mesa",
    "Cama", "Arma", "Reloj",
    "Lampara", "Espejo", "Lentes",
    "Pluma", "Guantera", "Navaja",
    "Libreta", "Vara", "Monedas",
    "Collar", "Skate", "Botas",
    "Auriculares", "Mapa", "Llave", "Daga", "Libro", "Lazo", 
    "Collar", "Cetro", "Cáliz", "Amuleto", "Recipiente", "Guante", 
    "Espejo", "Flechas", "Arma", "Castillo", "Muñeco", "Instrumento", 
    "Trono", "Corona", "Tecnología", "Portal", "Sombrilla/Paraguas", "Anillo", 
    "Abanico", "Máscara", "Cristales", "Mochila", "Cadenas", "Esposas", "Pergaminos", 
    "Capa", "Vehículo", "Guantes", "Farol", "Tiara", "Campana", "Lentes/Gafas", "Bandera", 
    "Bufanda", "Tapabocas"];

let StyleOptional = ["Digital", "Tradicional",
    "Pixel Art", "Sin Boceto", "Caricatura",
    "Sin Borrar", "Solo Color", "Isométrico"];



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

const dataObject = new Set(object);

let withoutRepeatObject = [...dataObject];


function randomWord() {
    let randomWordLivingBeing = livingBeing[Math.floor(Math.random() * livingBeing.length)];
    let randomWordCompanion = companion[Math.floor(Math.random() * companion.length)];
    let randomWordObject = object[Math.floor(Math.random() * withoutRepeatObject.length)];
    let randomWordSubGenerOptional = subGenerOptional[Math.floor(Math.random() * subGenerOptional.length)];
    let randomWordStyle = StyleOptional[Math.floor(Math.random() * StyleOptional.length)];
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWordLivingBeing + "  +  " + randomWordCompanion +
        "<br> <br>" + randomWordObject + "  +  " + randomWordStyle + "  +  "
        + "<br> <br>" + "<p id='textCenter'>" + randomWordSubGenerOptional + "</p>" + "</h3>"
}


