import React from 'react';
import TextContainer from '../TextContainer/TextContainer';

const CommentContainer = (props) => {
    return (
        <div>
            <TextContainer title='Comment' handleSubmit={(e)=>props.handleSubmit(e)} 
                    handleChange={(e)=>props.handleChange(e)} 
                        postComments={props.postComments} name='comment'
                        videoId={props.videoId} text={props.text}/>
        </div>
    );
}

export default CommentContainer;