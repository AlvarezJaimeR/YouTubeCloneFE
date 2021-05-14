import React from "react";

const Player = (props) => {
  return (
    <iframe
      className={props.className}
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
