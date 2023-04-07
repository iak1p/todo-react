import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../../components/Note/Note";

export default function All(props) {
  const items = useSelector((state) => state.items.data);
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();
  let valueID;

  const handleChange = (event) => {
    valueID = event.target.value;
  };

  const setItems = (event) => {
    event.preventDefault();
    event.target[0].value = "";
    let arr = items;
    let idOfItem = id;
    idOfItem += 1;
    arr.push({ id: idOfItem, name: valueID });
    dispatch({ type: "SET_ITEMS", payload: arr });
    dispatch({ type: "SET_ID", payload: idOfItem });
  };

  return (
    <>
      <form onSubmit={setItems}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Create new" />
      </form>
      {items.map((item) => {
        return <Note item={item} key={item.id} id={item.id} />;
      })}
    </>
  );
}
