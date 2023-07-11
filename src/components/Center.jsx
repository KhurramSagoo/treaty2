import React from "react";
import sidephoto from "../assets/sliceing.png";
import "./center.css";

const Center = () => {
  return (
    <>
      <div className="container-center">
        <div className="item-left">
          <img className="container-image" src={sidephoto} alt="" />
        </div>
        <div className="item-right">
          {/* <div className="item-container"> */}
          <div className="item-child">
            <h6>OUR AMAZING SERVICES</h6>
            <h6>
              Lorem ipsum dolor, sit amet coipsum maiores laborum praesentium.
            </h6>
          </div>
          <div className="item-child">
            <h6>Lorem ipsum dolor sit amet.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              quos accusantium. Possimus.
            </p>
          </div>
          <div className="item-child">
            <h6>Lorem ipsum dolor sit amet.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              quos accusantium. Possimus.
            </p>
          </div>
          <div className="item-child">
            <h6>Lorem ipsum dolor sit amet.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              quos accusantium. Possimus.
            </p>
          </div>
          <div className="item-child">
            <h6>Lorem ipsum dolor sit amet.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              quos accusantium. Possimus.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Center;
