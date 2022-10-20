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
    "lagrimas", "Refugio", "Ahogarse", "Horóscopo", "Fuente", "Antiguo", "Alegría", "Diversión", "Amar", "Melodía", "Agujero", "ojos",
    "diamante", "Escancia", "Sobrenatural", "Halloween", "Película", "Superhéroe", "Villano", "Timidez", "Elegante", "Belleza",
    "Puro", "Ukelele", "Vampiro", "Frustración", "Ansiedad", "Bestia", "Insomnio", "Tiempo", "Veneno", "Futuro", "Muerte", "Toxico",
    "Celular", "Varita", "Hechizo", "Joyas", "Tijeras", "Dulce", "Serie", "Consola", "Videojuego", "Colorido",
    "Mancha", "infancia", "Jazz", "Canasta", "Cactus",
    "Girasol", "Planta Carnivora", "Calabaza", "Abeja",
    "Collar", "Tiara", "Sapo", "Fresa", "Personaje", "Mitico",
    "Dinosaurio", "Pasado", "Sumergido", "Serpiente", "Auto",
    "Basura", "Fantasma", "Zombie"];





function randomWord() {
    let randomWord = thingRandom[Math.floor(Math.random() * thingRandom.length)];
    console.log(randomWord)
    document.getElementById("canvaWord").innerHTML = "<h3>" + randomWord + "</h3>"
}


