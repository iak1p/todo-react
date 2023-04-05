import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul className="header">
        <Link to="/main" className="link">
          Main
        </Link>
        <Link to="/all" className="link">
          All
        </Link>
        <Link to="/completed " className="link">
          Сompleted
        </Link>
      </ul>
    </>
  );
}
