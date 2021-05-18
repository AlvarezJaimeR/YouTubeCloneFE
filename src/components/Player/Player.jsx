import React from "react";

const Player = (props) => {
  return (
    <iframe
      id={props.id}
      type="text/html"
      width={props.width}
      height={props.height}
      src={props.link}
      frameBorder="0"
    ></iframe>
  );
};

export default Player;
