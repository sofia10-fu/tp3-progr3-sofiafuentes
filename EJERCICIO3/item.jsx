// src/Item.jsx
import React from 'react'; // Importamos React
const Item = ({ todo }) => {
    return (
        <li className="bg-blue-50 p-4 mb-2 rounded-lg shadow-sm text-gray-800 transition-transform duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md">
            {/* Muestra el ID de la tarea en negrita y seguido de un espacio para mejor lectura */}
            <span className="font-semibold mr-2">ID: {todo.id}</span>
            {/* Muestra el título de la tarea */}
            {todo.title}
        </li>
    );
};

export default Item; // Exportamos el componente para que pueda ser utilizado en otros archivos (ej. App.jsx).
