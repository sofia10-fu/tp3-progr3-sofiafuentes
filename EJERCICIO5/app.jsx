// app.jsx

// Desestructuramos el Hook 'useState' del objeto global React.
// 'useState' es esencial para añadir estado a nuestros componentes funcionales de React,
// permitiéndoles mantener y actualizar datos que afectan su renderizado.
const { useState } = React;

// Definimos nuestro componente principal de React, llamado 'CalculatorApp'.
// Este componente encapsulará toda la lógica y la UI de nuestra calculadora.
function CalculatorApp() {
    // Definimos las variables de estado usando useState:
    // 'num1': Almacena el valor del primer número ingresado por el usuario. Inicialmente vacío.
    // 'num2': Almacena el valor del segundo número ingresado por el usuario. Inicialmente vacío.
    // 'operacion': Almacena la operación seleccionada (suma, resta, etc.). Inicialmente 'suma'.
    // 'resultado': Almacena el resultado de la operación. Inicialmente nulo.
    // 'error': Almacena cualquier mensaje de error (ej. división por cero). Inicialmente vacío.
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operacion, setOperacion] = useState('suma'); // Valor por defecto: suma
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState('');

    // Esta variable booleana controla si el botón "Calcular" debe estar deshabilitado.
    // Es 'true' (deshabilitado) si la operación es 'division' Y 'num2' es '0'.
    // Usamos parseFloat para asegurarnos de que la comparación sea numérica.
    const isCalculateDisabled = operacion === 'division' && parseFloat(num2) === 0;

    // Función que se ejecuta cuando el formulario es enviado.
    // 'e' es el objeto del evento del formulario; e.preventDefault() previene la recarga de la página.
    const handleCalculate = (e) => {
        e.preventDefault();

        // Limpiamos cualquier error previo antes de un nuevo cálculo.
        setError('');
        setResultado(null);

        // Convertimos los valores de los inputs a números flotantes.
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        // Validamos que ambos números sean válidos (no NaN) y que no estén vacíos.
        if (isNaN(numero1) || isNaN(numero2) || num1 === '' || num2 === '') {
            setError('Por favor, ingresa dos números válidos.');
            return; // Detenemos la función si la validación falla.
        }

        let res; // Variable para almacenar el resultado de la operación.

        // Realizamos la operación seleccionada usando una estructura switch.
        switch (operacion) {
            case 'suma':
                res = numero1 + numero2;
                break;
            case 'resta':
                res = numero1 - numero2;
                break;
            case 'multiplicacion':
                res = numero1 * numero2;
                break;
            case 'division':
                // Aunque el botón ya está deshabilitado para división por cero,
                // esta validación adicional actúa como una capa de seguridad.
                if (numero2 === 0) {
                    setError('No se puede dividir por cero.');
                    return;
                }
                res = numero1 / numero2;
                break;
            default:
                // Si la operación no es reconocida (caso improbable), mostramos un error.
                setError('Operación no válida.');
                return;
        }

        // Si todo es correcto, actualizamos el estado 'resultado' con el valor calculado,
        // redondeándolo a 2 decimales para mayor claridad.
        setResultado(res.toFixed(2));
    };

    // El componente retorna el JSX que describe la interfaz de usuario de la calculadora.
    return (
        <div>
            <h1>Calculadora Simple</h1>
            <form onSubmit={handleCalculate}>
                {/* Campo para el primer número */}
                <div className="form-group">
                    <label htmlFor="num1">Número 1:</label>
                    <input
                        type="number"
                        id="num1"
                        value={num1}
                        // Actualizamos el estado 'num1' cada vez que el usuario teclea.
                        onChange={(e) => setNum1(e.target.value)}
                        step="any" // Permite números con decimales
                        required // Hace el campo obligatorio
                    />
                </div>

                {/* Campo para el segundo número */}
                <div className="form-group">
                    <label htmlFor="num2">Número 2:</label>
                    <input
                        type="number"
                        id="num2"
                        value={num2}
                        // Actualizamos el estado 'num2' cada vez que el usuario teclea.
                        onChange={(e) => setNum2(e.target.value)}
                        step="any" // Permite números con decimales
                        required // Hace el campo obligatorio
                    />
                </div>

                {/* Selector de operación */}
                <div className="form-group">
                    <label htmlFor="operacion">Operación:</label>
                    <select
                        id="operacion"
                        value={operacion}
                        // Actualizamos el estado 'operacion' cuando el usuario selecciona una opción.
                        onChange={(e) => {
                            setOperacion(e.target.value);
                            setError(''); // Limpiamos errores al cambiar la operación
                            setResultado(null); // Limpiamos el resultado
                        }}
                    >
                        <option value="suma">Suma (+)</option>
                        <option value="resta">Resta (-)</option>
                        <option value="multiplicacion">Multiplicación (*)</option>
                        <option value="division">División (/)</option>
                    </select>
                </div>

                {/* Botón "Calcular" */}
                <button
                    type="submit"
                    // El botón estará deshabilitado si 'isCalculateDisabled' es true.
                    disabled={isCalculateDisabled}
                >
                    Calcular
                </button>
            </form>

            {/* Mostrar mensaje de error si existe */}
            {/* Solo se muestra si la variable de estado 'error' no está vacía. */}
            {error && <p className="error-message">{error}</p>}

            {/* Mostrar el resultado si ya se ha calculado */}
            {/* Solo se muestra si la variable de estado 'resultado' no es nula. */}
            {resultado !== null && (
                <div className="resultado">
                    <p>Resultado: <strong>{resultado}</strong></p>
                </div>
            )}
        </div>
    );
}

// Obtenemos el elemento DOM (del HTML) con el ID 'root'.
const container = document.getElementById('root');
// Creamos una "raíz" de React. Esta es la forma moderna de montar aplicaciones React
// y renderizar componentes en el DOM.
const root = ReactDOM.createRoot(container);

// Renderizamos nuestro componente principal 'CalculatorApp' dentro de la raíz de React.
// React.StrictMode es una herramienta de desarrollo que activa comprobaciones adicionales
// y advertencias para sus descendientes, ayudando a encontrar problemas potenciales.
root.render(
    <React.StrictMode>
        <CalculatorApp />
    </React.StrictMode>
);