import React from "react";
import "./ShowComments.css";
import TextContain from '../TextContain/TextContain';
import ShowReply from '../ShowReply/ShowReply';
import Like from '../Like/Like';

const ShowComments = (props) => {
  const currentVideoId = props.videoId;
  const commentInfo = props.commentInfo;
  const filteredIdArray = commentInfo.filter(
    (commentInfo) => commentInfo.videoId === currentVideoId);
  return (
    <div>
      <div>
        {filteredIdArray.map((video, index) => 
            <div key={index}>
                <div>
                    <p className="col-md-4 comment-text">Comment #: {index +1}</p>
                    <p>Comment Date: {video.date}</p>
                    <p className="video-text">{video.text}</p>
                </div>
                <div className="row">
                    <Like 
                        filteredIdArray={filteredIdArray}
                        index={index}
                        updateLike={props.updateLike}
                        like={filteredIdArray[index].likes}
                        updateDislike={props.updateDislike}
                        dislike={filteredIdArray[index].dislikes}
                    />
                </div>
                <div>
                    <ShowReply
                        videoId={props.videoId}
                        index={index}
                        commentInfo={props.commentInfo}
                    />
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
                    getComments={props.getComments}
                />
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ShowComments;
