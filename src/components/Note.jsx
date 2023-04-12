import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Checkbox, Typography } from "@mui/material";

export default function Note(props) {
  const { active } = props;
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

  const setActiveItem = () => {
    let arr = [];
    items.forEach((el) => {
      if (el.id === id) {
        el.active = false;
        arr.push(el);
      } else arr.push(el);
    });

    dispatch({ type: "SET_ITEMS", payload: arr });
  };

  return (
    <>
      <Box
        sx={{
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
        }}
      >
        <Box>
          <Checkbox onClick={setActiveItem} checked={active} />
          <Typography
            variant="p"
            component="span"
            sx={{ textTransform: "capitalize" }}
          >
            {item.name}
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={deleteItem}
          size="small"
          sx={{ borderRadius: 0 }}
        >
          x
        </Button>
      </Box>
    </>
  );
}
