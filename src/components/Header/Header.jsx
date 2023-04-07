import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul className="header">
        <Link to="/all" className="link">
          All
        </Link>
        <Link to="/active" className="link">
          In progress
        </Link>
        <Link to="/completed " className="link">
          Сompleted
        </Link>
      </ul>
    </>
  );
}
