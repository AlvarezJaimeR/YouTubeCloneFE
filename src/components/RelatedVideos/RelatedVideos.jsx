import React from "react";

const RelatedVideos = (props) => {
  const relatedVideos = props.relatedVideos.items;
  console.log(relatedVideos);
  return (
    <div className="container justify-content-center">
      <div className="column">
        {relatedVideos.map((video) => (
          <div key={video.id.videoId} className="thumbnail">
            <button
              className="btn btn-outline-primary col"
              onClick={() => props.setPlayer(video.id.videoId)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`}
                width="200"
                height="100"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;
