// src/index.jsx o src/main.jsx (si usas Vite)
import React from 'react'; // Importa la librería principal de React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes en el DOM
import App from './App'; // Importa el componente principal de tu aplicación

// Importa los estilos de Tailwind CSS.
// En un proyecto real de React con Tailwind configurado,
// este archivo incluiría las directivas @tailwind.
import './index.css'; // Asegúrate de que este archivo exista y tenga las directivas de Tailwind

// Obtiene el elemento HTML con el ID 'root' donde se montará la aplicación React
const rootElement = document.getElementById('root');

// Crea una raíz de React concurrente para renderizar tu aplicación
// Esta es la forma moderna y recomendada de renderizar en React 18+
ReactDOM.createRoot(rootElement).render(
    // StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
    // No renderiza ninguna UI visible. Activa comprobaciones adicionales y advertencias
    // para sus descendientes. Por ejemplo, detecta efectos con efectos secundarios inesperados.
    <React.StrictMode>
        {/* Renderiza el componente principal de tu aplicación, App */}
        <App />
    </React.StrictMode>
);