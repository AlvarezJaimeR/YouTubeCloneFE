import React from 'react';

const TextContainer = (props) => {
    return (
        <div>
            <form name={props.title.toLowerCase()} 
                onSubmit={(event) => props.handleSubmit(event)}>
                <div>
                    <label></label>
                    <input type="text" name="text" value={props.text}
                    onChange={(event)=> props.handleChange(event)} 
                    placeholder="Type Comment Here"/>
                    <button className='btn btn-light' type = 'submit'>
                        Add {props.title.toLowerCase()}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TextContainer;