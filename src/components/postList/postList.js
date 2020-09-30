import React from 'react';
import Post from '../post';

function PostList() {
    return (
        <div>
            <Post
                caption="The butterfly"
                img="img/butterfly.svg"
                user="JD"
                comment="Nice picture"
            />

            <Post
                caption="True JEEP"
                img="img/jeep.svg"
                user="JD"
                comment="Great car"
            />
        </div>
    )
}

export default PostList;