import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TableProduct from "../../component/Table/TableProduct";
import TableTransaction from "../../component/Table/TableTransaction";

const Admin = () => {
  const [showTable, setShowTable] = useState("product");
  return (
    <div>
      <Row className="justify-content-center">
        <Col
          className="m-4 h-25 d-inline-block align-content-center bg-danger"
          md={10}
        >
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setShowTable("product");
              }}
            >
              Product
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setShowTable("transaction");
              }}
            >
              Transaction
            </button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="d-flex" md={10}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-4"
            aria-label="Search"
          />
          <Button className="text-nowrap" variant=" outline-warning bg-light">
            <span>Tambah Data</span>
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="m-4 h-75 d-inline-block" md={10}>
          {showTable === "product" && <TableProduct />}
          {showTable === "transaction" && <TableTransaction />}
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
