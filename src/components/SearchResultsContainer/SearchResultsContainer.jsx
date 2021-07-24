import React from "react";
import "./SearchResultsContainer.css";

const SearchResultsContainer = (props) => {
	const videos = props.videos.items;
	const nextIndex = props.videos.nextPageToken;
	const previousIndex = props.videos.prevPageToken;
	return (
		<div className="container">
			<div className="row">
				<div className="col-1 indexButton">
					<button
						className="btn btn-dark"
						onClick={() => props.changePage(previousIndex)}>
						Back
					</button>
				</div>
				<div className="col-10">
					<div className="row">
						{videos.map((video) => (
							<div className="col-6" key={video.id.videoId}>
								<button
									key={video.id.videoId}
									className="btn btn-dark video-layout"
									onClick={() => props.setPlayer(video)}>
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
					<button
						className="btn btn-dark"
						onClick={() => props.changePage(nextIndex)}>
						More Videos
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchResultsContainer;
