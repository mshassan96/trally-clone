import React from "react";

const FeatureCard = ({ img, heading, text }) => {
  return (
    <div className="feature-card">
      <img src={img} alt="" className="card-icon" />
      <h3 className="heading">{heading}</h3>
      <p className="text">{text}</p>
    </div>
  );
};

export default FeatureCard;
