import React, { memo } from "react";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";
import { Container } from "@mui/system";
import Form from "../components/Form";

const ActiveTodoPage = () => {
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
};

export default memo(ActiveTodoPage);
