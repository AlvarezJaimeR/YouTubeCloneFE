import React from "react";
import "./ShowComments.css";
import TextContain from '../TextContain/TextContain';
import ShowReply from '../ShowReply/ShowReply';
import Like from '../Like/Like';
import Dislike from '../Dislike/Dislike';

const ShowComments = (props) => {
  const currentVideoId = props.videoId;
  const commentInfo = props.commentInfo;
  const filteredIdArray = commentInfo.filter(
    (commentInfo) => commentInfo.videoId === currentVideoId);
  return (
    <div>
        {console.log('showcomments props', props)}
      <h1>Show Comments</h1>
      <div>
        {filteredIdArray.map((video, index) => 
            <div key={index}>
                <div>
                    <p>Comment Date:</p>
                    {video.date}
                </div>
                <div className="video-text">
                    {video.text}
                </div>
                <div>
                    <Like 
                        filteredIdArray={filteredIdArray}
                        index={index}
                        updateLike={props.updateLike}
                        like={filteredIdArray[index].likes}
                    />
                    <Dislike
                        filteredIdArray={filteredIdArray}
                        index={index}
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
