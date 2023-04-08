import { Container } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../components/Note";
import { Button, TextField } from "@mui/material";

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
      <Container>
        <form onSubmit={setItems}>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            value={value}
            onChange={handleChange}
            size="small"
          />
          <Button variant="contained" type="submit" color="secondary">
            New
          </Button>
        </form>
        {items.map((item) => {
          return (
            <Note
              item={item}
              key={item.id}
              id={item.id}
              active={!item.active}
            />
          );
        })}
      </Container>
    </>
  );
}
