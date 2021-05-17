import React from "react";
// import Player from "../Player/Player";

const SearchResultsContainer = (props) => {
  const videos = props.videos.items;
  return (
    <div className="container">
      <div className="row row-cols-3 justify-content-center">
        {videos.map((video) => (
          <button
            key={video.id.videoId}
            className="btn btn-outline-primary col"
            onClick={() => props.setPlayer(video.id.videoId)}
          >
            <img
              // key={video.id.videoId}
              src={`https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`}
              // className="col"
              width="285"
              height="150"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsContainer;
