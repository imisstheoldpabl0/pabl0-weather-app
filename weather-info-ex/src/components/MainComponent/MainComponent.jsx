import React, { useState } from 'react';
import FormSearch from "./FormSearch/FormSearch";
import WeatherList from "./WeatherList/WeatherList";

function MainComponent() {
  const [ city, setCity ] = useState('madrid');

  return (
    <main>
      <h1>Este es el Main Component</h1>
      <FormSearch setCity={setCity} />
      <WeatherList city={city} />
    </main>
  );
}

export default MainComponent;