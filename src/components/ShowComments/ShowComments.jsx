import React from "react";
import "./ShowComments.css";
import TextContain from '../TextContain/TextContain';

const ShowComments = (props) => {
  const currentVideoId = props.videoId;
  const commentInfo = props.commentInfo;
  /*     const commentIdArray = props.commentInfo.map(video => video.videoId);
    console.log(commentIdArray); */
  const filteredIdArray = commentInfo.filter(
    (commentInfo) => commentInfo.videoId === currentVideoId
  );
  return (
    <div>
      <h1>Show Comments</h1>
      <div>
        {filteredIdArray.map((video, index) => 
            <div key={index}>
                <div>
                    {video.date}
                </div>
                <div className="video-text">
                    {video.text}
                </div>
                <div>
                <TextContain
                    title="Reply"
                    handleSubmit={(e) => props.handleSubmit(e)}
                    handleChange={(e) => props.handleChange(e)}
                    videoId={props.videoId}
                    text={props.text}
                    index={index}
                    commentInfo={props.commentInfo}
                    postReply={props.postReply}
                />
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ShowComments;
