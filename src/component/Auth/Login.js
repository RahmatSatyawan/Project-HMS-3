import React from "react";
import { Form } from "react-bootstrap";
import "./styles.scss";

const Login = () => {
  return (
    <div className="login bg-danger">
      <Form>
        <h3>Login to your account</h3>
        <div className="mb-3">
          <label>Email or Username</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="text">
            <p>
              forgot your password, <a href="#"> click here</a>
            </p>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-info">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
