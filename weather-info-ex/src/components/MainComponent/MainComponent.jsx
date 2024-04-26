import React, { useState } from 'react';
import FormSearch from "./FormSearch/FormSearch";
import WeatherList from "./WeatherList/WeatherList";

function MainComponent() {
  const [city, setCity] = useState('');
  const [myLat, setMyLat] = useState('40.42166595951138');
  const [myLong, setMyLong] = useState('-3.6928477443955545');
  // 40.42166595951138 -3.6928477443955545

  function getMyLocation() {
    navigator.geolocation.getCurrentPosition(position => {

      let myLat = position.coords.latitude; // guarda my latitud
      let myLong = position.coords.longitude; // guarda mi longitud

      //console.log(myLat, myLong);

    });
  }
  getMyLocation();

  return (
    <main>
      <h1>Este es el Main Component</h1>
      <FormSearch setCity={setCity} />
      <WeatherList city={[city, myLat, myLong]} />
      <h2></h2>
    </main>
  );
}

export default MainComponent;


