import React, { useState } from 'react';
import FormSearch from "./FormSearch/FormSearch";
import WeatherList from "./WeatherList/WeatherList";

function MainComponent() {
  const [city, setCity] = useState();
  const [myLat, setMyLat] = useState(); //40.4216
  const [myLong, setMyLong] = useState(); //-3.6928

  // 40.4165, lon: -3.7026

  navigator.geolocation.getCurrentPosition(position => {

    setMyLat(position.coords.latitude); // guarda my latitud
    setMyLong(position.coords.longitude); // guarda mi longitud


  });

  return (
    <main>
      <h2>Search for a city</h2>
      <FormSearch setCity={setCity} />
      <WeatherList city={city} myLat={myLat} myLong={myLong} />
    </main>
  );
}

export default MainComponent;


