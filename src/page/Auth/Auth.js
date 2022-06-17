import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Login from "../../component/Auth/Login";
import Register from "../../component/Auth/Register";
import login from "../../asset/img/login.svg";
import "./styles.scss";

const Auth = () => {
  const [show, setShow] = useState("login");
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="login-register">
            <div className="row">
              <Button
                className="col btn lg btn-danger"
                onClick={() => {
                  setShow("login");
                }}
              >
                Sign In
              </Button>

              <Button
                className="col btn lg btn-info"
                onClick={() => {
                  setShow("register");
                }}
              >
                Sign Up
              </Button>
              {show === "login" && <Login />}
              {show === "register" && <Register />}
            </div>
          </Col>
          <Col>
            <img src={login} className="img-fluid rounded" alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auth;
