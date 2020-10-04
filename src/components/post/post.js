import React, { Component } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

import './post.scss';

class Post extends Component {

    state = {
        visible: false
    }

    handleChange = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    render() {
        return (
            <div className="post">
                <p className="post__caption">{this.props.caption}</p>
                <img className="post__img" src={this.props.img} alt={this.props.caption}/>
                {this.state.visible ? (
                    <div className="post__wrapper">
                        <div className="post__user">{this.props.user}</div>
                        <div className="post__comment">{this.props.comment}</div>
                    </div>
                ) : (
                    null
                )}
                <Button onClick={this.handleChange} className="post__comments_button">
                    {this.state.visible ? "Hide comments" : "Show comments"}
                </Button>
                <InputGroup className="post__input_group">
                    <Input className="post__input" placeholder="Write a comment..."/>
                    <Button className="post__button" color="primary">Submit</Button>
                </InputGroup>
            </div>
        )
    }

}

export default Post;