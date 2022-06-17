import React from "react";
import { Form } from "react-bootstrap";
import "./styles.scss";

const Register = () => {
  return (
    <div className="register bg-info">
      <Form>
        <h3>Sign up for a new account</h3>
        <div className="row mb-3">
          <input
            type="name"
            className="form-control mx-3 col"
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control mx-3 col"
            placeholder="Telp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-danger">
            Register
          </button>
        </div>
      </Form>
    </div>
  );
};
export default Register;
