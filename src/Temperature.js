import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <li id="current-temperature">
      <strong>
        <span className="temperature" id="temperature-element">
          12
        </span>
      </strong>
      <span className="units">°C | °F</span>
    </li>
  );
}
