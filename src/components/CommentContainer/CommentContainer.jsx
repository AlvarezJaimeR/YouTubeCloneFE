import React from 'react';
import TextContainer from '../TextContainer/TextContainer';

const CommentContainer = (props) => {
    return (
        <div>
            {console.log('comment container', props.videoData)}
            <TextContainer title='Comment' handleSubmit={(e)=>props.handleSubmit(e)} 
                    handleChange={(e)=>props.handleChange(e)} 
                        videoData = {props.videoData} postComments={props.postComments} name='comment'
                        videoId={props.videoId} text={props.text}/>
            <TextContainer title='Reply' handleSubmit={(e)=>props.handleSubmit(e)} 
                    handleChange={(e)=>props.handleChange(e)} 
                        videoData = {props.videoData} postComments={props.postComments} name='reply'
                        videoId={props.videoId} text={props.text}/>
        </div>
    );
}

export default CommentContainer;