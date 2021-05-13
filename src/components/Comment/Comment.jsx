import React, { Component } from 'react';

class Comment extends Component {
    constructor (props){
        super(props);
        this.state = { 
            text: '',
            videoId: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const comment = {
            text: this.state.text,
            videoId: this.state.videoId
        }
        this.props.addNewComment(comment);
        this.setState({
            text: '',
            videoId: ''
        });
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>{this.props.title}</label>
                        <input type="text" name="text" value={this.state.text}
                        onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Video Id</label>
                        <input type="text" name="videoId" value = {this.state.videoId}
                        onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Add" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Comment;