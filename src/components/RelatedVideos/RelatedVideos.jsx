import React from "react";

const RelatedVideos = (props) => {
	const relatedVideos = props.relatedVideos.items;
	return (
		<div className="container justify-content-center">
			<div className="column">
				{relatedVideos.map((video) => (
					<div key={video.id.videoId} className="thumbnail">
						<button
							className="btn btn-dark col"
							onClick={() => props.updateActiveVideo(video)}>
							<img
								src={video.snippet.thumbnails.medium.url}
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
