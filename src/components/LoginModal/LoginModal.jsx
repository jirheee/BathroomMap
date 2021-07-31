import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./LoginModal.css";

export const LoginModal = () => {
  const [visibility, setVisibility] = useState("visible");

  const handleCloseBtnClicked = () => {
    setVisibility("hidden");
  };

  const handleLoginBtnClicked = () => {
    console.log("login");
  };

  return (
    <div
      id="loginModal"
      className="d-flex align-items-center justify-content-center"
      style={{ visibility }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleLoginBtnClicked}>
            Log In
          </Button>
          <Button variant="secondary" onClick={handleCloseBtnClicked}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
