// listado donde se guardan los nombres
let amigos = [];

// Función para añadir un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    //obtenemos nombre y eliminamos espacio en blanco.
    let nombre = input.value.trim();

    //no permitimos vacio 
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Agregar a la lista
    amigos.push(nombre);

    // Mostrar el nombre en la lista de <ul>lista no ordenada
    let li = document.createElement("li");
    li.textContent = nombre;
    document.getElementById("listaAmigos").appendChild(li);

    // Limpiar el input
    input.value = "";
    input.focus();
}

// Función para sortear un nombre de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    // Elegir ganador aleatorio
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar en la listado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultados anteriores
    let li = document.createElement("li");
    li.textContent = "El ganador es: " + ganador;
    resultado.appendChild(li);
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
