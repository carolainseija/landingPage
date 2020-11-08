import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

function Card(props) {
  return (
    <div className={props.classOne}>
      <div className={props.classTwo}></div>
      <h1 className={props.classText}>{props.text}</h1>
      <ul>
        <li>{props.descriptionOne}</li>
        <li>{props.descriptionTwo} </li>
        <li>{props.descriptionThree} </li>
        <li>{props.descriptionFour} </li>
      </ul>
    </div>
  );
}
export default Card;
