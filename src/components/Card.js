import React from "react";
import data from "../data";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div>
          <img
            className="card--img"
            src={props.img}
            alt="Beautiful Landscape"
          />
        </div>
        <div className="card--content">
          <span>
            <img src="./images/pin.png" alt="gps-pin" />
            <span className="card--location">{props.location}</span>
          </span>
          <span className="card--view">{props.googleView}</span>
          <h1 className="card--title">{props.title}</h1>
          <p className="card--date">{props.date}</p>
          <p className="card--desc">{props.description}</p>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
