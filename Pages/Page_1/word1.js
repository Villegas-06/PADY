//Option 1
let thingRandom = ["Química", "Burbujas", "Luz",
    "Postre", "Silencio", "Flotar",
    "Hongo", "Agua", "Gigante",
    "Mochila", "Viento", "Cristal",
    "Candelabro", "Sociedad", "Censura", "Grieta", "Velo", "Locura", "Bruja", "Magia", "Mariposa", "Hada", "Sirena", "Elfo",
    "Celestial", "Demonio", "Deseo", "Sueños", "Fantasía", "Viaje", "Alma", "Sombra", "Ninfa", "Calamidad", "Destrucción",
    "Reconstrucción", "Reina", "Miedo", "Soledad", "Vértigo", "Fresco", "Agua", "Tierra", "Naufrago", "Perspectiva", "Pesadilla",
    "Monstruo", "Traición", "Pueblo", "Suaves", "Liviano", "Rey", "Monotonía", "Pasión", "Elegancia", "LGTB", "Globo", "Luna",
    "Estrellas", "Planeta", "Sangre", "Herida", "Ventana", "Vendaje", "Muñeca", "Libro", "Paisaje", "Cinta", "Explotar", "Sacrificio",
    "Lagrimas", "Refugio", "Ahogarse", "Horóscopo", "Fuente", "Antiguo", "Alegría", "Diversión", "Amar", "Melodía", "Agujero", "ojos",
    "Diamante", "Escancia", "Sobrenatural", "Halloween", "Película", "Superhéroe", "Villano", "Timidez", "Elegante", "Belleza",
    "Puro", "Ukelele", "Vampiro", "Frustración", "Ansiedad", "Bestia", "Insomnio", "Tiempo", "Veneno", "Futuro", "Muerte", "Toxico",
    "Celular", "Varita", "Hechizo", "Joyas", "Tijeras", "Dulce", "Serie", "Consola", "Videojuego", "Colorido",
    "Mancha", "infancia", "Jazz", "Canasta", "Cactus",
    "Girasol", "Planta Carnivora", "Calabaza", "Abeja",
    "Collar", "Tiara", "Sapo", "Fresa", "Personaje", "Mitico",
    "Dinosaurio", "Pasado", "Sumergido", "Serpiente", "Auto",
    "Basura", "Fantasma", "Zombie", "Caballero", "Ancian@", "Princesa",
    "Rostro", "Criatura", "Bosque", "Campo", "Playa", "Energía", "Mar/Oceano",
    "Insecto", "Infancia", "Tiempo", "Flecha", "Luna", "Sol", "Estrella", "Nublado",
    "Exterior", "Interior", "Metálico", "Joya", "Valioso", "Cantidad",
    "Máquina expendedora", "Entrada", "Ventana", "Hilo", "Pantalla", "Libro", "Conexión",
    "Carta", "Asia", "Multicolor", "Forma", "Uno", "Velocidad", "Alto", "Bajo", "Secreto", "Acción",
    "Destrucción", "Creación", "Defensa", "Tú", "Mentira", "Odio", "Alegría", "Cansancio", "Seguridad", "Viejo", "Nuevo", "Ligero",
    "Animal", "Ancestral", "Poder", "Robot", "Cyborg", "Perspectiva", "Neón", "Meme", "viaje", "Hada", "Mago", "Espiritu", "Videojuego",
    "Mascota", "Especie", "Dolor", "Memoria", "Soledad", "Magia", "Cabaña", "Caja de jugo", "Serie", "Arcade", "Escalera", "Bombilla",
    "Espejo", "Florero", "Patineta", "Silla", "Audífonos", "Cámara", "Caja", "Micrófono", "Vara", "Sartén", "Aviso", "Isometrico",
    "Pixelart", "OVNI", "Deidad", "Demonio", "Alas", "Extraterrestre", "Dragon", "Garras", "Alma", "Casco", "Pelicula", 'Pez', 'Templo',
    'Brujería', 'Almas', 'Alquimia', 'Dobodles', 'Golem', 'Magma', 'Slime', 'Textura', 'Micro', 'Macro', 'Tentáculos', 'Búho', 'Simétrico',
    'Caos', 'Mixto', 'Piedra', 'División', 'Clonar', 'Diabólico', 'Mecha', 'Guerrero', 'Medusa', 'Ajolote', 'Albino', 'Heterocromía', 'Vitíligo',
    'Afro', 'Chibi', 'Petrificación', 'Víbora', 'Jade', 'Abandono', 'Espacio', 'Geisha', 'Musa', 'Prohibido', 'Props', 'Tierno', 'Poder', 'Pixie',
    'Sirena', 'Licántropo', 'Vampiro', 'Zombie', 'Instrumento', 'Luciérnaga', 'Turón', 'Zorro', 'Sapo', 'Rana', 'Panda rojo', 'Pingüino', 'Foca',
    'Pato', 'Mapache', 'Disney', 'Pixar', 'Studio Ghibli', 'DreamWorks', 'Sony Pictures A', 'Aardman Animation', 'Laika estudio', 'Nintendo',
    'PlayStation', 'Teléfono'];



//console.log(`${thingRandom} ---> Pagina 1`);


const dataThingRandom = new Set(thingRandom);

let withoutRepeat = [...dataThingRandom];




function randomWord() {
    let randomWord = thingRandom[Math.floor(Math.random() * withoutRepeat.length)];
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWord + "</h3>"
}


