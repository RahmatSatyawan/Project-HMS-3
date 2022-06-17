import React from "react";
import { Row } from "react-bootstrap";

import CarouselCard from "../../component/Carousel/Carousel";
import Product from "../../component/Product/Product";
import AboutUs from "../AboutUs/AboutUs";
import Shipping from "../Shipping/Shipping";

const Home = () => {
  return (
    <div>
      <Row>
        <CarouselCard />
      </Row>
      <Row>
        <Product />
      </Row>
      <Row>
        <Shipping />
      </Row>
      <Row>
        <AboutUs />
      </Row>
    </div>
  );
};

export default Home;
