import React from 'react';

const TextContainer = (props) => {
    return (
        <div>
            {console.log('text container', props)}
            <form name={props.name} onSubmit={(event) => props.handleSubmit(event)}>
                <div>
                    <label>{props.title}</label>
                    <input type="text" name="text" value={props.text}
                    onChange={(event)=> props.handleChange(event)} />
                </div>
                <div className='d-none'>
                    <label>Video Id</label>
                    <input type="text" name="videoId" value ={props.videoId}
                    onChange={(event) => props.handleChange(event)} />
                </div>
                <div>
                    <button className='btn btn-danger' type = 'submit'>
                        Add {props.name}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TextContainer;