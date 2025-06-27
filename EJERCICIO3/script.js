// script.js

// 1. Obtener referencias a los elementos HTML
const completedTasksList = document.getElementById('completedTasksList'); // El <ul> donde mostraremos las tareas
const loadingMessage = document.getElementById('loadingMessage');     // El mensaje de "Cargando..."
const errorMessage = document.getElementById('errorMessage');       // El mensaje de error

// 2. URL de la API de JSONPlaceholder para obtener todas las tareas (todos)
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

/**
 * 3. Función asíncrona para obtener y mostrar las tareas completadas.
 */
async function fetchAndDisplayCompletedTasks() {
    // Mostrar el mensaje de carga y ocultar el error si estaba visible
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    errorMessage.textContent = ''; // Limpiar el texto del error

    try {
        // Realizar la petición GET a la API
        // 'await' espera a que la promesa de 'fetch' se resuelva
        const response = await fetch(API_URL);

        // Verificar si la respuesta de la red fue exitosa (status 200 OK)
        if (!response.ok) {
            // Si la respuesta no fue OK, lanzar un error
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }

        // Convertir la respuesta a formato JSON
        // 'await' espera a que la promesa de 'json()' se resuelva
        const todos = await response.json();

        // Filtrar las tareas: usar el método 'filter' para quedarse solo con las tareas 'completed: true'
        const completedTodos = todos.filter(task => task.completed === true);

        // Limpiar el contenido previo de la lista
        completedTasksList.innerHTML = '';

        // Verificar si se encontraron tareas completadas
        if (completedTodos.length === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = "No se encontraron tareas completadas.";
            completedTasksList.appendChild(listItem);
            loadingMessage.style.display = 'none'; // Ocultar mensaje de carga
            return;
        }

        // Iterar sobre las tareas completadas con 'forEach' y mostrarlas en el HTML
        // para cada tarea completada, crear un elemento <li> y añadirlo al <ul>
        completedTodos.forEach(task => {
            const listItem = document.createElement('li'); // Crea un nuevo elemento de lista
            listItem.textContent = task.title; // El texto del <li> será el título de la tarea
            completedTasksList.appendChild(listItem); // Añade el <li> a la lista <ul>
        });

    } catch (error) {
        // Capturar cualquier error que ocurra durante la petición o el procesamiento
        console.error('Hubo un error al obtener las tareas:', error);
        loadingMessage.style.display = 'none'; // Ocultar mensaje de carga
        errorMessage.textContent = `Error al cargar las tareas: ${error.message}`;
        errorMessage.style.display = 'block'; // Mostrar el mensaje de error
        completedTasksList.innerHTML = ''; // Limpiar la lista en caso de error
    } finally {
        // Este bloque se ejecuta siempre, independientemente de si hubo un error o no
        loadingMessage.style.display = 'none'; // Asegurarse de ocultar el mensaje de carga al finalizar
    }
}

// 4. Llamar a la función cuando el DOM esté completamente cargado
// Esto asegura que los elementos HTML estén disponibles antes de intentar manipularlos
document.addEventListener('DOMContentLoaded', fetchAndDisplayCompletedTasks);