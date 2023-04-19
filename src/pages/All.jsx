import { Container } from "@mui/system";
import Todo from "../components/Todo";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import React from "react";

export default function All() {
  const todos = useSelector((state) => state.todos);

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
