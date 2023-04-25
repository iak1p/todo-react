import { Container } from "@mui/system";
import Todo from "../components/Todo";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import React, { memo } from "react";

const AllTodoPage = () => {
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
};

export default memo(AllTodoPage);
