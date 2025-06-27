// src/main.jsx
import React from 'react'; // Importa la librería principal de React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes en el DOM
import App from './App.jsx'; // Importa el componente principal de tu aplicación (App.jsx)
import './index.css'; // Importa los estilos globales (incluyendo las directivas de Tailwind CSS)

// Obtiene el elemento HTML con el ID 'root' del DOM
// Este es el punto de montaje donde toda la aplicación React será renderizada.
const rootElement = document.getElementById('root');

// Crea una raíz de React para renderizar la aplicación.
// 'createRoot' es el método recomendado para React 18+ para un rendimiento mejorado.
ReactDOM.createRoot(rootElement).render(
    // React.StrictMode es una herramienta que ayuda a identificar problemas potenciales en una aplicación.
    // Activa advertencias y comprobaciones adicionales solo durante el desarrollo.
    <React.StrictMode>
        {/* Renderiza el componente principal de tu aplicación, 'App'. */}
        <App />
    </React.StrictMode>
);