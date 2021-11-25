import React from "react";
import "./ForecastElement.css";

export default function ForecastElement(props) {
  return (
    <div className="col-2">
      <div id="forecast-day">{props.day}</div>
      <div>
        <img id="forecast-image" src={props.icon} alt="" />
      </div>
      <div>
        <span className="temperature" id="forecast-min-temp">
          {props.min}
        </span>
        ° /
        <span className="temperature" id="forecast-max-temp">
          {props.max}
        </span>
        °
      </div>
    </div>
  );
}
