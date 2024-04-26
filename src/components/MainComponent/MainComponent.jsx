import React, { useState } from 'react';
import FormSearch from "./FormSearch/FormSearch";
import WeatherList from "./WeatherList/WeatherList";

function MainComponent() {
  const [city, setCity] = useState('');
  const [myLat, setMyLat] = useState('40.4165'); //40.4216
  const [myLong, setMyLong] = useState('-3.7026'); //-3.6928

  // 40.4165, lon: -3.7026

  const getMyLocation = () => {
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
      <WeatherList city={city} myLat={myLat} myLong={myLong}/>
      <h2></h2>
    </main>
  );
}

export default MainComponent;


