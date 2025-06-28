jsx
import React, { useState } from 'react';
import './App.css'; // Asegúrate de que este archivo exista para estilos básicos

function App() {
  // Usamos el estado para saber qué botón está habilitado
  // 'left' significa que el botón izquierdo está habilitado, 'right' que el derecho lo está.
  const [enabledButton, setEnabledButton] = useState('left');

  // Función que se llama al presionar el botón izquierdo
  const handleLeftClick = () => {
    // Verificamos si el botón izquierdo es el que debe estar habilitado
    if (enabledButton === 'left') {
      setEnabledButton('right'); // Deshabilitamos el izquierdo y habilitamos el derecho
    }
  };

  // Función que se llama al presionar el botón derecho
  const handleRightClick = () => {
    // Verificamos si el botón derecho es el que debe estar habilitado
    if (enabledButton === 'right') {
      setEnabledButton('left'); // Deshabilitamos el derecho y habilitamos el izquierdo
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Control de Botones</h1>
        <p>Solo un botón puede estar habilitado a la vez.</p>

        <button
          onClick={handleLeftClick}
          disabled={enabledButton !== 'left'} // El botón está deshabilitado si enabledButton NO es 'left'
          style={{ marginRight: '10px' }} // Añadimos un poco de espacio entre botones
        >
          Izquierdo
        </button>

        <button
          onClick={handleRightClick}
          disabled={enabledButton !== 'right'} // El botón está deshabilitado si enabledButton NO es 'right'
        >
          Derecho
        </button>
      </header>
    </div>
  );
}

export default App;