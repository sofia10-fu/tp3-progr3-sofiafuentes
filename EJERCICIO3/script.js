// script.js

// Función asíncrona para obtener y mostrar las tareas
async function fetchAndDisplayTodos() {
    // Obtenemos referencias a los elementos del DOM donde mostraremos información
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const todosList = document.getElementById('todos-list');

    // Mostrar mensaje de carga y limpiar cualquier contenido o error anterior
    loadingMessage.classList.remove('hidden'); // Hace visible el mensaje de "Cargando..."
    errorMessage.classList.add('hidden');    // Oculta cualquier mensaje de error previo
    todosList.innerHTML = '';                // Limpia la lista de tareas existente

    try {
        // Realizar la petición GET a la API de JSONPlaceholder para obtener todas las tareas
        // La función 'fetch()' devuelve una Promesa que resuelve a un objeto Response.
        // 'await' pausa la ejecución de esta función hasta que la Promesa se resuelva.
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        // Verificar si la respuesta de la red fue exitosa (código de estado 200-299)
        if (!response.ok) {
            // Si la respuesta no es exitosa, lanzamos un error con el estado HTTP para que el bloque 'catch' lo capture.
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Convertir el cuerpo de la respuesta a formato JSON
        // 'response.json()' también devuelve una Promesa, por lo que usamos 'await' de nuevo.
        const todos = await response.json();

        // Utilizar el método 'filter()' para quedarnos solo con las tareas que han sido completadas
        // 'filter()' crea un nuevo array con todos los elementos que pasan la prueba de la función proporcionada.
        const completedTodos = todos.filter(todo => todo.completed === true);

        //  Utilizar 'forEach()' para iterar sobre las tareas completadas y mostrarlas en la lista <ul> del HTML
        if (completedTodos.length === 0) {
            // Si no hay tareas completadas, mostramos un mensaje indicándolo.
            todosList.innerHTML = '<li class="text-center text-gray-500">No se encontraron tareas completadas.</li>';
        } else {
            // Si hay tareas completadas, las añadimos a la lista
            completedTodos.forEach(todo => {
                // Crear un nuevo elemento de lista (<li>) para cada tarea
                const listItem = document.createElement('li');
                // Asignar el texto de la tarea al elemento <li>, incluyendo su ID y título
                listItem.textContent = `ID: ${todo.id} - ${todo.title}`;
                // Añadir el elemento <li> recién creado como hijo de la lista <ul>
                todosList.appendChild(listItem);
            });
        }
    } catch (error) {
        // Capturar y mostrar cualquier error que ocurra durante la petición o el procesamiento
        console.error('Hubo un problema con la petición:', error); // Imprime el error en la consola del navegador
        errorMessage.textContent = `Error al cargar las tareas: ${error.message}. Por favor, inténtalo de nuevo más tarde.`; // Muestra un mensaje de error al usuario
        errorMessage.classList.remove('hidden'); // Hace visible el mensaje de error
    } finally {
        // Ocultar el mensaje de carga una vez que la operación ha terminado (éxito o error)
        loadingMessage.classList.add('hidden'); // Oculta el mensaje de "Cargando..."
    }
}

// Ejecutar la función 'fetchAndDisplayTodos' cuando el DOM esté completamente cargado.
// Esto asegura que todos los elementos HTML necesarios (como 'todos-list') existan antes de que el script intente manipularlos.
document.addEventListener('DOMContentLoaded', fetchAndDisplayTodos);