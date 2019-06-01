import React from "react";
import "./Button.css";

function ActionButton(props) {
  return (
    <button className={props.actionButs.buttonStyle}>
      {props.actionButs.text}
    </button>
  );
}

export default ActionButton;
