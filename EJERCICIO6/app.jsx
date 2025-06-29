// app.jsx

// Desestructuramos el Hook 'useState' del objeto global React.
// useState nos permite añadir estado a nuestros componentes funcionales de React.
const { useState } = React;

// Definimos nuestro componente principal de React, llamado 'IMCCalculator'.
// Este será un componente funcional.
function IMCCalculator() {
    // Definimos variables de estado usando useState:
    // 'peso': Almacena el valor del peso ingresado por el usuario. Inicialmente vacío.
    // 'altura': Almacena el valor de la altura ingresada por el usuario. Inicialmente vacío.
    // 'imc': Almacena el resultado del cálculo del IMC. Inicialmente nulo.
    // 'mensaje': Almacena el mensaje descriptivo del IMC. Inicialmente vacío.
    // 'claseIMC': Almacena la clase CSS para aplicar el color al mensaje. Inicialmente vacío.
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [claseIMC, setClaseIMC] = useState('');

    // Función que se ejecuta cuando el formulario es enviado.
    // 'e' es el objeto del evento, y e.preventDefault() evita que la página se recargue.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificamos que ambos campos (peso y altura) no estén vacíos y sean números válidos.
        // Convertimos los valores a números usando parseFloat.
        if (peso && altura && parseFloat(altura) > 0) {
            const pesoKg = parseFloat(peso);
            const alturaMetros = parseFloat(altura);

            // Calculamos el IMC: peso (kg) / (altura (m) * altura (m))
            const imcCalculado = pesoKg / (alturaMetros * alturaMetros);
            setImc(imcCalculado.toFixed(2)); // Guardamos el IMC redondeado a 2 decimales.

            // Determinamos el mensaje y la clase CSS según el valor del IMC.
            if (imcCalculado < 18.5) {
                setMensaje('Nivel bajo');
                setClaseIMC('bajo'); // Clase CSS para color amarillo
            } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
                setMensaje('Nivel normal');
                setClaseIMC('normal'); // Clase CSS para color verde
            } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
                setMensaje('Nivel de sobrepeso');
                setClaseIMC('sobrepeso'); // Clase CSS para color naranja
            } else { // IMC >= 30
                setMensaje('Nivel de obesidad');
                setClaseIMC('obesidad'); // Clase CSS para color rojo
            }
        } else {
            // Si algún campo está vacío o la altura es inválida, reiniciamos los estados.
            setImc(null);
            setMensaje('Por favor, ingresa valores válidos para peso y altura.');
            setClaseIMC('');
        }
    };

    // El componente retorna el JSX que representa la interfaz de usuario.
    return (
        <div>
            <h1>Calculadora de Índice de Masa Corporal (IMC)</h1>
            {/* Formulario para ingresar peso y altura */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="peso">Peso (kg):</label>
                    <input
                        type="number"
                        id="peso"
                        value={peso}
                        // Cuando el valor del input cambia, actualizamos el estado 'peso'.
                        onChange={(e) => setPeso(e.target.value)}
                        step="0.1" // Permite decimales para el peso
                        min="1" // Peso mínimo razonable
                        required // Campo requerido
                    />
                </div>
                <div>
                    <label htmlFor="altura">Altura (metros):</label>
                    <input
                        type="number"
                        id="altura"
                        value={altura}
                        // Cuando el valor del input cambia, actualizamos el estado 'altura'.
                        onChange={(e) => setAltura(e.target.value)}
                        step="0.01" // Permite decimales para la altura (ej. 1.75)
                        min="0.1" // Altura mínima razonable
                        required // Campo requerido
                    />
                </div>
                <button type="submit">Calcular IMC</button>
            </form>

            {/* Sección para mostrar el resultado del IMC */}
            {/* Solo se muestra si 'imc' no es nulo (es decir, ya se ha calculado) */}
            {imc && (
                <div className={`resultado-imc ${claseIMC}`}>
                    <p>Tu IMC es: <strong>{imc}</strong></p>
                    <p>Clasificación: <strong>{mensaje}</strong></p>
                </div>
            )}
            {/* Si no hay IMC pero hay un mensaje (por ejemplo, de error), se muestra aquí */}
            {!imc && mensaje && (
                 <div className="resultado-imc">
                    <p>{mensaje}</p>
                 </div>
            )}
        </div>
    );
}

// Obtenemos el elemento DOM donde se montará nuestra aplicación React.
const container = document.getElementById('root');
// Creamos una "raíz" de React, que es la forma moderna de renderizar aplicaciones React.
const root = ReactDOM.createRoot(container);

// Renderizamos el componente IMCCalculator dentro del elemento 'root'.
// React.StrictMode es una herramienta que activa comprobaciones adicionales y advertencias
// durante el desarrollo para ayudar a encontrar problemas potenciales (no afecta la producción).
root.render(
    <React.StrictMode>
        <IMCCalculator />
    </React.StrictMode>
);
