//Option 2                    

let nature = ["Hojas", "Rocas", "Agua",
    "Flores", "Montaña", "Fuego",
    "Gas", "Pasto", "Viento",
    "Cascada", "Sol", "Olas",
    "Hiedra", "Tornado", "fogata",
    "Tormenta", "Lluvia", "Lava",
    "Cristales", "Rayo", "Bosque", "Nubes,"];

let noNature = ["Espada", "Casa", "Espada",
    "Cofre", "Cinta", "Autobus",
    "Vaso", "Mochila", "Celular",
    "Violín", "Escudo", "Habitación",
    "Tubo de ensayo", "Caldero", "Libros",
    "Botella", "Lampara", "Santuario", "Estatuas",
    "Puerta", "Castillo",
    "Torre", "Vara", "Trono", "Cetro", "Arco", "Portal", "Poción",
    "Frasco", "Puente", "Reloj", "Cabaña", "Isla", "Martillo", "Carreta",
    "Lata", "Jaula", "Silla", "Caja", "Canasta", "Esposas", "Cadenas"];




function randomWord() {
    let randomWordNature = nature[Math.floor(Math.random() * nature.length)];
    let randomWordNoNature = noNature[Math.floor(Math.random() * noNature.length)];
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWordNature + "+" + randomWordNoNature + "</h3>"
}


