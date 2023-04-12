import { Container } from "@mui/system";
import React from "react";
import Note from "../components/Note";
import { Box, styled } from "@mui/material";

export default function All(props) {
  const { items } = props;
  const ItemsList = styled(Box)({
    display: "flex",
    flexDirection: "column",
  });

  return (
    <>
      <Container>
        <ItemsList>
          {items.map((item) => {
            return (
              <Note
                item={item}
                key={item.id}
                id={item.id}
                active={!item.active}
              />
            );
          })}
        </ItemsList>
      </Container>
    </>
  );
}
