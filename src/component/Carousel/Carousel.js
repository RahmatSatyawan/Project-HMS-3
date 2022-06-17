import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import "./styles.scss";

const CarouselCard = () => {
  return (
    <div>
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cf.shopee.co.id/file/827178bbe5ebcadf3b64da5927ed27c6"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="text-start text-black">
              <h3>Sed ut perspiciatis unde omnis</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarouselCard;
