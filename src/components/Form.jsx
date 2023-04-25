import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Form = ({ inputActive }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const setItems = (event) => {
    event.preventDefault();
    if (value !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Math.floor(Math.random() * 999999),
          todoText: value,
          completed: false,
        },
      });
    }
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
          disabled={inputActive}
        />
      </form>
    </>
  );
};

export default Form;
