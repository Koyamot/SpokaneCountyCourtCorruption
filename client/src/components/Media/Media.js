import React from "react";
import ReactPlayer from "react-player";

import "./Media.scss";

const Media = () => {
  return (
    <div className="media-div">
      <section className="video-box">
        <h2>Watch Our Story:</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/91D3_5H5Sz0"
            width="100%"
            height="100%"
          />
        </div>
      </section>
    </div>
  );
};

export default Media;
