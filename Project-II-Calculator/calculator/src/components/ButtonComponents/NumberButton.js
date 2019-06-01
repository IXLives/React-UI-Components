import React from "react";
import "./Button.css";

function NumberButton(props) {
  return (
    <button className={props.numberButs.buttonStyle}>
      {props.numberButs.text}
    </button>
  );
}

export default NumberButton;
