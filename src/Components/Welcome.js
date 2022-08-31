import React from "react";
import Background from "../images/Background.svg";
import HomeMockup from "../images/Home-Mockup.png";
import ActiveTrips from "../images//active-trips.svg";
import List from "../images/list.svg";
import Live from "../images/live.png";

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="container">
        <div className="py-64">
          <div className="grid-layout">
            <div className="grid-left py-128 py-s-0">
              <p className="tagline">The virtual tour experience</p>
              <h1 className="heading mt-0">
                Welcome to <span className="highlighted">Trally</span>, the
                future of tourism.
              </h1>
              <p className="text mt-0">
                Break free from the conventional form of exploring and dive into
                the world of virtual tour experience. Be where you want to be at
                any given moment.
              </p>
            </div>
            <div className="layered-img">
              <img src={Background} alt="background" className="background" />
              <img src={HomeMockup} alt="mockup" className="mockup" />
              <img src={ActiveTrips} alt="" className="layer-img-1" />
              <img src={List} alt="" className="layer-img-2" />
              <img src={Live} alt="" className="layer-img-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
