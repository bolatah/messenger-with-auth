import React from "react";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        className={"video-box"}
        url={"https://www.youtube.com/watch?v=xyiuBEBv0_0&t=4660s"}
        controls={false}
        playing={true}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default Video;
