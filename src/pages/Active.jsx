import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../components/Note";
import { Container } from "@mui/system";

export default function Active(props) {
  const items = useSelector((state) => state.items.data);

  return (
    <>
      <Container>
        {items.map((item) => {
          if (item.active)
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
