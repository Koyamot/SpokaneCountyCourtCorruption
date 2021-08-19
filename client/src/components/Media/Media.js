import React from "react";
import ReactPlayer from "react-player";

import "./Media.scss";

const Media = () => {
  return (
    <div className="media-div">
      <section className="video-box">
        <h2>Our Story:</h2>
        <ReactPlayer
          className="video"
          url="https://youtu.be/91D3_5H5Sz0"
          controls="true"
        />
      </section>
      <section className="links-box">
        <h2>Read More</h2>

      </section>
    </div>
  );
};

export default Media;
