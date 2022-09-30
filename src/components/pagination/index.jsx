import React from "react";
import { Container } from "./styled";

export default function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <Container>
      <button onClick={onLeftClick}>
        <img
          src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
          className="left-btn"
        ></img>
      </button>
      <div>
        {page} / {totalPages}
      </div>
      <button onClick={onRightClick}>
        <img
          src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
          className="right-btn"
        ></img>
      </button>
    </Container>
  );
}
