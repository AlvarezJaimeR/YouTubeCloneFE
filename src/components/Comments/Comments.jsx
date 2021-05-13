import React, { Component } from 'react';
import Comment from '../Comment/Comment';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Where the comment will be.</h1>
                <Comment title='Comment' />
                <Comment title='Reply' />
            </div>
        )
    }
}

export default Comments;