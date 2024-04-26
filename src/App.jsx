import React, { useState } from 'react';

function App(){
  // Estado para almacenar el valor de la caja de entrada
  const [miTexto, setInputValue] = useState('');

  // Función para manejar cambios en la caja de entrada
  const handleInputChange = (event) => {
    // Obtener el valor de la caja de entrada
    const value = event.target.value; 
    // Actualizar el estado con el nuevo valor
    setInputValue(value); 
  };

  return (
    <div>
      <h1>CAPTURE SU TEXTO</h1>
      <input
        type="text"
        value={miTexto}
        // Evento onChange que llama a handleInputChange
        onChange={handleInputChange} 
        placeholder="Escribe algo..."
      />
      <p>Texto ingresado: {miTexto}</p>
    </div>
  );
};

export default App;
