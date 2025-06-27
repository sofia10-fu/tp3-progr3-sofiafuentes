// script.js

// Obtenemos referencias a los elementos HTML que vamos a manipular
const num1Input = document.getElementById('num1'); // Campo de entrada para el primer número
const num2Input = document.getElementById('num2'); // Campo de entrada para el segundo número
const operationSelect = document.getElementById('operation'); // Selector de operaciones
const calculateBtn = document.getElementById('calculateBtn'); // Botón de calcular
const resultDisplay = document.getElementById('resultDisplay'); // Elemento donde se muestra el resultado

/**
 * Función para verificar la condición de división por cero
 * y habilitar/deshabilitar el botón de calcular.
 */
function checkDivisionByZero() {
    // Obtenemos el valor de la operación seleccionada
    const selectedOperation = operationSelect.value;
    // Convertimos el valor del segundo número a un número flotante
    const num2 = parseFloat(num2Input.value);

    // Si la operación es "divide" (división) Y el segundo número es 0
    if (selectedOperation === 'divide' && num2 === 0) {
        // Deshabilitamos el botón de calcular
        calculateBtn.disabled = true;
        // Mostramos un mensaje de advertencia en el resultado
        resultDisplay.textContent = "¡No se puede dividir por cero!";
    } else {
        // En cualquier otro caso (no es división o el divisor no es cero),
        // habilitamos el botón de calcular
        calculateBtn.disabled = false;
        // Limpiamos el mensaje de advertencia del resultado si estaba presente
        if (resultDisplay.textContent === "¡No se puede dividir por cero!") {
            resultDisplay.textContent = "";
        }
    }
}

/**
 * Función que se ejecuta cuando se hace clic en el botón "Calcular".
 */
function calculateResult() {
    // Convertimos los valores de los inputs a números flotantes
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    // Obtenemos la operación seleccionada
    const selectedOperation = operationSelect.value;
    let result; // Variable para almacenar el resultado

    // Usamos un switch para realizar la operación correspondiente
    switch (selectedOperation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            // Esta verificación es redundante debido a checkDivisionByZero,
            // pero es una buena práctica tenerla también aquí para robustez.
            if (num2 === 0) {
                resultDisplay.textContent = "Error: División por cero";
                return; // Salimos de la función si hay división por cero
            }
            result = num1 / num2;
            break;
        default:
            resultDisplay.textContent = "Operación no válida";
            return; // Salimos de la función si la operación no es válida
    }

    // Mostramos el resultado en el elemento span
    resultDisplay.textContent = result;
}

// --- Event Listeners ---

// Agregamos un "escuchador de eventos" al botón de calcular.
// Cuando se haga clic en él, se ejecutará la función 'calculateResult'.
calculateBtn.addEventListener('click', calculateResult);

// Agregamos "escuchadores de eventos" a los campos de número y al selector de operación.
// Cada vez que sus valores cambien, se ejecutará la función 'checkDivisionByZero'.
num1Input.addEventListener('input', checkDivisionByZero);
num2Input.addEventListener('input', checkDivisionByZero);
operationSelect.addEventListener('change', checkDivisionByZero);

// Llamamos a checkDivisionByZero al cargar la página para establecer el estado inicial del botón
document.addEventListener('DOMContentLoaded', checkDivisionByZero);