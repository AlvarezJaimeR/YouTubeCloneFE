import React from 'react';

const ShowReply = (props) => {
    const currentVideoId = props.videoId;
    const commentInfo = props.commentInfo;
    const filteredIdArray = commentInfo.filter(
      (commentInfo) => commentInfo.videoId === currentVideoId);
    if (filteredIdArray[props.index].replies.length !== 0)
    return (
        <div>
          <h1>Show Replies</h1>
          <div>
            {filteredIdArray[props.index].replies.map((comment, index) => 
                <div key={index}>
                    <div>
                        <p>Reply Date:</p>
                        {comment.date}
                    </div>
                    <div>
                        {comment.text}
                    </div>
                </div>
            )}
          </div>
        </div>
      );
    if (filteredIdArray[props.index].replies.length === 0)
    return (
        <h1>No Replies</h1>
    );
}

export default ShowReply;