import Carousel from "react-bootstrap/Carousel";
import photo1 from "../assets/group1.png";
import photo2 from "../assets/group2.png";
import photo3 from "../assets/group3.png";
// import photo4 from "../assets/main.png";
import "./slides.css";

function SlidesCarousels() {
  return (
    <Carousel className="slides">
      <Carousel.Item className="slides-item">
        <img
          className="d-block w-75 h-100 ms-5 slide-img"
          src={photo1}
          alt="First slide"
        />
        <Carousel.Caption className="slide-cap">
          <h3 className="slides-cnt">First slide label</h3>
          <p className="slides-cnt">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slides-item">
        <Carousel.Caption className="slide-cap">
          <h3 className="slides-cnt">Second slide label</h3>
          <p className="slides-cnt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>{" "}
        <img className="d-block w-75 ms-5" src={photo2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className="slides-item">
        <Carousel.Caption className="slide-cap">
          <h3 className="slides-cnt">Third slide label</h3>
          <p className="slides-cnt">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <img className="d-block w-75 ms-5" src={photo3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlidesCarousels;
