// script.js

// --- 1. Obtener Referencias a los Elementos del DOM ---
// Guardamos una referencia a cada elemento HTML con el que vamos a interactuar
// para no tener que buscarlo cada vez.
const inputNumero1 = document.getElementById('numero1');
const selectOperacion = document.getElementById('operacion');
const inputNumero2 = document.getElementById('numero2');
const botonCalcular = document.getElementById('calcularBtn');
const divResultado = document.getElementById('resultado');

// --- 2. Añadir un "Escuchador de Eventos" al Botón ---
// Queremos que algo suceda cuando el usuario haga clic en el botón "Calcular".
// Para eso, usamos addEventListener. Le decimos que "escuche" el evento 'click'.
botonCalcular.addEventListener('click', realizarCalculo);

// --- 3. Función que Realiza el Cálculo ---
function realizarCalculo() {
    // Primero, obtenemos los valores actuales de los campos de entrada.
    // .value nos da el contenido del campo.
    // parseFloat() convierte el texto (string) a un número decimal.
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    // Obtenemos la operación seleccionada de la lista desplegable.
    const operacion = selectOperacion.value;

    // --- 4. Validación Inicial de los Números ---
    // Es importante verificar si los campos están vacíos o si no son números válidos.
    // isNaN() significa "Is Not a Number" (No es un Número).
    if (isNaN(num1) || isNaN(num2)) {
        divResultado