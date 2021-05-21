import React, {useState} from 'react';

const Like = (props) => {
    const [like, setLike] = useState(props.like);
    const [dislike, setDislike] = useState(props.dislike);

    return (
        <div>
            <button className="btn-success" onClick={() =>
            setLike(
                props.updateLike(props.like, props.index)
            )}>
                Like: {props.like}
            </button>
            <button className="btn-danger" onClick={() =>
            setDislike(
                props.updateDislike(props.dislike, props.index)
            )}>
                Dislike: {props.dislike}
            </button>
        </div>
    )
}

export default Like;

