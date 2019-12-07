import React, { Component } from 'react';
import { getAllPosts } from '../../api/post';
import { sendLongPollingRequest } from '../../api/long-polling';
import PostList from '../../components/post/PostList';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        getAllPosts()
            .then(result => this.setState({ posts: result.reverse() }))
            .catch(err => console.log(err));

        this.initLongPollingRequest();
    }
    initLongPollingRequest = () => {
        sendLongPollingRequest()
            .then(result => {
                const updatedPost = result.data;
                if (result.type === 'NEW_POST') {
                    this.setState({ posts: [updatedPost, ...this.state.posts] });
                } else if (result.type === 'LIKE_POST') {
                    const index = this.state.posts.findIndex(post => post.id === updatedPost.id);
                    this.state.posts.splice(index, 1, updatedPost);
                    this.setState({ posts: [...this.state.posts] });
                }
                this.initLongPollingRequest();
            })
            .catch(err => console.log(err));
    };
    render() {
        return <PostList posts={this.state.posts} />;
    }
}
export default Blog;
