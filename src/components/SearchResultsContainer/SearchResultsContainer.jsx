import React from "react";
const SearchResultsContainer = (props) => {
  const videos = props.videos.items;
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        {videos.map((video) => (
          <div key={video.id.videoId} className="col">
            {video.id.videoId}
          </div>
        ))}
        {/* <div className="col">Video</div>
        <div className="col">Video</div>
        <div className="col">Video</div>
        <div className="col">Video</div>
        <div className="col">Video</div>
        <div className="col">Video</div>
        <div className="col">Video</div>
        <div className="col">Video</div>
        <div className="col">Video</div> */}
      </div>
    </div>
  );
};

export default SearchResultsContainer;
