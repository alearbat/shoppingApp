import { React, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import FirstSlide from '../assets/indoor-vertical-garden.jpg'
import SecondSlide from '../assets/vertical-garden-window.jpg'
import ThirdSlide from '../assets/balcones.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FirstSlide}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Somos <strong>Diseñadores y artistas</strong> <br/>que utilizamos plantas reales <br/>para transformar espacios.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SecondSlide}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nuestros diseños requieren <strong>cero</strong> mantenimiento.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ThirdSlide}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Diseños personalizados <br/>para cada necesidad.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel
