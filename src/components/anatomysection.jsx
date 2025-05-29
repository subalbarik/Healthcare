import React from "react";
import anatomyImage from "../assets/fullbody.jpg";

const AnatomySection = ({ indicators }) => {
  return (
    <div className="anatomy-section" style={{height:"420px"}}>
      <div style={{ display: "flex" }}>
      
        <span style={{ fontWeight: "bold",fontSize:"20px",marginBottom:'20px' }}>Dashboard</span>
      </div>

      <div className="anatomy-image-container">
        <img
          src={anatomyImage}
          alt="Anatomy"
          className="anatomy-img"
          style={{ height: "380px", width: "330px" }}
        />
        {indicators.map((item, index) => (
          <div
            key={index}
            className="indicator"
            style={{ top: item.top, left: item.left }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
