import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
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
    let idOfItem = id + 1;
    arr.push({ id: idOfItem, name: value, active: true });
    dispatch({ type: "SET_ITEMS", payload: arr });
    dispatch({ type: "SET_ID", payload: idOfItem });
    setValue("");
  };
  return (
    <>
      <form onSubmit={setItems}>
        <TextField
          id="outlined-basic"
          label="What is need to be done?"
          variant="outlined"
          value={value}
          onChange={handleChange}
          sx={{ width: "100%", marginTop: "20px" }}
        />
      </form>
    </>
  );
}
