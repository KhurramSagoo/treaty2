import React from "react";
import { Carousel } from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { CSSTransition } from "react-transition-group";
import photo1 from "../assets/group1.png";
import photo2 from "../assets/group2.png";
import photo3 from "../assets/group3.png";
import "./CarouselSlide.css";

const items = [
  {
    name: "Item 1",
    description: "Description 1",
    image: photo1,
  },
  {
    name: "Item 2",
    description: "Description 2",
    image: photo2,
  },
  {
    name: "Item 3",
    description: "Description 3",
    image: photo3,
  },
];

export default function CarouselSlide() {
  const slideDuration = 1000; // 1 second

  const navigateCarousel = (next) => {
    if (next) {
      // @ts-ignore
      Carousel.slideNext();
    } else {
      // @ts-ignore
      Carousel.slidePrev();
    }
  };

  return (
    <>
    <Carousel
      autoPlay
      animation="fade"
      timeout={slideDuration}
      navButtonsAlwaysVisible
      NextIcon={<ArrowForwardIos />}
      PrevIcon={<ArrowBackIos />}
      >
      {items.map((item, index) => (
        <CSSTransition
        key={index}
        timeout={slideDuration}
        classNames="carousel-slide"
        >
          <Paper>
            <Box textAlign="center">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </Box>
            <img src={item.image} alt={item.name} />
          </Paper>
        </CSSTransition>
      ))}
    </Carousel>
          </>
  );
}
