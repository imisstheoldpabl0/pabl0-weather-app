import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCard/WeatherCard";
import axios from "axios";
import './WeatherList.css';

const WeatherList = ({ city, myLat, myLong }) => {

  const [cards, setCards] = useState([]); // Para guardar las tarjetas de clima

  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${myLat}&lon=${myLong}&appid=3a5cea6cca9761e16b10a370cf420965`);
        let weather = res.data.list;
        // console.log(weather);

        // Guarda en el array de cards el resultado. Procesa los datos
        setCards(weather
          .map(l => l));

      } catch (e) {
        setCards([]); // No pintes nada
      }
    }

    fetchData();
  }, [myLat, myLong]); // cuando hay un cambio en la ciudad se vueve a ejecutar el useEffect



  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=3a5cea6cca9761e16b10a370cf420965`);
        let weather = res.data.list;
        // console.log(weather);

        // Guarda en el array de cards el resultado. Procesa los datos
        setCards(weather
          .map(l => l));

      } catch (e) {
        setCards([]); // No pintes nada
      }
    }

    fetchData();
  }, [city]); // cuando hay un cambio en la ciudad se vueve a ejecutar el useEffect
  //                 <img src={`http://openweathermap.org/img/w/${card.weather[0].icon}.png`} alt="Weather icon" />


  const paintCards = () => {
    return cards.length !== 0 ?
      cards.map((card, index) => {
        return <WeatherCard
          key={index}
          logo={card.weather[0].icon}
          temp={Math.round(card.main.temp)} º
          date={`${new Date(card.dt * 1000).getDate().toLocaleString()}/${new Date(card.dt * 1000).getMonth().toLocaleString()} ${new Date(card.dt * 1000).getHours().toLocaleString()}:${new Date(card.dt * 1000).getMinutes().toLocaleString()}0`}
          conditions={card.weather[0].main}
          wind={card.wind.speed}
          min={card.main.temp_min}
          max={card.main.temp_max}
        />

      }) : ""
  }

  return (
    <section>

      {paintCards()}

    </section>
  );
};

export default WeatherList;


// Madrid in metric units ${cityName}
//https://api.openweathermap.org/data/2.5/forecast?units=metric&q=madrid&appid=3a5cea6cca9761e16b10a370cf420965

//https://api.openweathermap.org/data/2.5/forecast?units=metric&q= ${city} &appid=3a5cea6cca9761e16b10a370cf420965

// New API url with: ${lat}, ${lon}, ${apiKey}
//https://api.openweathermap.org/data/2.5/forecast?units=metric&lat={lat}&lon={lon}&appid={apiKey}