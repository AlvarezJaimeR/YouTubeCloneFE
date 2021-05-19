import React from "react";

const SearchResultsContainer = (props) => {
  const videos = props.videos.items;
  const nextIndex = props.videos.nextPageToken;
  const previousIndex = props.videos.prevPageToken;
  return (
    <div className="container">
      <div className="row row-cols-3 justify-content-center">
        <div className="col-1 indexButton">
          <button
            className="btn btn-outline-danger"
            onClick={() => props.changePage(previousIndex)}
          >
            Previous Page
          </button>
        </div>
        <div className="col-10">
          <div className="row row-cols-3 justify-content-center">
            {videos.map((video) => (
              <div className="col" key={video.id.videoId}>
                <button
                  key={video.id.videoId}
                  className="btn btn-outline-primary col"
                  onClick={() => props.setPlayer(video)}
                >
                  <img
                    // src={`https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`}
                    src={video.snippet.thumbnails.medium.url}
                    width="285"
                    height="150"
                  />
                </button>
                <p className="text-center">{video.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-1 indexButton">
          <button className="btn btn-outline-danger" onClick={() => props.changePage(nextIndex)}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsContainer;
