import React, { Component } from 'react';
import Post from '../post';

class PostList extends Component {

    state = {
        loading: true,

    }

    async componentDidMount() {
        const url = 'http://localhost:3000/api/v1/media/';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
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
}

export default PostList;