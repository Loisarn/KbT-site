import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselPage() {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4125659/pexels-photo-4125659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="first slide"
        />
        {/* <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="second slide"
        />
        {/* <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg"
          alt="third slide"
        />
        {/* <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
