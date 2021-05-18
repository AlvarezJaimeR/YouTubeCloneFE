import React from 'react';
import './ShowComments.css';

const ShowComments = (props) => {
    console.log('show comments', props)
    const currentVideoId = props.currentVideo;
    console.log(currentVideoId);
    console.log(props.commentInfo);
    const commentInfo = props.commentInfo;
/*     const commentIdArray = props.commentInfo.map(video => video.videoId);
    console.log(commentIdArray); */
    const filteredIdArray = commentInfo.filter((commentInfo) => commentInfo.videoId === currentVideoId);
    console.log(filteredIdArray);
    return (
        <div>
            <h1>Show Comments</h1>
            <div>
                {filteredIdArray.map(video => 
                    <div> 
                        <div>
                            {video.date}
                        </div>
                        <div className='video-text'>
                            {video.text} 
                        </div>
                    </div>)}
            </div>
        </div>
    );
}

export default ShowComments;