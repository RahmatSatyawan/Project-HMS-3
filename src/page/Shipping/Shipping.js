import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

const Shipping = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <hr />
        <h1 className="text-black mb-5">Shipping Rate</h1>
        <Row>
          <Col md={6} className="productWrapper">
            <Card
              style={{
                width: "25rem",
                backgroundColor: "#09B3B0",
                padding: "20px",
                margin: "auto",
              }}
            >
              <Card.Body mt-2>
                <Card.Title>Shipping Rate Domestic</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">From</Form.Label>
                    <Form.Control placeholder="From...." />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">To</Form.Label>
                    <Form.Control placeholder="From...." />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Shipper</Form.Label>
                    <Card className="d-flex align-items-center">
                      <Card.Body className="d-flex justify-content-evenly">
                        <Button className="btn-sm">JNE</Button>
                        <Button className="btn-sm">Sicepat</Button>
                        <Button className="btn-sm">AnterAja</Button>
                      </Card.Body>
                      <Card.Body className="d-flex justify-content-evenly">
                        <Button className="btn-sm">Ninja Express</Button>
                        <Button className="btn-sm">Pos Indonesia</Button>
                        <Button className="btn-sm">Wahana</Button>
                      </Card.Body>
                    </Card>
                    <Button
                      variant="outline-success bg-white text-primary"
                      className="mt-4"
                    >
                      Check!
                    </Button>
                  </Form.Group>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="productWrapper mt-5">
            <div className="checkPriceShipping flex-d m-auto p-3">
              <hr />
              <h3>Cek Ongkir Bisa Lebih Cepat!</h3>
              <p>
                Hanya hitungan beberapa detik saja Anda sudah bisa menghitung
                biaya kirim untuk beberapa ekspedisi
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shipping;
