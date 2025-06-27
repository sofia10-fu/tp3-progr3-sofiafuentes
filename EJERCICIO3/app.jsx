// src/App.jsx
import React, { useState, useEffect } from 'react'; // Importamos los hooks useState y useEffect de React
import Item from './Item'; // Importamos el componente Item desde el mismo directorio o un subdirectorio como './components/Item'

// Componente funcional principal de nuestra aplicación
function App() {
    // Definimos un estado para almacenar el array de todas las tareas obtenidas de la API
    const [todos, setTodos] = useState([]);
    // Estado booleano para indicar si los datos se están cargando (útil para mostrar un spinner/mensaje)
    const [loading, setLoading] = useState(true);
    // Estado para almacenar cualquier mensaje de error que pueda ocurrir durante la petición
    const [error, setError] = useState(null);

    // useEffect es un hook que nos permite realizar efectos secundarios en componentes funcionales.
    // El segundo argumento, un array vacío ([]), asegura que este efecto se ejecute solo una vez
    // después del renderizado inicial del componente (similar a componentDidMount en clases).
    useEffect(() => {
        // Función asíncrona para realizar la petición a la API
        const fetchTodos = async () => {
            try {
                // Restablecemos los estados de error y carga al inicio de cada intento de petición
                setError(null);
                setLoading(true);

                // 1. Realizar la petición GET a la API de JSONPlaceholder para obtener todas las "tareas" (/todos)
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');

                // Verificamos si la respuesta de la red fue exitosa (código de estado 200-299)
                if (!response.ok) {
                    // Si la respuesta no es exitosa, lanzamos un error con el estado HTTP
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                // Convertimos la respuesta del servidor a formato JSON
                const data = await response.json();

                // Actualizamos el estado 'todos' con los datos obtenidos de la API
                setTodos(data);
            } catch (err) {
                // Capturamos cualquier error que ocurra durante la petición o el procesamiento del JSON
                console.error("Error al obtener las tareas:", err);
                // Establecemos un mensaje de error legible para el usuario
                setError("No se pudieron cargar las tareas. Por favor, inténtalo de nuevo más tarde.");
            } finally {
                // Finalmente, independientemente de si la petición fue exitosa o falló,
                // marcamos la carga como completada.
                setLoading(false);
            }
        };

        // Llamamos a la función para iniciar la obtención de datos cuando el componente se monta
        fetchTodos();
    }, []); // Array de dependencias vacío, el efecto se ejecuta una sola vez.

    // 2. Utilizar el método 'filter' para quedarnos solo con las tareas que han sido completadas (completed: true)
    // Esto se recalcula cada vez que el estado 'todos' cambia.
    const completedTodos = todos.filter(todo => todo.completed === true);

    return (
        // Contenedor principal con estilos de Tailwind CSS para un diseño centrado y responsivo.
        // min-h-screen asegura que ocupa al menos el 100% de la altura de la ventana.
        <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6 sm:p-10 font-sans">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
                {/* Título de la aplicación */}
                <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
                    Tareas Completadas
                </h1>

                {/* Mostrar mensaje de carga si 'loading' es verdadero */}
                {loading && (
                    <p className="text-center text-gray-600 text-lg animate-pulse">Cargando tareas...</p>
                )}

                {/* Mostrar mensaje de error si 'error' no es nulo */}
                {error && (
                    <p className="text-center text-red-500 text-lg font-medium">
                        {error}
                    </p>
                )}

                {/* Renderizar la lista de tareas si no estamos cargando y no hay errores */}
                {!loading && !error && (
                    <>
                        {/* Mostrar un mensaje si no hay tareas completadas después de la carga */}
                        {completedTodos.length === 0 && (
                            <p className="text-center text-gray-500 text-lg">
                                No se encontraron tareas completadas.
                            </p>
                        )}
                        {/* 3. Mostrar las tareas completadas en el HTML dentro de una lista <ul> */}
                        <ul className="list-none p-0 space-y-3">
                            {/* Mapeamos el array de 'completedTodos' para renderizar un componente 'Item' por cada tarea.
                                La prop 'key' es fundamental en React para identificar cada elemento de la lista de forma única. */}
                            {completedTodos.map(todo => (
                                <Item key={todo.id} todo={todo} />
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default App; // Exportamos el componente App para que pueda ser importado en index.jsx