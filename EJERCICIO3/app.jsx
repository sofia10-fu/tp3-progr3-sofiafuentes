// src/App.jsx
import React, { useState, useEffect } from 'react'; // Importamos los hooks useState para el estado y useEffect para efectos secundarios
import Item from './Item.jsx'; // Importamos el componente Item que creamos para cada tarea individual

// Componente funcional principal de nuestra aplicación React
function App() {
    // Estado para almacenar todas las tareas obtenidas de la API. Inicialmente es un array vacío.
    const [todos, setTodos] = useState([]);
    // Estado booleano para indicar si los datos se están cargando. Inicialmente es true.
    const [loading, setLoading] = useState(true);
    // Estado para almacenar cualquier mensaje de error que pueda ocurrir durante la petición. Inicialmente es null.
    const [error, setError] = useState(null);

    // useEffect es un hook que nos permite realizar efectos secundarios en componentes funcionales.
    // El segundo argumento, un array vacío ([]), significa que este efecto se ejecutará
    // solo una vez después del renderizado inicial del componente (similar a componentDidMount).
    useEffect(() => {
        // Definimos una función asíncrona para realizar la petición HTTP.
        const fetchTodos = async () => {
            try {
                // Antes de iniciar la petición, reiniciamos los estados de error y carga.
                setError(null); // Limpiamos cualquier error previo
                setLoading(true); // Indicamos que estamos cargando datos

                // 1. Realizamos la petición GET a la API de JSONPlaceholder para obtener todas las "tareas" (/todos).
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');

                // Verificamos si la respuesta de la red fue exitosa (códigos de estado 200-299).
                if (!response.ok) {
                    // Si la respuesta no es exitosa, lanzamos un error personalizado.
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                // Convertimos la respuesta de la API a formato JSON.
                const data = await response.json();

                // Actualizamos el estado 'todos' con los datos recibidos de la API.
                setTodos(data);
            } catch (err) {
                // Capturamos cualquier error que ocurra durante la petición o el procesamiento del JSON.
                console.error("Error al obtener las tareas:", err);
                // Establecemos un mensaje de error legible para el usuario.
                setError("No se pudieron cargar las tareas. Por favor, inténtalo de nuevo más tarde.");
            } finally {
                // Finalmente, independientemente de si la petición fue exitosa o falló,
                // marcamos la carga como completada.
                setLoading(false);
            }
        };

        // Llamamos a la función 'fetchTodos' para iniciar la obtención de datos cuando el componente se monta.
        fetchTodos();
    }, []); // El array de dependencias vacío asegura que este efecto se ejecute una única vez.

    // 2. Utilizamos el método 'filter' para quedarnos solo con las tareas que han sido completadas (completed: true).
    // Esta operación se realiza cada vez que el estado 'todos' cambia, asegurando que la lista de tareas completadas esté siempre actualizada.
    const completedTodos = todos.filter(todo => todo.completed === true);

    return (
        // Contenedor principal de la aplicación con estilos de Tailwind CSS.
        // - min-h-screen: Asegura que el contenedor ocupa al menos el 100% de la altura de la ventana.
        // - bg-gray-100: Color de fondo gris claro para la página.
        // - flex items-start justify-center: Centra el contenido horizontalmente y lo alinea al inicio verticalmente.
        // - p-6 sm:p-10: Añade relleno responsivo.
        // - font-sans: Usa una fuente sans-serif genérica.
        <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6 sm:p-10 font-sans">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
                {/* Título principal de la aplicación */}
                <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
                    Tareas Completadas
                </h1>

                {/* Renderizado condicional: Mostrar mensaje de carga si 'loading' es verdadero */}
                {loading && (
                    <p className="text-center text-gray-600 text-lg animate-pulse">Cargando tareas...</p>
                )}

                {/* Renderizado condicional: Mostrar mensaje de error si 'error' no es nulo */}
                {error && (
                    <p className="text-center text-red-500 text-lg font-medium">
                        {error}
                    </p>
                )}

                {/* Renderizar la lista de tareas solo si no estamos cargando y no hay errores */}
                {!loading && !error && (
                    <>
                        {/* Mostrar un mensaje si no se encontraron tareas completadas */}
                        {completedTodos.length === 0 && (
                            <p className="text-center text-gray-500 text-lg">
                                No se encontraron tareas completadas.
                            </p>
                        )}
                        {/* 3. Mostrar las tareas completadas en el HTML dentro de una lista <ul> */}
                        {/* list-none p-0 space-y-3: Clases de Tailwind para estilizar la lista */}
                        <ul className="list-none p-0 space-y-3">
                            {/* Utilizamos el método 'map' para iterar sobre el array 'completedTodos'.
                                Por cada 'todo' en el array, renderizamos un componente 'Item'.
                                La prop 'key' es fundamental en React para identificar cada elemento
                                de la lista de forma única y optimizar las actualizaciones. */}
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

export default App; // Exportamos el componente App para que pueda ser importado en main.jsx y renderizado.
