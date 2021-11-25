import React from "react";
import "./Forecast.css";
import ForecastElement from "./ForecastElement";

export default function Forecast() {
  return (
    <div className="row forecast" id="forecast-element">
      <div className="col-1" />
      <ForecastElement
        day="Fri"
        min={5}
        max={10}
        icon="https://openweathermap.org/img/wn/02d@2x.png"
      />
      <ForecastElement
        day="Sat"
        min={3}
        max={8}
        icon="https://openweathermap.org/img/wn/09d@2x.png"
      />
      <ForecastElement
        day="Sun"
        min={1}
        max={7}
        icon="https://openweathermap.org/img/wn/03d@2x.png"
      />
      <ForecastElement
        day="Mon"
        min={2}
        max={9}
        icon="https://openweathermap.org/img/wn/04d@2x.png"
      />
      <ForecastElement
        day="Tue"
        min={-1}
        max={5}
        icon="https://openweathermap.org/img/wn/13d@2x.png"
      />
    </div>
  );
}
