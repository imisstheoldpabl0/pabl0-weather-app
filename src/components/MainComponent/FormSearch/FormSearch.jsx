import React, { useRef } from 'react';

const FormSearch = ({ setCity }) => {
  const cityInput = useRef(); // Creamos una referencia para el input

  const handleClick = () => {
    setCity(cityInput.current.value); // Pasamos el mensaje al componente hermano a través de la función setCity
  };

  return (
    <section>
      <input type="text" ref={cityInput}/>
      <button onClick={handleClick}>Search</button>
    </section>
  );
};

export default FormSearch;