import React from "react";
import {  useSelector } from "react-redux";
import Note from "../components/Note";
import { Container } from "@mui/system";

export default function Completed() {
  const items = useSelector((state) => state.items.data);

  return (
    <>
      <Container>
        {items.map((item) => {
          if (!item.active)
            return (
              <Note
                item={item}
                key={item.id}
                id={item.id}
                active={!item.active}
              />
            );
          else return null;
        })}
      </Container>
    </>
  );
}
