// src/App.jsx
import React, { useState } from 'react'; // Importamos el hook useState de React para manejar el estado

// Componente funcional principal de nuestra aplicación
function App() {
    // Definimos dos estados para controlar si cada botón está deshabilitado o no.
    // Inicialmente, el botón izquierdo está habilitado (false, es decir, NO deshabilitado)
    // y el derecho deshabilitado (true).
    const [isIzquierdoDisabled, setIsIzquierdoDisabled] = useState(false);
    const [isDerechoDisabled, setIsDerechoDisabled] = useState(true);

    // Función que se ejecuta cuando se presiona el botón "Izquierdo".
    const handleIzquierdoClick = () => {
        // Deshabilita el botón izquierdo.
        setIsIzquierdoDisabled(true);
        // Habilita el botón derecho.
        setIsDerechoDisabled(false);
    };

    // Función que se ejecuta cuando se presiona el botón "Derecho".
    const handleDerechoClick = () => {
        // Deshabilita el botón derecho.
        setIsDerechoDisabled(true);
        // Habilita el botón izquierdo.
        setIsIzquierdoDisabled(false);
    };

    return (
        // Contenedor principal de la aplicación con estilos de Tailwind CSS.
        // - min-h-screen: Asegura que el contenedor ocupe al menos el 100% de la altura de la ventana.
        // - bg-gradient-to-br from-blue-100 to-indigo-200: Un fondo con gradiente suave.
        // - flex items-center justify-center: Centra el contenido tanto vertical como horizontalmente.
        // - p-6: Añade un relleno general.
        // - font-inter: Establece la fuente Inter (asumiendo que está configurada en index.css o globalmente).
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-6 font-inter">
            <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center space-y-6">
                {/* Título de la aplicación */}
                <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
                    Control de Botones
                </h1>

                <div className="flex space-x-6">
                    {/* Botón "Izquierdo" */}
                    <button
                        // El texto visible del botón
                        id="boton-izquierdo"
                        // El evento onClick llama a la función handleIzquierdoClick cuando se hace clic
                        onClick={handleIzquierdoClick}
                        // La prop 'disabled' controla si el botón está activo o no.
                        // Si 'isIzquierdoDisabled' es true, el botón se deshabilita.
                        disabled={isIzquierdoDisabled}
                        // Clases de Tailwind para el estilo del botón.
                        // Las clases cambian dinámicamente si el botón está deshabilitado.
                        className={`
                            px-8 py-4 rounded-full text-lg font-semibold
                            transition-all duration-300 ease-in-out transform
                            focus:outline-none focus:ring-4 focus:ring-blue-300
                            ${isIzquierdoDisabled
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-inner'
                                : 'bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95'
                            }
                        `}
                    >
                        Izquierdo
                    </button>

                    {/* Botón "Derecho" */}
                    <button
                        // El texto visible del botón
                        id="boton-derecho"
                        // El evento onClick llama a la función handleDerechoClick cuando se hace clic
                        onClick={handleDerechoClick}
                        // La prop 'disabled' controla si el botón está activo o no.
                        // Si 'isDerechoDisabled' es true, el botón se deshabilita.
                        disabled={isDerechoDisabled}
                        // Clases de Tailwind para el estilo del botón.
                        // Las clases cambian dinámicamente si el botón está deshabilitado.
                        className={`
                            px-8 py-4 rounded-full text-lg font-semibold
                            transition-all duration-300 ease-in-out transform
                            focus:outline-none focus:ring-4 focus:ring-blue-300
                            ${isDerechoDisabled
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-inner'
                                : 'bg-green-600 text-white shadow-lg hover:bg-green-700 hover:scale-105 active:scale-95'
                            }
                        `}
                    >
                        Derecho
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App; // Exportamos el componente App para que pueda ser importado en main.jsx