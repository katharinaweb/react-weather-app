import React from "react";
import "./Today.css";
import Image from "./Image";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Description from "./Description";
import Date from "./Date";

export default function Today() {
  return (
    <div>
      <Image />
      <div className="row">
        <div className="col-3">
          <ul id="current-conditions">
            <Temperature />
            <Humidity />
            <Wind />
          </ul>
        </div>
        <Description />
      </div>
      <div className="row">
        <Date />
      </div>
    </div>
  );
}
