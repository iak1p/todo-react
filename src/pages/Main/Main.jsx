import React from "react";
import Button from "../../components/Button/Button";

export default function Main(props) {
  const { onClick } = props;

  return (
    <>
      <h2>Todo</h2>
      <div className="">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Button text="Add" onClick={onClick}></Button>
    </>
  );
}
