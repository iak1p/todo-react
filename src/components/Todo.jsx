import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { style, active } from "../styles/style.js";

const Todo = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const {
    todo: { id, todoText, completed },
  } = props;

  useEffect(() => {
    setValue(todoText);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deleteItem = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const toggleActiveItem = () => {
    dispatch({ type: "TOGGLE_ACTIVE", payload: id });
  };
  const changeTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: "CHANGE_TODO",
      payload: { value, id },
    });
    event.target[0].blur();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const sx = completed ? active : style;

  return (
    <>
      <Box sx={sx}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox onClick={toggleActiveItem} checked={completed} />
          <form onSubmit={changeTodo}>
            <TextField
              id="outlined-basic"
              value={value}
              variant="standard"
              onChange={handleChange}
              sx={{ width: "1000px" }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </form>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={deleteItem}
            size="small"
            color="error"
            sx={{ borderRadius: 0, height: "100%" }}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Todo;
