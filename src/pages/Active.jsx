import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { Container } from "@mui/system";
import Form from "../components/Form";

export default function Active() {
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
        <Form inputActive={true} />
        {todos?.map((todo) => {
          if (!todo.completed) return <Todo todo={todo} key={todo.id} />;
          else return null;
        })}
      </Container>
    </>
  );
}
