import React, { Component } from 'react';
import styles from './styles';
import Post from './Post';

class PostList extends Component {
    render() {
        return (
            <div style={styles.postsContainer}>
                {this.props.posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        );
    }
}
export default PostList;
