import React from "react";
import { Form } from "react-bootstrap";
import "./styles.scss";

const Register = () => {
  return (
    <div className="register">
      <Form>
        <h3>Register</h3>
        <div className="row mb-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control mx-3 col"
            placeholder="First Name"
          />
          <input
            type="name"
            className="form-control mx-3 col"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
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
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-warning">
            Register
          </button>
        </div>
      </Form>
    </div>
  );
};
export default Register;
