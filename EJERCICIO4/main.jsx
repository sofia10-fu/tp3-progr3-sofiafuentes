// src/main.jsx
import React from 'react'; // Importa la librería principal de React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes en el DOM
import App from './App.jsx'; // Importa el componente principal de tu aplicación
import './index.css'; // Importa los estilos globales (asegúrate de que este archivo contenga las directivas de Tailwind)

// Obtiene el elemento HTML con el ID 'root' del DOM
const rootElement = document.getElementById('root');

// Crea una raíz de React concurrente para renderizar tu aplicación.
// Este es el método recomendado para React 18+ para un mejor rendimiento.
ReactDOM.createRoot(rootElement).render(
    // React.StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
    // Activa comprobaciones adicionales y advertencias solo durante el desarrollo.
    <React.StrictMode>
        {/* Renderiza el componente principal de tu aplicación, App */}
        <App />
    </React.StrictMode>
);
