// script.js

// 1. Lista de palabras predefinidas
const words = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

// 2. Obtener referencias a los elementos HTML
const filterInput = document.getElementById('filterInput'); // Campo de texto para el filtro
const filterButton = document.getElementById('filterButton'); // Botón para filtrar
const wordListDisplay = document.getElementById('wordListDisplay'); // Contenedor para mostrar las palabras
const errorMessage = document.getElementById('errorMessage'); // Elemento para mostrar mensajes de error

/**
 * 3. Función para mostrar la lista de palabras en la página.
 * @param {Array<string>} wordsToDisplay - El array de palabras que se mostrarán.
 */
function displayWords(wordsToDisplay) {
    // Limpiar cualquier contenido previo en la lista
    wordListDisplay.innerHTML = '';

    // Si no hay palabras para mostrar, indicarlo
    if (wordsToDisplay.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = "No se encontraron palabras que coincidan.";
        wordListDisplay.appendChild(listItem);
        return;
    }

    // Crear un elemento de lista (<li>) para cada palabra y añadirlo al <ul>
    wordsToDisplay.forEach(word => {
        const listItem = document.createElement('li'); // Crea un nuevo elemento <li>
        listItem.textContent = word; // Establece el texto del <li> a la palabra
        wordListDisplay.appendChild(listItem); // Añade el <li> al <ul>
    });
}

/**
 * 4. Función para filtrar la lista de palabras.
 * Se ejecuta cuando se hace clic en el botón "Filtrar".
 * @param {Event} event - El objeto de evento (usado para prevenir el comportamiento por defecto del formulario).
 */
function filterWords(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtener el texto ingresado por el usuario, eliminando espacios al inicio y final
    const filterText = filterInput.value.trim();

    // Validar si el campo de texto está vacío
    if (filterText === '') {
        errorMessage.style.display = 'block'; // Mostrar el mensaje de error
        displayWords([]); // Opcional: limpiar la lista o mostrar un mensaje específico
        return; // Detener la ejecución de la función
    } else {
        errorMessage.style.display = 'none'; // Ocultar el mensaje de error si no está vacío
    }

    // Convertir el texto de filtro a minúsculas para una búsqueda sin distinción de mayúsculas/minúsculas
    const lowerCaseFilterText = filterText.toLowerCase();

    // Filtrar la lista de palabras
    const filtered = words.filter(word => {
        // Convertir cada palabra a minúsculas antes de verificar si incluye el texto de filtro
        return word.toLowerCase().includes(lowerCaseFilterText);
    });

    // Mostrar las palabras filtradas en la página
    displayWords(filtered);
}

// 5. Event Listeners: Asignar funciones a eventos
// Cuando la página se carga completamente, mostrar todas las palabras inicialmente
document.addEventListener('DOMContentLoaded', () => {
    displayWords(words);
});

// Cuando se hace clic en el botón "Filtrar" o se envía el formulario (ej. presionar Enter en el input)
filterButton.addEventListener('click', filterWords);
filterInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        filterWords(event);
    }
});