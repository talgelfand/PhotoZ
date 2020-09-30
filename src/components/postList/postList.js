import React from 'react';
import Post from '../post';

function PostList() {
    return (
        <Post
            caption="The butterfly"
            img="img/butterfly.svg"
            user="JD"
            comment="Nice picture"
        />
    )
}

export default PostList;