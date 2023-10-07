import React from "react";
import { Container } from "./styled";

export default function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <Container>
      <button className="yellow" onClick={onLeftClick}>◀</button>
        <div>
          {page} / {totalPages}
        </div>
      <button className="yellow" onClick={onRightClick}>▶</button>
    </Container>
  );
}
