import React, {useState} from 'react';

const Like = (props) => {
    const [like, setLike] = useState(props.like);

    return (
        <div>
            {console.log(props)}
            <button onClick={() =>
            setLike(
                props.updateLike(props.like, props.index)
            )}>
                {props.like}
            </button>
        </div>
    )
}

export default Like;

