<script>
    // 1. Obtención de Elementos HTML
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const operacionSelect = document.getElementById('operacion');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');

    // 2. Función para Realizar la Operación Matemática
    function realizarOperacion() {
        const num1 = parseFloat(numero1Input.value); // Obtiene el valor del input y lo convierte a número
        const num2 = parseFloat(numero2Input.value); // Obtiene el valor del input y lo convierte a número
        const operacion = operacionSelect.value;     // Obtiene el valor de la opción seleccionada
        let resultado;

        switch (operacion) {
            case 'suma':
                resultado = num1 + num2;
                break;
            case 'resta':
                resultado = num1 - num2;
                break;
            case 'multiplicacion':
                resultado = num1 * num2;
                break;
            case 'division':
                if (num2 === 0) {
                    resultado = 'No se puede dividir por cero'; // Manejo de la división por cero
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = 'Operación inválida'; // Mensaje por si hay una operación no reconocida (poco probable aquí)
        }
        resultadoDiv.textContent = `Resultado: ${resultado}`; // Actualiza el texto en el div de resultado
    }

    // 3. Función para Verificar la Operación de División y Habilitar/Deshabilitar el Botón
    function verificarDivision() {
        if (operacionSelect.value === 'division') {
            calcularBtn.disabled = true; // Deshabilita el botón si la operación es división
        } else {
            calcularBtn.disabled = false; // Habilita el botón para otras operaciones
        }
    }

    // 4. Event Listeners (Escuchadores de Eventos)
    calcularBtn.addEventListener('click', realizarOperacion); // Cuando se hace clic en el botón "Calcular", llama a realizarOperacion
    operacionSelect.addEventListener('change', verificarDivision); // Cuando cambia la opción en el selector, llama a verificarDivision

    // 5. Inicialización
    verificarDivision(); // Llama a la función al cargar la página para establecer el estado inicial del botón
</script>
