import { Container, Card, Row, Col, Nav, Button } from "react-bootstrap";

const Product = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <hr />
        <h1 className="text-black">Product</h1>
        <Row>
          <Col>
            <div className="navbar-product">
              <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                  <Nav.Link className="text-white" href="/category1">
                    Category 1
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white" eventKey="category2">
                    Category 2
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white" eventKey="category3">
                    Category 3
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white" eventKey="category4">
                    Category 4
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>
        <Button variant="warning" className="my-4 text-white">
          All Product
        </Button>
        <Row>
          <Col md={4} className="productWrapper" id="trending">
            <Card className="productImage">
              <Card.Img
                src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                alt="Card image"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="productWrapper">
            <Card className="productImage">
              <Card.Img
                src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                alt="Card image"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="productWrapper">
            <Card className="productImage">
              <Card.Img
                src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                alt="Card image"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="productWrapper">
            <Card className="productImage">
              <Card.Img
                src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                alt="Card image"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="productWrapper">
            <Card className="productImage">
              <Card.Img
                src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                alt="Card image"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="productWrapper">
            <Card className="productImage">
              <Card.Img
                src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                alt="Card image"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
