import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCard/WeatherCard";
import axios from "axios";

const WeatherList = ({ city }) => {

  const [cards, setCards] = useState([]); // Para guardar las tarjetas de clima

  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=3a5cea6cca9761e16b10a370cf420965`);
        let weather = res.data.list;
        console.log(weather);

        // Guarda en el array de cards el resultado. Procesa los datos
        setCards(weather
          .map(l => l.main));

      } catch (e) {
        setCards([]); // No pintes nada
      }
    }

    fetchData();
  }, [city]); // cuando hay un cambio en la ciudad se vueve a ejecutar el useEffect

  return (
    <section>
      <h4>Ciudad seleccionada: {city}</h4>
      <WeatherCard />
      <h1>Topic</h1>

      {cards.length !== 0 ?
        <ul className='weatherCards'>
          {cards.map((card, i) => (
            <li key={i}>
              <p>{card.temp}</p>
            </li>
          ))}
        </ul>
        : ""
      }
    </section>
  );
};

export default WeatherList;


// Madrid in metric units ${cityName}
//https://api.openweathermap.org/data/2.5/forecast?units=metric&q=madrid&appid=3a5cea6cca9761e16b10a370cf420965

//https://api.openweathermap.org/data/2.5/forecast?units=metric&q= ${city} &appid=3a5cea6cca9761e16b10a370cf420965