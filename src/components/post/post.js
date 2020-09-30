import React from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

import './post.scss';

function Post({caption, img, user, comment}) {
    return (
        <div className="post">
            <p className="post__caption">{caption}</p>
            <img className="post__img" src={img} alt={caption}/>
            <div className="post__wrapper">
                <div className="post__user">
                    <p>{user}</p>
                </div>
                <div className="post__comment">{comment}</div>
            </div>
            <InputGroup>
                <Input placeholder="Write a comment..."/>
                <Button color="primary">Submit</Button>
            </InputGroup>
        </div>
    )
}

export default Post;