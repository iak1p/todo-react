import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Note from "../../components/Note/Note";

export default function All(props) {
  const [value, setValue] = useState("");
  const items = useSelector((state) => state.items.data);
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const setItems = (event) => {
    event.preventDefault();
    let arr = items;
    let idOfItem = id;
    idOfItem += 1;
    arr.push({ id: idOfItem, name: value, active: true });
    dispatch({ type: "SET_ITEMS", payload: arr });
    dispatch({ type: "SET_ID", payload: idOfItem });
    setValue("");
  };

  return (
    <>
      <form onSubmit={setItems}>
        <input type="text" value={value} onChange={handleChange} />
        <Button type="submit" text="Create new"></Button>
      </form>
      {items.map((item) => {
        return <Note item={item} key={item.id} id={item.id} />;
      })}
    </>
  );
}
