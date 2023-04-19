import React from "react";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";
import { Container } from "@mui/system";
import Form from "../components/Form";

export default function Active() {
  const todos = useSelector((state) => state.todos);

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
