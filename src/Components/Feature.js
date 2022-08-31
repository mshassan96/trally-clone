import React from "react";

const Feature = () => {
  return (
    <div className="feature-section">
      <div className="container">
        <div className="py-128">
          <div className="grid">
            <div className="youtube-container">
              <iframe
                src="https://www.youtube.com/embed/a6mh9UzPeeQ"
                title="Introducing Trally."
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
              ></iframe>
            </div>
            <div className="grid-right">
              <p className="tagline">Anytime, Anywhere.</p>
              <h2 className="heading feature-heading">
                Find out what <span className="highlighted">Trally</span> is all
                about.
              </h2>
              <p className="text mt-0">
                Whether you love showing people around, or simply are in love
                with exploring the world, Trally has something for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
