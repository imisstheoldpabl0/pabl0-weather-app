import React, { useState } from 'react';
import FormSearch from "./FormSearch/FormSearch";
import WeatherList from "./WeatherList/WeatherList";

function MainComponent() {
  const [city, setCity] = useState('madrid');
  const [myLat, setMyLat] = useState(0);
  const [myLong, setMyLong] = useState(0);

  function getMyLocation() {
    navigator.geolocation.getCurrentPosition(position => {

      let myLat = position.coords.latitude; // guarda my latitud
      let myLong = position.coords.longitude; // guarda mi longitud

      console.log(myLat, myLong);

    });
  }
  getMyLocation();

  return (
    <main>
      <h1>Este es el Main Component</h1>
      <FormSearch setCity={setCity} />
      <WeatherList city={city} />
    </main>
  );
}

export default MainComponent;


