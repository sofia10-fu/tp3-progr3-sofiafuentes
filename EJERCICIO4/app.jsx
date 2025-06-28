// app.jsx

// Desestructuramos 'useState' de React. Este es un Hook que nos permite
// agregar estado a los componentes funcionales.
const { useState } = React;

// Definimos nuestro componente funcional de React llamado ButtonToggler.
// Los componentes funcionales son la forma moderna y recomendada de escribir componentes en React.
function ButtonToggler() {
    // Declaramos una variable de estado 'activeButton' y su función actualizadora 'setActiveButton'.
    // El valor inicial de 'activeButton' es 'left'. Esto significa que el botón "Izquierdo"
    // estará habilitado por defecto cuando la página cargue.
    const [activeButton, setActiveButton] = useState('left');

    // Función que se ejecutará cuando se haga clic en el botón "Izquierdo".
    const handleLeftClick = () => {
        // Al hacer clic en el botón izquierdo, queremos deshabilitarlo y habilitar el derecho.
        // Para lograr esto, cambiamos el estado de 'activeButton' a 'right'.
        // React re-renderizará el componente con el nuevo estado.
        setActiveButton('right');
    };

    // Función que se ejecutará cuando se haga clic en el botón "Derecho".
    const handleRightClick = () => {
        // Al hacer clic en el botón derecho, queremos deshabilitarlo y habilitar el izquierdo.
        // Para lograr esto, cambiamos el estado de 'activeButton' a 'left'.
        // React re-renderizará el componente con el nuevo estado.
        setActiveButton('left');
    };

    // El componente retorna el JSX (JavaScript XML) que describe la interfaz de usuario.
    return (
        // Utilizamos un React.Fragment (<></>) para envolver los dos botones.
        // Esto nos permite retornar múltiples elementos sin añadir un nodo DOM extra innecesario.
        <>
            {/* Botón Izquierdo */}
            <button
                // La propiedad 'disabled' del botón se establece de forma condicional.
                // Será 'true' (deshabilitado) si 'activeButton' NO es 'left'.
                // Será 'false' (habilitado) si 'activeButton' ES 'left'.
                disabled={activeButton !== 'left'}
                // Cuando se hace clic en este botón, se ejecuta la función handleLeftClick.
                onClick={handleLeftClick}
            >
                Izquierdo
            </button>

            {/* Botón Derecho */}
            <button
                // Similar al botón izquierdo, 'disabled' es 'true' si 'activeButton' NO es 'right'.
                // Será 'false' si 'activeButton' ES 'right'.
                disabled={activeButton !== 'right'}
                // Cuando se hace clic en este botón, se ejecuta la función handleRightClick.
                onClick={handleRightClick}
            >
                Derecho
            </button>
        </>
    );
}

// Obtenemos una referencia al elemento DOM con el id 'root' en nuestro HTML.
const container = document.getElementById('root');
// Creamos una "raíz" de React. Esta es la forma moderna de montar aplicaciones React.
const root = ReactDOM.createRoot(container);

// Renderizamos nuestro componente ButtonToggler dentro de la raíz de React.
// React.StrictMode es una herramienta para destacar problemas potenciales en la aplicación
// durante el desarrollo (no tiene efecto en producción).
root.render(
    <React.StrictMode>
        <ButtonToggler />
    </React.StrictMode>
);