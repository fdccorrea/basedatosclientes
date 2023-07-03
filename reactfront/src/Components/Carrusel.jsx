import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from '../Images/carrusel1.jpg';
import carrusel2 from '../Images/carrusel2.jpg';
import carrusel3 from '../Images/carrusel3.jpg';
import '../Styles/carrusel.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imagen-carrusel"
         src={carrusel1} 
        />
        <Carousel.Caption>
          <h3> EXCELENCIA EN ENTRANAMIENTOS</h3>          
        </Carousel.Caption>        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imagen-carrusel"
          src={carrusel2} 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> EQUIPOS DE ULTIMA GENERACION </h3>          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imagen-carrusel"
          src={carrusel3} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> FORTALECIMIENTO DE MUSCULOS </h3>          
        </Carousel.Caption>        
      </Carousel.Item>

    </Carousel>
  );
}

export default UncontrolledExample;