import React from "react";
import Player from "../Player/Player";

const SearchResultsContainer = (props) => {
  const videos = props.videos.items;
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        {videos.map((video) => (
          <img
            key={video.id.videoId}
            src={`https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`}
            className="col"
          />
          // <Player
          //   className="col"
          //   key={video.id.videoId}
          //   id={video.id.videoId}
          //   width="200"
          //   height="150"
          //   link={`http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://example.com`}
          //   // link={`https://www.googleapis.com/youtube/v3/search?q=${video.id.videoId}&key=${apiKey}}`}
          // />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsContainer;
