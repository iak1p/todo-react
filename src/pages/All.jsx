import { Container } from "@mui/system";
import Todo from "../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import React, { useEffect } from "react";

export default function All() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_TODOS",
      payload: JSON.parse(localStorage.getItem("todos")),
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Container>
        <Form inputActive={false} />
        {todos?.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </Container>
    </>
  );
}
