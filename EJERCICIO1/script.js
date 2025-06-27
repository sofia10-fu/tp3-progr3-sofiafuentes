// script.js

// Obtenemos referencias a los elementos del DOM con los que vamos a interactuar:
const number1Input = document.getElementById('number1');
const operationSelect = document.getElementById('operation');
const number2Input = document.getElementById('number2');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');
const divisionByZeroErrorDiv = document.getElementById('divisionByZeroError');

// --- Función para realizar el cálculo ---
function performCalculation() {
    // 1. Obtener los valores de los campos de entrada.
    // Usamos parseFloat para asegurarnos de que los valores se traten como números,
    // ya que los inputs por defecto devuelven strings.
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    const operation = operationSelect.value; // Obtenemos la operación seleccionada (string).

    // 2. Validar que los números sean válidos (no NaN - Not a Number).
    // Esto ocurre si el usuario ingresa algo que no es un número o deja los campos vacíos.
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Por favor, ingresa números válidos en ambos campos.';
        resultDiv.style.color = 'red'; // Cambiamos el color para indicar un error.
        return; // Salimos de la función si hay un error de validación.
    }

    // 3. Realizar la operación seleccionada.
    let result; // Declaramos una variable para almacenar el resultado.
    switch (operation) {
        case 'suma':
            result = num1 + num2;
            break; // Terminamos el caso de 'suma'.
        case 'resta':
            result = num1 - num2;
            break; // Terminamos el caso de 'resta'.
        case 'multiplicacion':
            result = num1 * num2;
            break; // Terminamos el caso de 'multiplicacion'.
        case 'division':
            // --- Condición especial: División por cero ---
            if (num2 === 0) {
                // Si el segundo número es 0, mostramos un mensaje de error y no calculamos.
                divisionByZeroErrorDiv.textContent = 'No se puede dividir por cero.';
                resultDiv.textContent = ''; // Limpiamos cualquier resultado anterior.
                return; // Salimos de la función.
            } else {
                result = num1 / num2;
                divisionByZeroErrorDiv.textContent = ''; // Limpiamos el mensaje de error si ya no aplica.
            }
            break; // Terminamos el caso de 'division'.
        default:
            // Si no se ha seleccionado ninguna operación (el valor por defecto del select).
            resultDiv.textContent = 'Por favor, selecciona una operación.';
            resultDiv.style.color = 'orange';
            return; // Salimos de la función.
    }

    // 4. Mostrar el resultado.
    // Si llegamos hasta aquí, significa que el cálculo fue exitoso.
    resultDiv.textContent = El resultado es: ${result};
    resultDiv.style.color = '#2