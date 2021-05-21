import React, {useState} from 'react';

const Dislike = (props) => {
    const [dislike, setDislike] = useState(props.dislike);

    return (
        <div>
            {console.log(props)}
            <button onClick={() =>
            setDislike(
                props.updateDislike(props.dislike, props.index)
            )}>
                {props.dislike}
            </button>
        </div>
    )
}

export default Dislike;