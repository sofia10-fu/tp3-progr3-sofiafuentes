// src/Item.jsx o src/components/Item.jsx
import React from 'react'; // No es estrictamente necesario importar React en cada componente si no usas JSX directamente, pero es una buena práctica.

// Componente funcional que recibe una 'tarea' (objeto todo) como prop
const Item = ({ todo }) => {
    return (
        // Cada ítem de la lista (<li>) se estiliza con clases de Tailwind CSS.
        // bg-blue-50: fondo azul muy claro
        // p-4: padding de 16px
        // mb-2: margen inferior de 8px
        // rounded-lg: esquinas grandes redondeadas
        // shadow-sm: sombra ligera
        // text-gray-800: color de texto gris oscuro
        // transition-transform duration-200 ease-in-out: Transición suave para efectos hover
        // hover:scale-[1.01]: Escala ligeramente el elemento al pasar el ratón por encima
        // hover:shadow-md: Sombra mediana al pasar el ratón por encima
        <li className="bg-blue-50 p-4 mb-2 rounded-lg shadow-sm text-gray-800 transition-transform duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md">
            {/* Muestra el ID de la tarea en negrita y un poco separado del título */}
            <span className="font-semibold mr-2">ID: {todo.id}</span>
            {/* Muestra el título de la tarea */}
            {todo.title}
        </li>
    );
};

export default Item; // Exportamos el componente para que pueda ser importado y usado en otros archivos (como App.jsx)
