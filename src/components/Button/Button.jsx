import "./Button.css";
import React from "react";

export default function Button(props) {
  const { text, onClick, type } = props;
  return (
    <button onClick={onClick} type={type}>
      {text}
    </button>
  );
}
