import React from "react";

import NavRoutes from "../../routes/NavRoutes";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

const HeaderNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">Craftpedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="/category">
                Category
              </Nav.Link>
              <Nav.Link className="text-white" href="/shipping">
                Shipping
              </Nav.Link>
              <Nav.Link className="text-white" href="/about-us">
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-4"
                aria-label="Search"
              />
              <Button
                className="text-nowrap"
                variant=" outline-warning bg-light"
              >
                <span>
                  <i className="bi bi-bag"></i>
                </span>
                <span> 3 items</span>
              </Button>

              <Dropdown as={ButtonGroup}>
                <Button className="ms-4 " variant="info">
                  <Nav.Link className="text-white" href="/login-register">
                    Login/Register
                  </Nav.Link>
                </Button>

                <Dropdown.Toggle
                  split
                  variant="info"
                  id="dropdown-split-basic"
                  align="end"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/cart">Cart</Dropdown.Item>
                  <Dropdown.Item href="/transaction">Transaction</Dropdown.Item>
                  <Dropdown.Item as="button">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavRoutes />
    </div>
  );
};

export default HeaderNav;
