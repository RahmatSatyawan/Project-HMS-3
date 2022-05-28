import React from "react";
import logo from "../../asset/img/logo.png";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
} from "reactstrap";

const AVATAR =
  "https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg";

const Header = () => (
  <header>
    <Navbar
      color="light"
      light
      expand="xs"
      className="border-bottom border-gray bg-white"
      style={{ height: 80 }}
    >
      <Container>
        <Row className=" w-100 align-items-center">
          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand
              className=" mrx-auto d-inline-block p-0"
              href="/"
              style={{ width: 140 }}
            >
              <img
                src={logo}
                alt="logo"
                className="position-relative img-fluid"
              />
            </NavbarBrand>
          </Col>

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/product">
                  Product
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input type="search" className="mr-7" placeholder="Search..." />
            </Form>
            
            <NavLink className="font-weight-bold" href="/login">
              Login/Register
            </NavLink>

            <div>
              <img
                src={AVATAR}
                alt="avatar"
                className="mx-3 img-fluid rounded-circle"
                style={{ width: 36 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
