import React from 'react';
import './ShowReply.css';

const ShowReply = (props) => {
    const currentVideoId = props.videoId;
    const commentInfo = props.commentInfo;
    const filteredIdArray = commentInfo.filter(
      (commentInfo) => commentInfo.videoId === currentVideoId);
    if (filteredIdArray[props.index].replies.length !== 0)
    return (
        <div>
          <div>
            {filteredIdArray[props.index].replies.map((comment, index) => 
                <div key={index}>
                    <div>
                        <p className="reply-text">Reply #: {index+1}</p>
                        <p>Reply Date: {comment.date}</p>
                    </div>
                    <div className="comment-text">
                        {comment.text}
                    </div>
                </div>
            )}
          </div>
        </div>
      );
    if (filteredIdArray[props.index].replies.length === 0)
    return (
        <h6>No Replies</h6>
    );
}

export default ShowReply;