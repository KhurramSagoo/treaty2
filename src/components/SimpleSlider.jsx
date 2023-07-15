import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../assets/group1.png";
import photo2 from "../assets/group2.png";
import photo3 from "../assets/group3.png";
import "./simpleSlide.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  React.useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  return (
    <div className="container">
      <Slider {...settings}>
        <div className="item">
          <h3 className="heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            libero cumque maiores!
          </h3>
          <img src={photo1} alt="" className="img" />
        </div>
        <div className="item">
          <h3 className="heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            libero cumque maiores!
          </h3>
          <img src={photo2} alt="" className="img" />
        </div>
        <div className="item">
          <h3 className="heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            libero cumque maiores!
          </h3>
          <img src={photo3} alt="" className="img" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
