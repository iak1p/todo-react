import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { style, active, timeleftStyle } from "./TodoStyle.js";

const Todo = (props) => {
  const [value, setValue] = useState("");
  const [[days, hours, minutes, seconds], setTime] = useState([0, 0, 0, 0]);
  const dispatch = useDispatch();
  const {
    todo: { id, todoText, completed, endTime },
  } = props;
  let sx = completed ? active : style;

  function getTimeRemaining() {
    let total = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    if (completed) return;
    setTime([days, hours, minutes, seconds]);
  }
  useEffect(() => {
    setValue(todoText);
    getTimeRemaining();
    const timer = setInterval(() => getTimeRemaining(), 1000);
    return () => clearInterval(timer);
  }, [todoText]); // eslint-disable-line react-hooks/exhaustive-deps

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
              sx={{ width: "850px" }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </form>
          <Typography
            variant="p"
            component="p"
            textAlign="center"
            sx={timeleftStyle}
          >
            {completed
              ? "Completed"
              : `${days ? days : "0"} days ${hours ? hours : "00"}:${
                  minutes ? minutes : "00"
                }:${seconds ? seconds : "00"} left`}
          </Typography>
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
