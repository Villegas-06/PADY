//Option 2                    

let nature = ["Hojas", "Rocas", "Agua",
    "Flores", "Montaña", "Fuego",
    "Gas", "Pasto", "Viento",
    "Cascada", "Sol", "Olas",
    "Hiedra", "Tornado", "fogata",
    "Tormenta", "Lluvia", "Lava",
    "Cristales", "Rayo", "Bosque", "Nubes",
    "Rayo", "Sol", "Lluvia", "Nublado", "Nieve",
    "Cristales", "Raíces", "Tronco", "Nube", "Capullo",
    "Luna", "Vapor", "Burbujas", "Planta", 'Magma', 'Viscoso',
    'Nocturno'];

let noNature = ["Espada", "Casa", "Espada",
    "Cofre", "Cinta", "Autobus",
    "Vaso", "Mochila", "Celular",
    "Violín", "Escudo", "Habitación",
    "Tubo de ensayo", "Caldero", "Libros",
    "Botella", "Lampara", "Santuario", "Estatuas",
    "Puerta", "Castillo",
    "Torre", "Vara", "Trono", "Cetro", "Arco", "Portal", "Poción",
    "Frasco", "Puente", "Reloj", "Cabaña", "Isla", "Martillo", "Carreta",
    "Lata", "Jaula", "Silla", "Caja", "Canasta", "Esposas", "Cadenas",
    "Llave", "Daga", "Libro", "Lámpara", "Collar", "Cetro", "Cáliz", "Amuleto",
    "Recipiente", "Guante", "Espejo", "Flechas", "Arma", "Castillo", "Muñeco",
    "Instrumento", "Trono", "Corona", "Tecnología", "Portal", "Sombrilla/Paraguas",
    "Anillo", "Abanico", "Máscara", 'Escultura', 'Traje', 'Casco', 'Alas', 'Armadura'];


const dataNature = new Set(nature);
const dataNoNature = new Set(noNature);

let withoutRepeatNature = [...dataNature];
let withoutRepeatNoNature = [...dataNoNature];

/*console.log(`${nature} ---> Pagina 2 --> Nature`);
console.log(`${noNature} ---> Pagina 2 --> noNature`);*/



function randomWord() {
    let randomWordNature = nature[Math.floor(Math.random() * withoutRepeatNature.length)];
    let randomWordNoNature = noNature[Math.floor(Math.random() * withoutRepeatNoNature.length)];
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWordNature + " + " + randomWordNoNature + "</h3>"
}


