import React from 'react';
import './ShowReply.css';

const ShowReply = (props) => {
    const currentVideoId = props.videoId;
    const commentInfo = props.commentInfo;
    const filteredIdArray = commentInfo.filter(
      (commentInfo) => commentInfo.videoId === currentVideoId);
    if (filteredIdArray[props.index].replies.length !== 0)
    return (
        <div className="reply">
        {filteredIdArray[props.index].replies.map((comment, index) => 
            <div key={index}>
                <div>
                    <p className="reply-top">Reply #: {index+1}</p>
                    <p className="reply-date">Reply Date: {comment.date}</p>
                </div>
                <div className="reply-text">
                    {comment.text}
                </div>
            </div>
        )}
        </div>
      );
    if (filteredIdArray[props.index].replies.length === 0)
    return (
        <div className="reply">No Replies</div>
    );
}

export default ShowReply;