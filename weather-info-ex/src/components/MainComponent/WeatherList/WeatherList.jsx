import React from "react";
import WeatherCard from "./WeatherCard/WeatherCard";
// import axios from "axios";

const WeatherList = ({ city }) => {
  return (
    <section>
      <h4>Ciudad seleccionada: {city}</h4>
      <WeatherCard />
    </section>
  );
};

export default WeatherList;


// Madrid in metric units
//https://api.openweathermap.org/data/2.5/forecast?units=metric&q=madrid&appid=3a5cea6cca9761e16b10a370cf420965
// ${cityName} & appid=${apiKey}
// https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityName}&appid=${apiKey}