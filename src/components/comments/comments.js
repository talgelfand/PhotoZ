import React from 'react';

function Comments({user, comment}) {
    return (
        <div className="post__wrapper">
            <div className="post__user">{user}</div>
            <div className="post__comment">{comment}</div>
        </div>
    )
}

export default Comments;