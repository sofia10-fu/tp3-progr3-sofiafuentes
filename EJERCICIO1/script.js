// script.js

// Esperamos a que el contenido del DOM (Document Object Model) esté completamente cargado
// antes de intentar acceder a los elementos del HTML.
document.addEventListener('DOMContentLoaded', () => {

    // --- Obtención de Referencias a los Elementos del DOM ---
    // Seleccionamos el primer campo de entrada numérico por su ID.
    const numero1Input = document.getElementById('numero1');
    // Seleccionamos el elemento select (lista desplegable) para la operación.
    const operacionSelect = document.getElementById('operacion');
    // Seleccionamos el segundo campo de entrada numérico.
    const numero2Input = document.getElementById('numero2');
    // Seleccionamos el botón "Calcular" por su ID.
    const calcularBtn = document.getElementById('calcularBtn');
    // Seleccionamos el div donde mostraremos el resultado.
    const resultadoDiv = document.getElementById('resultado');

    // --- Función para Realizar la Operación ---
    const realizar