import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BrandCarosuel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.boldomatic.com/content/post/Y2RddQ/SPONSER-SPONSOR-SPONSER?size=800"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.boldomatic.com/content/post/5rzeSg/SPONSOR-SPONSOR-SPONSOR?size=304"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarosuel;
