import React from "react";
import './WeatherCard.css'

const WeatherCard = ({ logo, temp, date, conditions, wind, min, max }) => {

  // importar los datos de la API
  // iterar creando una tarjeta por cada conjunto de datos
  return (
    <section className='weatherCards'>

      <article className='weatherCard'>

        <div className='weatherIcon'>
          <img src={`https://openweathermap.org/img/wn/${logo}@4x.png`} alt="Weather icon" />
        </div>

        <div className='main-info'>
          <h1>{temp}º</h1>
          <h4>{date}</h4>
        </div>

        <div className='secondary-info'>

          <div className='conditions'>
            <p>Conditions: <b>{conditions}</b></p>
            <p>Wind: <br /><b>{wind} m/s</b></p>
          </div>

          <div className='min-max'>
            <p>Min: <b>{min}º</b></p>
            <p>Max: <b>{max}º</b></p>
          </div>

        </div>

      </article>
    </section>
  );
};

export default WeatherCard;
