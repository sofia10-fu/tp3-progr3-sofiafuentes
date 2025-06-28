import React, { useState } from 'react'; // Importamos React y el hook useState para manejar el estado.
import ReactDOM from 'react-dom/client'; // Importamos ReactDOM para renderizar nuestra aplicación.

// Definimos nuestro componente funcional de React.
function ButtonToggler() {
    // Declaramos un estado llamado 'activeButton'.
    // Su valor inicial es 'left', lo que significa que el botón izquierdo estará habilitado al inicio.
    // 'setActiveButton' es la función que usaremos para actualizar este estado.
    const [activeButton, setActiveButton] = useState('left');

    // Esta función se ejecuta cuando se presiona el botón "Izquierdo".
    const handleLeftClick = () => {
        // Al hacer clic en el botón izquierdo, actualizamos el estado para que el botón activo sea 'right'.
        // Esto deshabilitará el botón izquierdo y habilitará el derecho.
        setActiveButton('right');
    };

    // Esta función se ejecuta cuando se presiona el botón "Derecho".
    const handleRightClick = () => {
        // Al hacer clic en el botón derecho, actualizamos el estado para que el botón activo sea 'left'.
        // Esto deshabilitará el botón derecho y habilitará el izquierdo.
        setActiveButton('left');
    };

    return (
        <div>
            {/* Botón Izquierdo */}
            <button
                // El botón está deshabilitado si el 'activeButton' NO es 'left'.
                disabled={activeButton !== 'left'}
                // Cuando se hace clic, se llama a la función handleLeftClick.
                onClick={handleLeftClick}
            >
                Izquierdo
            </button>

            {/* Botón Derecho */}
            <button
                // El botón está deshabilitado si el 'activeButton' NO es 'right'.
                disabled={activeButton !== 'right'}
                // Cuando se hace clic, se llama a la función handleRightClick.
                onClick={handleRightClick}
            >
                Derecho
            </button>
        </div>
    );
}

// Obtenemos el elemento DOM donde se montará nuestra aplicación de React.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos el componente ButtonToggler dentro del elemento 'root'.
root.render(
    // StrictMode es una herramienta para destacar problemas potenciales en una aplicación.
    // No renderiza ninguna UI visible. Activa comprobaciones adicionales y advertencias para sus descendientes.
    <React.StrictMode>
        <ButtonToggler />
    </React.StrictMode>
);