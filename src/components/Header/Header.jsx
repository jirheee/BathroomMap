import React from "react";
import { Button } from "react-bootstrap";
function Header() {
  return (
    <header className="header">
      {" "}
      <strong>Header</strong>{" "}
      <ul>
        {" "}
        <li>
          {" "}
          <Button>홈</Button>{" "}
        </li>{" "}
        <li>
          {" "}
          <Button>프로필</Button>{" "}
        </li>{" "}
      </ul>{" "}
    </header>
  );
}
export default Header;
