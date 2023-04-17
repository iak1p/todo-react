import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Edit";

export default function Todo(props) {
  const style = {
    border: 1,
    borderColor: "gray",
    borderRadius: 1,
    borderStyle: "solid",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: "20px",
    overflow: "hidden",
  };

  const dispatch = useDispatch();
  const {
    todo: { id, todoText, completed },
  } = props;

  const deleteItem = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const toggleActiveItem = () => {
    dispatch({ type: "TOGGLE_ACTIVE", payload: id });
  };

  return (
    <>
      <Box sx={style}>
        <Box>
          <Checkbox onClick={toggleActiveItem} checked={completed} />
          <Typography
            variant="p"
            component="span"
            sx={{ textTransform: "capitalize" }}
          >
            {todoText}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={deleteItem}
            size="small"
            sx={{ borderRadius: 0, height: "100%" }}
          >
            <ModeIcon />
          </Button>
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
}
