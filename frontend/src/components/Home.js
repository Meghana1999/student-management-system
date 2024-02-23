import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col

 
import slide04 from "../static/slide04.jpg";
import slide05 from "../static/slide05.jpg";
import slide06 from "../static/slide06.jpg";

const Home = () => {
  return (
   <div className='row'>
 <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide04}
                alt="First slide"
              /> 
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide05}
                alt="Second slide"
              /> 
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide06}
                alt="Third slide"
              /> 
            </Carousel.Item>
          </Carousel> 
   </div> 
  );
}

export default Home;
