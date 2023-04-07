import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Note(props) {
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();
  const { item, id } = props;

  const deleteItem = () => {
    let arr = [];
    items.forEach((el) => {
      if (el.id !== id) {
        arr.push(el);
      }
    });

    dispatch({ type: "SET_ITEMS", payload: arr });
  };

  return (
    <>
      <p>
        {item.name}
        <button onClick={deleteItem}>X</button>
      </p>
    </>
  );
}
