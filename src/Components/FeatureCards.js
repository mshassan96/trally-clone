import React from "react";
import FeatureCard from "./FeatureCard";
import imgCard1 from "../images/card1.svg";
import imgCard2 from "../images/card2.svg";
import imgCard3 from "../images/card3.svg";
const FeatureCards = () => {
  return (
    <div className="feature-cards-section">
      <div className="container">
        <div className="py-128 py-s-0">
          <div className="grid-layout">
            <FeatureCard
              img={imgCard1}
              heading="Pick a city"
              text="Spin the desk globe and pick a city that you wish to explore."
            />
            <FeatureCard
              img={imgCard2}
              heading="Save the date"
              text="Don’t let an exciting adventure pass you by - mark your calendar!"
            />
            <FeatureCard
              img={imgCard3}
              heading="Start Live Event"
              text="Get comfortable and enjoy the experience wherever you may be."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
