import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCard/WeatherCard";
import axios from "axios";
import './WeatherList.css';

const WeatherList = ({ city }) => {

  const [cards, setCards] = useState([]); // Para guardar las tarjetas de clima

  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=3a5cea6cca9761e16b10a370cf420965`);
        let weather = res.data.list;
        console.log(res);;
        console.log(weather);

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

  return (
    <section>
      <h4>Ciudad seleccionada: {city}</h4>
      <WeatherCard />
      <h1>Topic</h1>

      {cards.length !== 0 ?
        <section className='weatherCards'>
          {cards.map((card, i) => (
            <article key={i} className='weatherCard'>

              <div className='weatherIcon'>
                <img src={`https://openweathermap.org/img/wn/${card.weather[0].icon}@4x.png`} alt="Weather icon" />
              </div>

              <div className='main-info'>
                <h1>{Math.round(card.main.temp)}º</h1>
                <h4>{new Date(card.dt * 1000).getDate().toLocaleString()}/{new Date(card.dt * 1000).getMonth().toLocaleString()} {new Date(card.dt * 1000).getHours().toLocaleString()}:{new Date(card.dt * 1000).getMinutes().toLocaleString()}0</h4>
              </div>

              <div className='secondary-info'>

                <div className='conditions'>
                  <p>Conditions: <b>{card.weather[0].main}</b></p>
                  <p>Wind: <br /><b>{card.wind.speed} m/s</b></p>
                </div>

                <div className='min-max'>
                  <p>Min: <b>{card.main.temp_min}º</b></p>
                  <p>Max: <b>{card.main.temp_max}º</b></p>
                </div>

              </div>




            </article>
          ))}
        </section>
        : ""
      }
    </section>
  );
};

export default WeatherList;


// Madrid in metric units ${cityName}
//https://api.openweathermap.org/data/2.5/forecast?units=metric&q=madrid&appid=3a5cea6cca9761e16b10a370cf420965

//https://api.openweathermap.org/data/2.5/forecast?units=metric&q= ${city} &appid=3a5cea6cca9761e16b10a370cf420965