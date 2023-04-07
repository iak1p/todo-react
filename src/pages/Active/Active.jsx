import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Note from "../../components/Note/Note";

export default function Active(props) {
  const items = useSelector((state) => state.items.data);
  
  return (
    <>
      {items.map((item) => {
        return <Note item={item} key={item.id} id={item.id} />;
      })}
    </>
  );
}
