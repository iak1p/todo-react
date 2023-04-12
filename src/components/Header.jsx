import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Typography, Stack, styled } from "@mui/material";
import React from "react";
import Form from "./Form";

export default function Header() {
  const LinkText = styled(Typography)({
    fontSize: 16,
  });

  return (
    <>
      <Typography variant="h3" component="p" textAlign="center">
        To do
      </Typography>
      <Container>
        <Stack direction="row" spacing={2} justifyContent="center">
          <LinkText>
            <Link to="/all">All</Link>
          </LinkText>
          <LinkText>
            <Link to="/active">In progress</Link>
          </LinkText>
          <LinkText>
            <Link to="/completed">Сompleted</Link>
          </LinkText>
        </Stack>
        <Form />
      </Container>
    </>
  );
}
