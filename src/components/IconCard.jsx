import React from "react";
import photo1 from "../assets/chat.png";
import photo2 from "../assets/medication.png";
import photo3 from "../assets/Schedule.png";
import photo4 from "../assets/sliceing.png";
import photo5 from "../assets/Track-Visit.png";
import "./icon-card.css";

const IconCard = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="circle">
          <img className="logo" src={photo1} alt="" />
        </div>

        <h5>Lorem, ipsum.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, id!</p>
      </div>
      <div className="item">
        <img className="logo" src={photo2} alt="" />
        <h5>Lorem, ipsum.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, id!</p>
      </div>
      <div className="item">
        <img className="logo" src={photo3} alt="" />
        <h5>Lorem, ipsum.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, id!</p>
      </div>
      <div className="item">
        <img className="logo" src={photo4} alt="" />
        <h5>Lorem, ipsum.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, id!</p>
      </div>
      <div className="item">
        <img className="logo" src={photo5} alt="" />
        <h5>Lorem, ipsum.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, id!</p>
      </div>
    </div>
  );
};

export default IconCard;
