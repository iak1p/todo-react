import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Typography, Stack, Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTodos = () => {
    dispatch({ type: "DELETE_TODOS", payload: [] });
  };

  return (
    <>
      <Container>
        <Typography variant="h3" component="p" textAlign="center">
          To do
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="p" component="span" textAlign="center">
            {todos.length} todos
          </Typography>
          <Box>
            <Stack direction="row" spacing={2} justifyContent="center">
              <NavLink to="/all">All</NavLink>
              <NavLink to="/active">In progress</NavLink>
              <NavLink to="/completed">Сompleted</NavLink>
            </Stack>
          </Box>
          <Button
            variant="contained"
            onClick={deleteTodos}
            size="small"
            sx={{ borderRadius: 0, height: "100%" }}
          >
            Delete Completed
          </Button>
        </Box>
      </Container>
    </>
  );
}
